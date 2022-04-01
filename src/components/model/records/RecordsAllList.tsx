import React from 'react';
import {
  Box,
  Image,
  Stack
} from '@chakra-ui/react'
import NextLink from "next/link"
import Loading from '../../shared/Loading'
import useSWR from 'swr'
import { RecordsApiResponse } from "../../../pages/api/records/all"

export default function RecordsAllList(): JSX.Element {

  // APIからデータ取得
  const { data, error } = useSWR<RecordsApiResponse, Error>('records/all')
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />
  
  return (
    <>
      <Stack spacing={5} mr={5}>
        {
          data.result?.map((item, index) => {
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
                  <Image p='2' w='40%' src={item.Field.imageUrl} alt={item.Field.imageAlt} />

                  <Box p='2' w='50%'>
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
                      sum {item.caughtSum}
                    </Box>
                    <Box
                      color='gray.500'
                      fontWeight='semibold'
                      letterSpacing='wide'
                      fontSize='xs'
                      textTransform='uppercase'
                      ml='2'
                    >
                      visited {item.visitedAt}
                    </Box>

                  </Box>
                </Box>
              </NextLink>
            )
          })
        }

      </Stack>
    </>
  )
}