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

  // 登録データが削除されていた場合非表示
  const rodData = data.result?.Rod?.ID != '0' ? data.result?.Rod : null
  const reelData = data.result?.Reel?.ID != '0' ? data.result?.Reel : null
  const lineData = data.result?.Line?.ID != '0' ? data.result?.Line : null

  // S3パス
  const s3DomainPath = process.env.NEXT_PUBLIC_S3_DOMAIN
  // 画像URL
  const rodImageUrl = data.result ? s3DomainPath + data.result.Rod.RodImage.image_file + '.png'  : '/no_image.png'
  const reelImageUrl = data.result ? s3DomainPath + data.result.Reel.ReelImage.image_file + '.png'  : '/no_image.png'
  const lineImageUrl = data.result ? s3DomainPath + data.result.Line.LineImage.image_file + '.png'  : '/no_image.png'
  // 画像alt
  const imageAlt = data.result?.Rod.imageAlt ? data.result.Rod.imageAlt : 'No Image'
  return (
    <Box maxW='sm' overflow='hidden'>
      {
        rodData ?
          <>
            <Image src={rodImageUrl} alt={rodData.imageAlt} borderRadius='lg' />
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
            <Image src={reelImageUrl} alt={data.result?.Reel.imageAlt} borderRadius='lg' />
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
            <Image src={lineImageUrl} alt={data.result?.Line.imageAlt} borderRadius='lg' />
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
          </>
          : <></>
      }

    </Box>
  )
}