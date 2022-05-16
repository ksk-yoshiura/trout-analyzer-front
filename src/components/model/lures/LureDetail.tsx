import React from 'react'
import {
  Box,
  Image,
  Badge,
  Stack
} from '@chakra-ui/react'
import Loading from '../../shared/Loading'
import useSWR from 'swr'
import { LuresApiResponse } from "../../../pages/api/lures/[id]"

type DetailProps = {
  chosenId: number
}

export default function LuresList(props: DetailProps): JSX.Element {
  // ID取得
  const { chosenId } = props
  // APIからデータ取得
  const { data, error } = useSWR<LuresApiResponse, Error>('lures/' + chosenId)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />

  // 画像URL
  const imageUrl = data.result?.imageUrl ? data.result.imageUrl : '/no_image.png'
  // 画像alt
  const imageAlt = data.result?.imageAlt ? data.result.imageAlt : 'No Image'

  return (
    <Box maxW='sm' overflow='hidden'>
      <Image src={imageUrl} alt={imageAlt} borderRadius='lg' />

      <Box p='2'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' mr={1} colorScheme='teal'>
            New
          </Badge>
          <Badge borderRadius='full' px='2' color='gray.500'>
            {data.result?.LureType.typeName}
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
          <Box>
            WEIGHT {data.result?.weight} g
          </Box>
          <Box textTransform='uppercase'>
            COLOR {data.result?.color}
          </Box>
          <Box textTransform='uppercase'>
            COMPANY {data.result?.companyName}
          </Box>
          <Box textTransform='uppercase'>
            FREQUENCY {data.result?.frequency} times
          </Box>
          <Box>
            ADDED {data.result?.CreatedAt}
          </Box>
          <Box>
            LAST USED {data.result?.lastUsedAt}
          </Box>
        </Stack>

      </Box>
    </Box>
  )
}