import { 
  Box, 
  Image, 
  Badge,
  Stack 
} from '@chakra-ui/react'
import useSWR from 'swr'
import { LuresApiResponse } from "../../../pages/api/lures/[id]"

const fetcher = (url: string) => fetch(url).then((r) => r.json())

type DetailProps = {
  chosenId: number
}

export default function LuresList(props: DetailProps): JSX.Element {
  // ID取得
  const { chosenId } = props
  // APIからデータ取得
  const { data, error } = useSWR<LuresApiResponse, Error>('/api/lures/' + chosenId, fetcher)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <p>Loading...</p>
  

  return (
    <Box maxW='sm' overflow='hidden'>
      <Image src={data.lure?.imageUrl} alt={data.lure?.imageAlt} borderRadius='lg' />

      <Box p='2'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' mr={1} colorScheme='teal'>
            New
          </Badge>
          <Badge borderRadius='full' px='2' color='gray.500'>
            {data.lure?.lureType}
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
          {data.lure?.name}
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
            WEIGHT {data.lure?.weight} g
          </Box>
          <Box textTransform='uppercase'>
            COLOR {data.lure?.color}
          </Box>
          <Box textTransform='uppercase'>
            COMPANY {data.lure?.company}
          </Box>
          <Box textTransform='uppercase'>
            FREQUENCY {data.lure?.frequency} times
          </Box>
          <Box>
            ADDED {data.lure?.createdAt}
          </Box>
          <Box>
            LAST USED {data.lure?.lastUsedAt}
          </Box>
        </Stack>

      </Box>
    </Box>
  )
}