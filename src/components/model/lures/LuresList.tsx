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
import type { LuresListApiResponse } from "../../../pages/api/lures/index"
import getDateFormatted from "../../../utils/dateFormat"
import DetailModal from '../../shared/DetailModal'
import ErrorMessage from '../../shared/ErrorMessage'
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
  const { data, error, mutate } = useSWR<LuresListApiResponse, Error>('lures?type_id=' + typeId)
  if (!data) { mutate(); return <Loading /> }
  if (error) return <ErrorMessage />
  // ルアーデータ
  const luresListData = data.result ? data.result : []

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
                  <Image src={item.LureImage.image_file && S3_DOMAIN_PATH ? S3_DOMAIN_PATH + item.LureImage.image_file + IMAGE_EXT : '/no_image.png'} alt={item.name ?? 'No Image'} />

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