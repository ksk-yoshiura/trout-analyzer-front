import React from 'react'
import { 
  Box, 
  Image, 
  Badge,
  Stack 
} from '@chakra-ui/react'
import useSWR from 'swr'
import { LinesApiResponse } from "../../../pages/api/lines/[id]"
import Loading from '../../shared/Loading'

type DetailProps = {
  chosenId: number
}

export default function RodDetail(props: DetailProps): JSX.Element {
  // ID取得
  const { chosenId } = props

  // APIからデータ取得
  const { data, error } = useSWR<LinesApiResponse, Error>('lines/' + chosenId)
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
          <Badge borderRadius='full' px='2' color='gray.500'>
            {data.result?.LineCondition.typeName}
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
            THICKNESS {data.result?.thickness} lb
          </Box>
          <Box textTransform='uppercase'>
            COMPANY {data.result?.companyName}
          </Box>
          <Box>
            ADDED {data.result?.CreatedAt}
          </Box>
        </Stack>

      </Box>
    </Box>
  )
}