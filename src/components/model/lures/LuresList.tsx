import {
  Badge,
  Box,
  Image,
  useDisclosure,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import useSWR from 'swr'

import type { LuresApiResponse } from "../../../pages/api/lures/index"
import getDateFormatted from "../../../utils/dateFormat"
import DetailModal from '../../shared/DetailModal'
import Loading from '../../shared/Loading'
import NoDataAlert from '../../shared/NoDataAlert'
import LureDetail from './LureDetail'

type ListProps = {
  typeId?: string;
}

export default function LuresList(props: ListProps): JSX.Element {
  // モーダル
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [chosenId, idState] = useState(0)

  // ルアータイプID
  const { typeId } = props
  // APIからデータ取得
  const { data, error } = useSWR<LuresApiResponse, Error>('lures?type_id=' + typeId)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />
  // ルアーデータ
  const luresListData = data.result ? data.result : []

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
  const LureDetailModal = () => {
    return (
      <DetailModal isOpen={isOpen} onClose={onClose} chosenId={chosenId} title={'lure'} >
        <LureDetail chosenId={chosenId} />
      </DetailModal>
    )
  }

  return (
    <>
      <Wrap spacing={5}>
        {
          luresListData.length > 0 ? luresListData.map((item, index) => {
            return (
              <WrapItem key={index} onClick={() => { onOpen(), clickHandler(item.ID) }} type='button' as={"button"}>
                <Box w={160} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                  <Image src={item.LureImage.image_file && s3DomainPath ? s3DomainPath + item.LureImage.image_file + image_ext : '/no_image.png'} alt={item.name ?? 'No Image'} />

                  <Box p='2'>
                    <Box display='flex' alignItems='baseline'>
                      <Badge borderRadius='full' px='2' color='gray.500'>
                        {item.LureType.typeName}
                      </Badge>
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
                      added {getDateFormatted(item.CreatedAt)}
                    </Box>

                  </Box>
                </Box>
              </WrapItem>
            )
          }) :
            <NoDataAlert title={'lures'} />
        }
        <LureDetailModal />

      </Wrap>
    </>
  )
}