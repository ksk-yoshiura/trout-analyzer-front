import {
  Badge,
  Box,
  Stack
} from '@chakra-ui/react'
import Image from "next/image";
import React from 'react'
import useSWR from 'swr'

import type { RodsApiResponse } from "../../../pages/api/rods/[id]"
import { getDateFormatted } from "../../../utils/dateFormat"
import Loading from '../../shared/Loading'

type DetailProps = {
  chosenId: number
}

export default function RodDetail(props: DetailProps): JSX.Element {
  // ID取得
  const { chosenId } = props
  // APIからデータ取得
  const { data, error } = useSWR<RodsApiResponse, Error>('rods/' + chosenId)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />
  // ロッドデータ
  const rodDetailData = data.result ? data.result : null
  // S3パス
  const s3DomainPath = process.env.NEXT_PUBLIC_S3_DOMAIN
  // 画像URL
  const imageUrl = rodDetailData?.RodImage ? s3DomainPath + rodDetailData.RodImage.image_file + '.png' : '/no_image.png'
  // 画像alt
  const imageAlt = rodDetailData?.RodImage ? rodDetailData.name : 'No Image'

  return (
    <Box maxW='sm' overflow='hidden'>
      <Image src={imageUrl} alt={imageAlt} width={366} height={366} />

      <Box p='2'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' color='gray.500'>
            {rodDetailData?.RodHardnessCondition.typeName}
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
          {rodDetailData?.name}
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
            LENGTH {rodDetailData?.length} ft
          </Box>
          <Box textTransform='uppercase'>
            COMPANY {rodDetailData?.companyName}
          </Box>
          <Box>
            ADDED {rodDetailData ? getDateFormatted(rodDetailData.CreatedAt) : null}
          </Box>
        </Stack>

      </Box>
    </Box>
  )
}