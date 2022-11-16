import {
  Badge,
  Box,
  Button,
  Image,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import useSWR from 'swr'

import type { RodsApiResponse } from "../../../pages/api/rods/index"
import getDateFormatted from "../../../utils/dateFormat"
import DetailModal from '../../shared/DetailModal'
import DetailTackleModal from '../../shared/DetailTackleModal'
import Loading from '../../shared/Loading'
import NoDataAlert from '../../shared/NoDataAlert'
import RodDetail from './RodDetail'

const fetcher = (url: string) => {
  const response = axios(url)
    .then((res) => {
      return res.data
    })
  return response
};

type ListProps = {
  isTackle: boolean
  setNewRodId?: React.Dispatch<React.SetStateAction<number>>;
}

export default function RodsList(props: ListProps): JSX.Element {
  // タックルフォームでの呼び出しの場合
  const { isTackle, setNewRodId } = props
  // モーダル
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [chosenId, idState] = useState(0)

  // APIからデータ取得
  const options = {
    revalidateOnFocus: true,
    refreshInterval: 100,
  };
  const { data, error } = useSWR<RodsApiResponse, Error>('rods', fetcher, options)
  if (!data) return <Loading />
  if (error) return <div>An error has occurred.</div>
  // ロッドデータ
  const rodsListData = data.result ? data.result : []

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

  // タックル用ロッド選択
  const selectRodForTackleHandler = (event: any) => {
    const { target } = event
    const selectId = target.value
    setNewRodId ? setNewRodId(selectId) : null
  }

  // モーダルを部分的に移行し共通化
  const RodDetailModal = () => {
    return (
      <DetailModal isOpen={isOpen} onClose={onClose} chosenId={chosenId} title={'rod'} >
        <RodDetail chosenId={chosenId} />
      </DetailModal>
    )
  }

  // タックル用モーダル
  const RodDetailForTackleModal = () => {
    return (
      <DetailTackleModal isOpen={isOpen} onClose={onClose} title={'rod'} >
        <ModalBody>
          <RodDetail chosenId={chosenId} />
        </ModalBody>

        <ModalFooter display={'flex'} justifyContent={'space-between'}>
          <Button variant='solid' onClick={() => { return onClose() }}>Cancel</Button>
          <Button
            colorScheme='blue'
            value={chosenId}
            variant='solid'
            onClick={
              (event) => {
                selectRodForTackleHandler(event);
                onClose()
              }
            }>Select</Button>
        </ModalFooter>
      </DetailTackleModal>
    )
  }

  return (
    <>
      <Wrap spacing={5}>
        {
          rodsListData.length > 0 ? rodsListData.map((item, index) => {
            return (
              <WrapItem key={index} onClick={() => { onOpen(), clickHandler(item.ID) }} type='button' as={"button"}>
                <Box w={160} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                  <Image src={item.RodImage.image_file && s3DomainPath ? s3DomainPath + item.RodImage.image_file + image_ext : '/no_image.png'} alt={item.name ?? 'No Image'} />

                  <Box p='2'>
                    <Box display='flex' alignItems='baseline'>
                      <Badge borderRadius='full' px='2' color='gray.500'>
                        {item.RodHardnessCondition.typeName}
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
                      length {item.length} ft
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
            <NoDataAlert title={'rods'} />
        }
        {
          isTackle ? <RodDetailForTackleModal /> : <RodDetailModal />
        }
      </Wrap>
    </>
  )
}