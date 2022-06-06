import React from 'react'
import Image from "next/image"
import {
  Box,
  Badge,
  Stack
} from '@chakra-ui/react'
import useSWR from 'swr'
import { LinesApiResponse } from "../../../pages/api/lines/[id]"
import Loading from '../../shared/Loading'
import { getDateFormatted } from "../../../utils/dateFormat"

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

  // S3パス
  const s3DomainPath = process.env.NEXT_PUBLIC_S3_DOMAIN
  // 画像URL
  const imageUrl = data.result ? s3DomainPath + data.result.LineImage.image_file + '.png'  : '/no_image.png'
  // 画像alt
  const imageAlt = data.result?.imageAlt ? data.result.imageAlt : 'No Image'

  return (
    <Box maxW='sm' overflow='hidden'>
      <Image src={imageUrl} alt={imageAlt} width={366} height={366} />

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
            ADDED {data.result? getDateFormatted(data.result.CreatedAt) : null}
          </Box>
        </Stack>

      </Box>
    </Box>
  )
}