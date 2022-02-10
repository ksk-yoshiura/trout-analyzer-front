import { 
  Box, 
  Image, 
  Badge,
  Stack 
} from '@chakra-ui/react'
import useSWR from 'swr'
import { RodsApiResponse } from "../../../pages/api/rods/[id]"
import axios from'axios'

const fetcher = (url: string) => axios(url)
.then((res) => {
  return res.data
})

type DetailProps = {
  chosenId: number
}

export default function RodDetail(props: DetailProps): JSX.Element {
  // ID取得
  const { chosenId } = props
  // APIからデータ取得
  const { data, error } = useSWR<RodsApiResponse, Error>('/api/rods/' + chosenId, fetcher)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <p>Loading...</p>

  return (
    <Box maxW='sm' overflow='hidden'>
      <Image src={data.rod?.imageUrl} alt={data.rod?.imageAlt} borderRadius='lg' />

      <Box p='2'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' mr={1} colorScheme='teal'>
            New
          </Badge>
          <Badge borderRadius='full' px='2' color='gray.500'>
            {data.rod?.hardness}
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
          {data.rod?.name}
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
            LENGTH {data.rod?.length} ft
          </Box>
          <Box textTransform='uppercase'>
            COMPANY {data.rod?.company}
          </Box>
          <Box>
            ADDED {data.rod?.createdAt}
          </Box>
        </Stack>

      </Box>
    </Box>
  )
}