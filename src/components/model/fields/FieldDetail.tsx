import React from 'react'
import {
  Box,
  Image,
  Badge,
  Stack
} from '@chakra-ui/react'
import useSWR from 'swr'
import { FieldsApiResponse } from "../../../pages/api/fields/[id]"
import axios from'axios'

const fetcher = (url: string) => axios(url)
.then((res) => {
  return res.data
})

type DetailProps = {
  chosenId: number
}

export default function FieldDetail(props: DetailProps): JSX.Element {
  // ID取得
  const { chosenId } = props
  
  // APIからデータ取得
  const { data, error } = useSWR<FieldsApiResponse, Error>('/api/fields/' + chosenId, fetcher)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <p>Loading...</p>

  return (
    <Box maxW='sm' overflow='hidden'>
      <Image src={data.field?.imageUrl} alt={data.field?.imageAlt} borderRadius='lg' />

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
          {data.field?.name}
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
            ADDRESS {data.field?.address}
          </Box>
          <Box textTransform='uppercase'>
            FREQUENCY {data.field?.frequency} times
          </Box>
          <Box>
            ADDED {data.field?.createdAt}
          </Box>
          <Box>
            LAST VISITED {data.field?.lastVisitedAt}
          </Box>
        </Stack>

      </Box>
    </Box>
  )
}