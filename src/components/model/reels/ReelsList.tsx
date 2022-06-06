import React, { useState } from 'react'
import {
  Box,
  Image,
  Badge,
  Wrap,
  WrapItem,
  useDisclosure,
  Button,
  ModalFooter,
  ModalBody,
} from '@chakra-ui/react'
import ReelDetail from './ReelDetail'
import DetailModal from '../../shared/DetailModal'
import NoDataAlert from '../../shared/NoDataAlert'
import DetailTackleModal from '../../shared/DetailTackleModal'
import Loading from '../../shared/Loading'
import useSWR, { mutate } from 'swr'
import { ReelsApiResponse } from "../../../pages/api/reels/index"
import { getDateFormatted } from "../../../utils/dateFormat"

type ListProps = {
  isTackle: boolean
  setNewReelId?: React.Dispatch<React.SetStateAction<number>>;
}

export default function ReelsList(props: ListProps): JSX.Element {
  // タックルフォームでの呼び出しの場合
  const { isTackle, setNewReelId } = props
  // モーダル
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [chosenId, idState] = useState(0)
  // APIからデータ取得
  const { data, error } = useSWR<ReelsApiResponse, Error>('reels')
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />
  // リールデータ
  const reelsListData = data.result? data.result : []

  // S3パス
  const s3DomainPath = process.env.NEXT_PUBLIC_S3_DOMAIN
  // 画像拡張子
  const image_ext = '.png'
  function clickHandler(value: string) {
    // 型変換
    const lureIdNumber = Number(value)

    // クリックされたカードから得たIDを更新
    idState(lureIdNumber)
  }

  // タックル用リール選択
  function selectReelForTackleHandler(event: any) {
    const { target } = event
    const selectId = target.value
    setNewReelId ? setNewReelId(selectId) : null
  }

  // モーダルを部分的に移行し共通化
  const ReelDetailModal = () => {
    return (
      <DetailModal isOpen={isOpen} onClose={onClose} chosenId={chosenId} title={'reel'} mutate={mutate} >
        <ReelDetail chosenId={chosenId} />
      </DetailModal>
    )
  }

  // タックル用モーダル
  const ReelDetailForTackleModal = () => {
    return (
      <DetailTackleModal isOpen={isOpen} onClose={onClose} chosenId={chosenId} title={'reel'} >
        <ModalBody>
          <ReelDetail chosenId={chosenId} />
        </ModalBody>

        <ModalFooter display={'flex'} justifyContent={'space-between'}>
          <Button variant='solid' onClick={() => onClose()}>Cancel</Button>
          <Button
            colorScheme='blue'
            value={chosenId}
            variant='solid'
            onClick={
              (event) => {
                selectReelForTackleHandler(event);
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
          reelsListData.length > 0 ? reelsListData.map((item, index) => {
            return (
              <WrapItem key={index} onClick={() => { onOpen(), clickHandler(item.ID) }} type='button' as={"button"}>
                <Box w={160} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                  <Image src={item.ReelImage.image_file? s3DomainPath + item.ReelImage.image_file + image_ext: '/no_image.png'} alt={item.name ?? 'No Image'} />

                  <Box p='2'>
                    <Box display='flex' alignItems='baseline'>
                      <Badge borderRadius='full' px='2' mr={1} colorScheme='teal'>
                        New
                      </Badge>
                      <Badge borderRadius='full' px='2' color='gray.500'>
                        {item.gear}
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
                      added { getDateFormatted(item.CreatedAt)} 
                    </Box>

                  </Box>
                </Box>
              </WrapItem>
            )
          }) :
            <NoDataAlert title={'reels'} />
        }
        {
          isTackle ? <ReelDetailForTackleModal /> : <ReelDetailModal />
        }

      </Wrap>
    </>
  )
}