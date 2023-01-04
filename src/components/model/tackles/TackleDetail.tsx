import {
  Badge,
  Box,
  Image,
  Stack
} from '@chakra-ui/react'
import React from 'react'
import useSWR from 'swr'

import type { TackleDetailApiResponse } from "../../../pages/api/tackles/[id]"
import Loading from '../../shared/Loading'

type DetailProps = {
  chosenId: number
}

export default function TackleDetail(props: DetailProps): JSX.Element {
  // ID取得
  const { chosenId } = props
  // APIからデータ取得
  const { data } = useSWR<TackleDetailApiResponse, Error>('tackles/' + chosenId)
  if (!data) return <Loading />

  // 登録データが削除されていた場合非表示
  const rodData = data.result?.RodDetail.RodBasic?.ID != '0' ? data.result?.RodDetail : null
  const reelData = data.result?.ReelDetail.ReelBasic?.ID != '0' ? data.result?.ReelDetail : null
  const lineData = data.result?.LineDetail.LineBasic?.ID != '0' ? data.result?.LineDetail : null

  // S3パス
  const s3DomainPath = process.env.NEXT_PUBLIC_S3_DOMAIN
  // 画像URL
  const rodImageUrl = data.result ? s3DomainPath + data.result.RodDetail.RodImage.image_file + '.png' : '/no_image.png'
  const reelImageUrl = data.result ? s3DomainPath + data.result.ReelDetail.ReelImage.image_file + '.png' : '/no_image.png'
  const lineImageUrl = data.result ? s3DomainPath + data.result.LineDetail.LineImage.image_file + '.png' : '/no_image.png'
  // 画像alt
  const rodImageAlt = data.result?.RodDetail.RodBasic ? data.result?.RodDetail.RodBasic.name : 'No Image'
  const reelImageAlt = data.result?.ReelDetail.ReelBasic ? data.result?.ReelDetail.ReelBasic.name : 'No Image'
  const lineImageAlt = data.result?.LineDetail.LineBasic ? data.result?.LineDetail.LineBasic.name : 'No Image'

  return (
    <Box maxW='sm' overflow='hidden'>
      {
        rodData ?
          <>
            <Image src={rodImageUrl} alt={rodImageAlt} borderRadius='lg' />
            <Box p='2'>
              <Box display='flex' alignItems='baseline'>
                <Badge borderRadius='full' px='2' color='gray.500'>
                  {rodData.RodHardnessCondition.typeName}
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
                {rodData.RodBasic.name}
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
                  LENGTH {rodData.RodBasic.length} ft
                </Box>
                <Box textTransform='uppercase'>
                  COMPANY {rodData.companyName}
                </Box>
                <Box>
                  ADDED {rodData.RodBasic.CreatedAt}
                </Box>
              </Stack>
            </Box></>
          : <></>
      }

      {
        reelData ?
          <>
            <Image src={reelImageUrl} alt={reelImageAlt} borderRadius='lg' />
            <Box p='2'>
              <Box display='flex' alignItems='baseline'>
                <Badge borderRadius='full' px='2' color='gray.500'>
                  {data.result?.ReelDetail.TypeNumberCondition.typeName}
                </Badge>
                <Badge borderRadius='full' px='2' color='gray.500'>
                  {data.result?.ReelDetail.GearCondition.typeName}
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
                {data.result?.ReelDetail.ReelBasic.name}
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
                  COMPANY {data.result?.ReelDetail.companyName}
                </Box>
                <Box>
                  ADDED {data.result?.ReelDetail.ReelBasic.CreatedAt}
                </Box>
              </Stack>
            </Box>
          </>
          : <></>
      }

      {
        lineData ?
          <>
            <Image src={lineImageUrl} alt={lineImageAlt} borderRadius='lg' />
            <Box p='2'>
              <Box display='flex' alignItems='baseline'>
                <Badge borderRadius='full' px='2' color='gray.500'>
                  {data.result?.LineDetail.LineCondition.typeName}
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
                {data.result?.LineDetail.LineBasic.name}
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
                  THICKNESS {data.result?.LineDetail.LineBasic.thickness} lb
                </Box>
                <Box textTransform='uppercase'>
                  COMPANY {data.result?.LineDetail.companyName}
                </Box>
                <Box>
                  ADDED {data.result?.LineDetail.LineBasic.CreatedAt}
                </Box>
              </Stack>
            </Box>
          </>
          : <></>
      }

    </Box>
  )
}