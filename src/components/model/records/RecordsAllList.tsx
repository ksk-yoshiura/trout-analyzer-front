import {
  Box,
  Image,
  Stack
} from '@chakra-ui/react'
import NextLink from "next/link"
import React from 'react';
import useSWR from 'swr'

import { IMAGE_EXT, S3_DOMAIN_PATH } from "../../../const/image"
import type { RecordsApiResponse } from "../../../pages/api/records/all"
import getDateFormatted from "../../../utils/dateFormat"
import Loading from '../../shared/Loading'
import NoDataAlert from '../../shared/NoDataAlert'


export default function RecordsAllList(): JSX.Element {

  // APIからデータ取得
  const { data, error } = useSWR<RecordsApiResponse, Error>('records/all')
  if (!data) return <Loading />
  if (error) return <div>An error has occurred.</div>
  // レコードデータ
  const recordListData = data.result ? data.result : []

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
                  <Image p='2' w='40%' src={item.Field.FieldImage.image_file && S3_DOMAIN_PATH ? S3_DOMAIN_PATH + item.Field.FieldImage.image_file + IMAGE_EXT : '/no_image.png'} alt={item.Field.name ?? 'No Image'} />

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