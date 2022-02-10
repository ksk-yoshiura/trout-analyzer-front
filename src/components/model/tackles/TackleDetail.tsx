import { 
  Box, 
  Image, 
  Badge,
  Stack 
} from '@chakra-ui/react'
import useSWR from 'swr'
import { TacklesApiResponse } from "../../../pages/api/tackles/[id]"
import axios from'axios'

const fetcher = (url: string) => axios(url)
.then((res) => {
  return res.data
})

type DetailProps = {
  chosenId: number
}

export default function TackleDetail(props: DetailProps): JSX.Element {
  // ID取得
  const { chosenId } = props
  // APIからデータ取得
  const { data, error } = useSWR<TacklesApiResponse, Error>('/api/tackles/' + chosenId, fetcher)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <p>Loading...</p>

  return (
    <Box maxW='sm' overflow='hidden'>
      <Image src={data.tackle?.rod.imageUrl} alt={data.tackle?.rod.imageAlt} borderRadius='lg' />
      <Box p='2'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' color='gray.500'>
            {data.tackle?.rod.hardness}
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
          {data.tackle?.rod.name}
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
            LENGTH {data.tackle?.rod.length} ft
          </Box>
          <Box textTransform='uppercase'>
            COMPANY {data.tackle?.rod.companyName}
          </Box>
          <Box>
            ADDED {data.tackle?.rod.createdAt}
          </Box>
        </Stack>
      </Box>

      <Image src={data.tackle?.reel.imageUrl} alt={data.tackle?.reel.imageAlt} borderRadius='lg' />
      <Box p='2'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' color='gray.500'>
            {data.tackle?.reel.type}
          </Badge>
          <Badge borderRadius='full' px='2' color='gray.500'>
            {data.tackle?.reel.gear}
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
          {data.tackle?.reel.name}
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
            COMPANY {data.tackle?.reel.companyName}
          </Box>
          <Box>
            ADDED {data.tackle?.reel.createdAt}
          </Box>
        </Stack>
      </Box>

      <Image src={data.tackle?.line.imageUrl} alt={data.tackle?.line.imageAlt} borderRadius='lg' />
      <Box p='2'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' color='gray.500'>
            {data.tackle?.line.lineType}
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
          {data.tackle?.line.name}
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
            THICKNESS {data.tackle?.line.thickness} lb
          </Box>
          <Box textTransform='uppercase'>
            COMPANY {data.tackle?.line.companyName}
          </Box>
          <Box>
            ADDED {data.tackle?.line.createdAt}
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}