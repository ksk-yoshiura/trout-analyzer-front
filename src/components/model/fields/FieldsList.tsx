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

import type { FieldsApiResponse } from "../../../pages/api/fields/index"
import getDateFormatted from "../../../utils/dateFormat"
import DetailModal from '../../shared/DetailModal'
import Loading from '../../shared/Loading'
import NoDataAlert from '../../shared/NoDataAlert'
import FieldDetail from './FieldDetail'

export default function FieldsList(): JSX.Element {
  // モーダル
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [chosenId, idState] = useState(0)
  // APIからデータ取得
  const { data, error } = useSWR<FieldsApiResponse, Error>('fields', {
    // pollingの期間
    refreshInterval: 0,
    // windowのフォーカス時にRevalidateする
    revalidateOnFocus: true
  })
  if (error) return <div>An error has occurred.</div>
  if (!data) return <Loading />
  // フィールドデータ
  const fieldsListData = data.result ? data.result : []

  // S3パス
  const s3DomainPath = process.env.NEXT_PUBLIC_S3_DOMAIN

  // 画像拡張子
  const image_ext = '.png'

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
                  <Image src={item.FieldImage.image_file && s3DomainPath ? s3DomainPath + item.FieldImage.image_file + image_ext : '/no_image.png'} alt={item.name ?? 'No Image'} />

                  <Box p='2'>
                    <Box display='flex' alignItems='baseline'>
                      {
                        item.lastVisitedAt ?
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
                    <Box
                      color='gray.500'
                      fontWeight='semibold'
                      letterSpacing='wide'
                      fontSize='xs'
                      textTransform='uppercase'
                      ml='2'
                    >
                      last visited {item.lastVisitedAt ? getDateFormatted(item.lastVisitedAt) : null}
                    </Box>

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