import React, { useState } from 'react'
import { useRouter } from "next/router";
import {
  Box,
  Image,
  Badge,
  Stack,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import Loading from '../../shared/Loading'
import NextLink from "next/link"
import RecordPatternDetail from './RecordPatternDetail'
import useSWR from 'swr'
import { PatternsApiResponse } from "../../../pages/api/patterns/index"


export default function RecordsAllList(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [chosenId, idState] = useState(0)

  // クエリからレコードID取得
  const route = useRouter();
  const recordId = route.query.record_id

  // APIからデータ取得
  const { data, error } = useSWR<PatternsApiResponse, Error>('patterns/list/' + recordId)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />

  function clickHandler(value: string) {
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
          data.result?.map((item, index) => {
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
                <Box pt='2'>
                  <Box display='inline-block' alignItems='baseline'>
                    <Badge borderRadius='full' px='2' mr={1} colorScheme='teal'>
                      {item.ResultCondition.typeName}
                    </Badge>
                    <Badge borderRadius='full' px='2' mr={1} color='gray.500'>
                      { item.Lure.LureType.typeName }
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
                    time {item.CreatedAt}
                  </Box>
                </Box>
              </Box>
            )
          })
        }

        <RecordPatternDetailModal />

      </Stack>
    </>
  )
}