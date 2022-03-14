import React from 'react'
import {
  Box,
  Image,
  Badge,
  Stack
} from '@chakra-ui/react'
import Loading from '../../shared/Loading'
import useSWR from 'swr'
import { FieldsApiResponse } from "../../../pages/api/fields/[id]"

type DetailProps = {
  chosenId: number
}

export default function FieldDetail(props: DetailProps): JSX.Element {
  // ID取得
  const { chosenId } = props
  
  // APIからデータ取得
  const { data, error } = useSWR<FieldsApiResponse, Error>('fields/' + chosenId)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />

  return (
    <Box maxW='sm' overflow='hidden'>
      <Image src={data.result?.imageUrl} alt={data.result?.imageAlt} borderRadius='lg' />

      <Box p='2'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' mr={1} colorScheme='teal'>
            New
          </Badge>
        </Box>

        <Box
          my='2'
          fontWeight='semibold'
          fontSize={18}
          as='h3'
          lineHeight='tight'
          isTruncated
        >
          {data.result?.name}
        </Box>

        <Stack
          color='gray.500'
          fontWeight='semibold'
          letterSpacing='wide'
          fontSize='xs'
          ml='2'
          spacing={1}
        >
          <Box textTransform='uppercase'>
            ADDRESS {data.result?.address}
          </Box>
          <Box textTransform='uppercase'>
            FREQUENCY {data.result?.frequency} times
          </Box>
          <Box>
            ADDED {data.result?.CreatedAt}
          </Box>
          <Box>
            LAST VISITED {data.result?.lastVisitedAt}
          </Box>
        </Stack>

      </Box>
    </Box>
  )
}