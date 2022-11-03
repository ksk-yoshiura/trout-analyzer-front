import {
  Badge,
  Box,
  Stack
} from '@chakra-ui/react'
import Image from "next/image"
import React from 'react'
import useSWR from 'swr'

import type { LinesApiResponse } from "../../../pages/api/lines/[id]"
import getDateFormatted from "../../../utils/dateFormat"
import Loading from '../../shared/Loading'

type DetailProps = {
  chosenId: number
}

export default function RodDetail(props: DetailProps): JSX.Element {
  // ID取得
  const { chosenId } = props

  // APIからデータ取得
  const { data } = useSWR<LinesApiResponse, Error>('lines/' + chosenId)
  if (!data) return <Loading />
  // ラインデータ
  const lineDetailData = data.result ? data.result : null
  // S3パス
  const s3DomainPath = process.env.NEXT_PUBLIC_S3_DOMAIN
  // 画像URL
  const imageUrl = lineDetailData?.LineImage && s3DomainPath ? s3DomainPath + lineDetailData.LineImage.image_file + '.png' : '/no_image.png'
  // 画像alt
  const imageAlt = lineDetailData?.LineImage ? lineDetailData.name : 'No Image'

  return (
    <Box maxW='sm' overflow='hidden'>
      <Image src={imageUrl} alt={imageAlt} width={366} height={366} />

      <Box p='2'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' mr={1} colorScheme='teal'>
            New
          </Badge>
          <Badge borderRadius='full' px='2' color='gray.500'>
            {lineDetailData?.LineCondition.typeName}
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
          {lineDetailData?.name}
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
            THICKNESS {lineDetailData?.thickness} lb
          </Box>
          <Box textTransform='uppercase'>
            COMPANY {lineDetailData?.companyName}
          </Box>
          <Box>
            ADDED {lineDetailData ? getDateFormatted(lineDetailData.CreatedAt) : null}
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}