import React from 'react'
import { 
  Box, 
  Image, 
  Badge,
  Stack 
} from '@chakra-ui/react'
import useSWR from 'swr'
import { ReelsApiResponse } from "../../../pages/api/reels/[id]"

type DetailProps = {
  chosenId: number
}

export default function ReelDetail(props: DetailProps): JSX.Element {
  // ID取得
  const { chosenId } = props
  // APIからデータ取得
  const { data, error } = useSWR<ReelsApiResponse, Error>('/api/reels/' + chosenId)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <p>Loading...</p>

  return (
    <Box maxW='sm' overflow='hidden'>
      <Image src={data.reel?.imageUrl} alt={data.reel?.imageAlt} borderRadius='lg' />

      <Box p='2'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' mr={1} colorScheme='teal'>
            New
          </Badge>
          <Badge borderRadius='full' px='2' color='gray.500'>
            {data.reel?.type}
          </Badge>
          <Badge borderRadius='full' px='2' color='gray.500'>
            {data.reel?.gear}
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
          {data.reel?.name}
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
            COMPANY {data.reel?.company}
          </Box>
          <Box>
            ADDED {data.reel?.createdAt}
          </Box>
        </Stack>

      </Box>
    </Box>
  )
}