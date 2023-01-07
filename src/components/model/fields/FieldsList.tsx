import {
  Badge,
  Box,
  Image,
  useDisclosure,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import useSWR from 'swr'

import { IMAGE_EXT, S3_DOMAIN_PATH } from "../../../const/image"
import type { FieldsListApiResponse } from "../../../pages/api/fields/index"
import getDateFormatted from "../../../utils/dateFormat"
import DetailModal from '../../shared/DetailModal'
import ErrorMessage from '../../shared/ErrorMessage'
import Loading from '../../shared/Loading'
import NoDataAlert from '../../shared/NoDataAlert'
import FieldDetail from './FieldDetail'


export default function FieldsList(): JSX.Element {
  // モーダル
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [chosenId, idState] = useState(0)

  // APIからデータ取得
  const { data, error } = useSWR<FieldsListApiResponse, Error>('fields')
  if (!data) return <Loading />
  if (error) return <ErrorMessage />
  // フィールドデータ
  const fieldsListData = data.result ? data.result : []
  console.log(data.result)

  const clickHandler = (value: string) => {
    // 型変換
    const lureIdNumber = Number(value)

    // クリックされたカードから得たIDを更新
    idState(lureIdNumber)
  }

  // モーダルを部分的に移行し共通化
  // 完全移行はonOpen()が動作しなくなるので断念
  const FieldDetailModal = () => {
    return (
      <DetailModal isOpen={isOpen} onClose={onClose} chosenId={chosenId} title={'field'} >
        <FieldDetail chosenId={chosenId} />
      </DetailModal>
    )
  }

  return (
    <>
      <Wrap spacing={5}>
        {
          fieldsListData.length > 0 ? fieldsListData.map((item, index) => {
            return (
              <WrapItem key={index} onClick={() => { onOpen(), clickHandler(item.ID) }} type='button' as={"button"}>
                <Box w={160} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                  <Image src={item.FieldImage.image_file && S3_DOMAIN_PATH ? S3_DOMAIN_PATH + item.FieldImage.image_file + IMAGE_EXT : '/no_image.png'} alt={item.name ?? 'No Image'} />

                  <Box p='2'>
                    <Box display='flex' alignItems='baseline'>
                      {
                        item.lastVisitedAt && item.lastVisitedAt !== "0001-01-01T00:00:00Z" ?
                          <></>
                          :
                          <Badge borderRadius='full' px='2' mr={1} colorScheme='teal'>
                            New
                          </Badge>
                      }
                    </Box>
                    <Box
                      mt='1'
                      fontWeight='semibold'
                      as='h4'
                      lineHeight='tight'
                      isTruncated
                    >
                      {item.name}
                    </Box>
                    {
                      item.lastVisitedAt && item.lastVisitedAt !== "0001-01-01T00:00:00Z"
                        ?
                        <Box
                          color='gray.500'
                          fontWeight='semibold'
                          letterSpacing='wide'
                          fontSize='xs'
                          textTransform='uppercase'
                          ml='2'
                        >
                          last visited {item.lastVisitedAt && item.lastVisitedAt !== "0001-01-01T00:00:00Z" ? getDateFormatted(item.lastVisitedAt) : null}
                        </Box>
                        : <></>
                    }

                  </Box>
                </Box>
              </WrapItem>
            )
          }) :
            <NoDataAlert title={'fields'} />
        }
        <FieldDetailModal />

      </Wrap>
    </>
  )
}