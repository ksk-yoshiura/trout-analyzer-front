import React from 'react'
import { 
  Box, 
  Image, 
  Badge,
  Stack 
} from '@chakra-ui/react'
import Loading from '../../shared/Loading'
import useSWR from 'swr'
import { TacklesApiResponse } from "../../../pages/api/tackles/[id]"

type DetailProps = {
  chosenId: number
}

export default function TackleDetail(props: DetailProps): JSX.Element {
  // ID取得
  const { chosenId } = props
  // APIからデータ取得
  const { data, error } = useSWR<TacklesApiResponse, Error>('tackles/' + chosenId)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />

  return (
    <Box maxW='sm' overflow='hidden'>
      <Image src={data.result?.rod.imageUrl} alt={data.result?.rod.imageAlt} borderRadius='lg' />
      <Box p='2'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' color='gray.500'>
            {data.result?.rod.hardness}
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
          {data.result?.rod.name}
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
            LENGTH {data.result?.rod.length} ft
          </Box>
          <Box textTransform='uppercase'>
            COMPANY {data.result?.rod.companyName}
          </Box>
          <Box>
            ADDED {data.result?.rod.createdAt}
          </Box>
        </Stack>
      </Box>

      <Image src={data.result?.reel.imageUrl} alt={data.result?.reel.imageAlt} borderRadius='lg' />
      <Box p='2'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' color='gray.500'>
            {data.result?.reel.type}
          </Badge>
          <Badge borderRadius='full' px='2' color='gray.500'>
            {data.result?.reel.gear}
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
          {data.result?.reel.name}
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
            COMPANY {data.result?.reel.companyName}
          </Box>
          <Box>
            ADDED {data.result?.reel.createdAt}
          </Box>
        </Stack>
      </Box>

      <Image src={data.result?.line.imageUrl} alt={data.result?.line.imageAlt} borderRadius='lg' />
      <Box p='2'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' color='gray.500'>
            {data.result?.line.lineType}
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
          {data.result?.line.name}
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
            THICKNESS {data.result?.line.thickness} lb
          </Box>
          <Box textTransform='uppercase'>
            COMPANY {data.result?.line.companyName}
          </Box>
          <Box>
            ADDED {data.result?.line.createdAt}
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}