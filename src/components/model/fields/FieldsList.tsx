import React from 'react'
import { useState } from 'react'
import {
  Box,
  Image,
  Badge,
  Wrap,
  WrapItem,
  useDisclosure,
} from '@chakra-ui/react'
import FieldDetail from './FieldDetail'
import DetailModal from '../../shared/DetailModal'
import NoDataAlert from '../../shared/NoDataAlert'
import Loading from '../../shared/Loading'
import useSWR, { mutate } from 'swr'
import { FieldsApiResponse } from "../../../pages/api/fields/index"

export default function FieldsList(): JSX.Element {
  // モーダル
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [chosenId, idState] = useState(0)
  // APIからデータ取得
  const { data, error } = useSWR<FieldsApiResponse, Error>('fields')
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />
  // フィールドデータ
  const fieldsListData = data.result ? data.result : []

  function clickHandler(value: string) {
    // 型変換
    const lureIdNumber = Number(value)

    // クリックされたカードから得たIDを更新
    idState(lureIdNumber)
  }

  // モーダルを部分的に移行し共通化
  // 完全移行はonOpen()が動作しなくなるので断念
  const FieldDetailModal = () => {
    return (
      <DetailModal isOpen={isOpen} onClose={onClose} chosenId={chosenId} title={'field'} mutate={mutate} >
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
                  <Image src={item.imageUrl} alt={item.imageAlt} />

                  <Box p='2'>
                    <Box display='flex' alignItems='baseline'>
                      <Badge borderRadius='full' px='2' mr={1} colorScheme='teal'>
                        New
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
                      last visited {item.lastVisitedAt}
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