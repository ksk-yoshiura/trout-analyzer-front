import {
  Badge,
  Box,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
} from '@chakra-ui/react'
import NextLink from "next/link"
import { useRouter } from "next/router";
import React, { useState } from 'react'
import useSWR from 'swr'

import type { PatternsApiResponse } from "../../../pages/api/patterns/index"
import getTimeFormatted from "../../../utils/timeFormat"
import Loading from '../../shared/Loading'
import NoDataAlert from '../../shared/NoDataAlert'
import RecordPatternDetail from './RecordPatternDetail'


export default function RecordsAllList(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [chosenId, idState] = useState(0)

  // クエリからレコードID取得
  const route = useRouter();
  const recordId = route.query.record_id

  // S3パス
  const s3DomainPath = process.env.NEXT_PUBLIC_S3_DOMAIN
  // 画像拡張子
  const image_ext = '.png'

  // APIからデータ取得
  const { data } = useSWR<PatternsApiResponse, Error>('patterns/list/' + recordId)
  if (!data) return <Loading />
  // パターンデータ
  const patternsListData = data.result ? data.result : []

  const clickHandler = (value: string) => {
    // 型変換
    const lureIdNumber = Number(value)

    // クリックされたカードから得たIDを更新
    idState(lureIdNumber)
  }

  const RecordPatternDetailModal = () => {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Pattern Detail</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <RecordPatternDetail chosenId={chosenId} />
          </ModalBody>

          <ModalFooter>
            <NextLink href={"/records/" + recordId + "/patterns/edit/" + chosenId} passHref>
              <Button variant='ghost'>Edit</Button>
            </NextLink>

          </ModalFooter>
        </ModalContent>
      </Modal>
    )
  }

  return (
    <>
      <Stack spacing={5} mr={5}>
        {
          patternsListData.length > 0 ? patternsListData.map((item, index) => {
            return (
              <Box
                key={index}
                onClick={() => {
                  onOpen(),
                    clickHandler(item.ID)
                }}
                type='button' as={"button"}
                display="flex"
                w='100wh'
                maxW='sm'
                borderWidth='1px'
                borderRadius='lg'
                overflow='hidden'
              >
                <Image p='2' w='40%' src={s3DomainPath + item.Lure.LureImage.image_file + image_ext ?? '/no_image.png'} alt={item.Lure.name ?? 'No Image'} />
                <Box pt='2'>
                  <Box display='inline-block' alignItems='baseline'>
                    <Badge borderRadius='full' px='2' mr={1} colorScheme='teal'>
                      {item.ResultCondition.typeName}
                    </Badge>
                    <Badge borderRadius='full' px='2' mr={1} color='gray.500'>
                      {item.Lure.LureType.typeName}
                    </Badge>
                    <Badge borderRadius='full' px='2' mr={1} color='gray.500'>
                      {item.WeatherCondition.typeName}
                    </Badge>
                    <Badge borderRadius='full' px='2' mr={1} color='gray.500'>
                      {item.DepthCondition.typeName}
                    </Badge>
                    <Badge borderRadius='full' px='2' mr={1} color='gray.500'>
                      {item.SpeedCondition.typeName}
                    </Badge>
                  </Box>
                  <Box
                    color='gray.500'
                    fontWeight='semibold'
                    letterSpacing='wide'
                    fontSize='xs'
                    textTransform='uppercase'
                    ml='2'
                  >
                    time {getTimeFormatted(item.CreatedAt)}
                  </Box>
                </Box>
              </Box>
            )
          }) :
            <NoDataAlert title={'patterns'} />
        }

        <RecordPatternDetailModal />

      </Stack>
    </>
  )
}