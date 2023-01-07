import {
  Badge,
  Box,
  Image,
  Stack
} from '@chakra-ui/react'
import React from 'react'
import useSWR from 'swr'

import { IMAGE_EXT, S3_DOMAIN_PATH } from "../../../const/image"
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
  const rodData = data.result?.Rod?.ID != '0' ? data.result?.Rod : null
  const reelData = data.result?.Reel?.ID != '0' ? data.result?.Reel : null
  const lineData = data.result?.Line?.ID != '0' ? data.result?.Line : null

  // 画像URL
  const rodImageUrl = data.result ? S3_DOMAIN_PATH + data.result.Rod.RodImage.image_file + IMAGE_EXT : '/no_image.png'
  const reelImageUrl = data.result ? S3_DOMAIN_PATH + data.result.Reel.ReelImage.image_file + IMAGE_EXT : '/no_image.png'
  const lineImageUrl = data.result ? S3_DOMAIN_PATH + data.result.Line.LineImage.image_file + IMAGE_EXT : '/no_image.png'
  // 画像alt
  const rodImageAlt = data.result?.Rod ? data.result?.Rod.name : 'No Image'
  const reelImageAlt = data.result?.Reel ? data.result?.Reel.name : 'No Image'
  const lineImageAlt = data.result?.Line ? data.result?.Line.name : 'No Image'

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
                {rodData.name}
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
                  LENGTH {rodData.length} ft
                </Box>
                <Box textTransform='uppercase'>
                  COMPANY {rodData.companyName}
                </Box>
                <Box>
                  ADDED {rodData.CreatedAt}
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
                  {data.result?.Line.LineCondition.typeName}
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
          </>
          : <></>
      }

    </Box>
  )
}