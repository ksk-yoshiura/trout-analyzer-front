import {
  Box,
  Image,
  Stack
} from '@chakra-ui/react'
import NextLink from "next/link"
import React from 'react';
import useSWR from 'swr'

import type { RecordsApiResponse } from "../../../pages/api/records/all"
import { getDateFormatted } from "../../../utils/dateFormat"
import Loading from '../../shared/Loading'
import NoDataAlert from '../../shared/NoDataAlert'

export default function RecordsAllList(): JSX.Element {

  // APIからデータ取得
  const { data, error } = useSWR<RecordsApiResponse, Error>('records/all')
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />
  // レコードデータ
  const recordListData = data.result ? data.result : []

  // S3パス
  const s3DomainPath = process.env.NEXT_PUBLIC_S3_DOMAIN
  // 画像拡張子
  const image_ext = '.png'
  return (
    <>
      <Stack spacing={5} mr={5}>
        {
          recordListData.length > 0 ? recordListData.map((item, index) => {
            return (
              <NextLink key={index} href={"/records/" + item.ID + "/patterns/list"} passHref>
                <Box
                  display="flex"
                  w='100wh'
                  maxW='sm'
                  borderWidth='1px'
                  borderRadius='lg'
                  type='button' as={"button"}
                  overflow='hidden'
                >
                  <Image p='2' w='40%' src={s3DomainPath + item.Field.FieldImage.image_file + image_ext ?? '/no_image.png'} alt={item.Field.name ?? 'No Image'} />

                  <Box p='2' w='60%'>
                    <Box
                      mt='1'
                      fontWeight='semibold'
                      as='h4'
                      lineHeight='tight'
                      isTruncated
                    >
                      {item.Field.name}
                    </Box>
                    <Box
                      color='gray.500'
                      fontWeight='semibold'
                      letterSpacing='wide'
                      fontSize='xs'
                      textTransform='uppercase'
                      ml='2'
                    >
                      visited {getDateFormatted(item.CreatedAt)}
                    </Box>

                  </Box>
                </Box>
              </NextLink>
            )
          }) :
            <NoDataAlert title={'records'} />
        }

      </Stack>
    </>
  )
}