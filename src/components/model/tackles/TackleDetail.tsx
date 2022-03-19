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
      <Image src={data.result?.Rod.imageUrl} alt={data.result?.Rod.imageAlt} borderRadius='lg' />
      <Box p='2'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' color='gray.500'>
            {data.result?.Rod.RodHardnessCondition.typeName}
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
          {data.result?.Rod.name}
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
            LENGTH {data.result?.Rod.length} ft
          </Box>
          <Box textTransform='uppercase'>
            COMPANY {data.result?.Rod.companyName}
          </Box>
          <Box>
            ADDED {data.result?.Rod.CreatedAt}
          </Box>
        </Stack>
      </Box>

      <Image src={data.result?.Reel.imageUrl} alt={data.result?.Reel.imageAlt} borderRadius='lg' />
      <Box p='2'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' color='gray.500'>
            {data.result?.Reel.TypeNumberCondition.typeName}
          </Badge>
          <Badge borderRadius='full' px='2' color='gray.500'>
            {data.result?.Reel.GearCondition.typeName}
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
          {data.result?.Reel.name}
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
            COMPANY {data.result?.Reel.companyName}
          </Box>
          <Box>
            ADDED {data.result?.Reel.CreatedAt}
          </Box>
        </Stack>
      </Box>

      <Image src={data.result?.Line.imageUrl} alt={data.result?.Line.imageAlt} borderRadius='lg' />
      <Box p='2'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' color='gray.500'>
            {data.result?.Line.lineType}
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
          {data.result?.Line.name}
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
            THICKNESS {data.result?.Line.thickness} lb
          </Box>
          <Box textTransform='uppercase'>
            COMPANY {data.result?.Line.companyName}
          </Box>
          <Box>
            ADDED {data.result?.Line.CreatedAt}
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}