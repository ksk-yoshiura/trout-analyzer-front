import {
  Badge,
  Box,
  Stack
} from '@chakra-ui/react'
import Image from "next/image";
import React from 'react'
import useSWR from 'swr'

import type { ReelsApiResponse } from "../../../pages/api/reels/[id]"
import { getDateFormatted } from "../../../utils/dateFormat"
import Loading from '../../shared/Loading'

type DetailProps = {
  chosenId: number
}

export default function ReelDetail(props: DetailProps): JSX.Element {
  // ID取得
  const { chosenId } = props
  // APIからデータ取得
  const { data, error } = useSWR<ReelsApiResponse, Error>('reels/' + chosenId)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />
  // リールデータ
  const reelDetailData = data.result ? data.result : null
  // S3パス
  const s3DomainPath = process.env.NEXT_PUBLIC_S3_DOMAIN
  // 画像URL
  const imageUrl = reelDetailData?.ReelImage ? s3DomainPath + reelDetailData.ReelImage.image_file + '.png' : '/no_image.png'
  // 画像alt
  const imageAlt = reelDetailData?.ReelImage ? reelDetailData.name : 'No Image'

  return (
    <Box maxW='sm' overflow='hidden'>
      <Image src={imageUrl} alt={imageAlt} width={366} height={366} />

      <Box p='2'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' color='gray.500'>
            {reelDetailData?.TypeNumberCondition.typeName}
          </Badge>
          <Badge borderRadius='full' px='2' color='gray.500'>
            {reelDetailData?.GearCondition.typeName}
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
          {reelDetailData?.name}
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
            COMPANY {reelDetailData?.companyName}
          </Box>
          <Box>
            ADDED {reelDetailData ? getDateFormatted(reelDetailData.CreatedAt) : null}
          </Box>
        </Stack>

      </Box>
    </Box>
  )
}