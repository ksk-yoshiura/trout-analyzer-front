import {
  Box,
  Image,
  Stack
} from '@chakra-ui/react'
import React from 'react';

type LureImage = {
  image_file: string
}
type LureProps = {
  lureName: string;
  lureCompany: string;
  lureColor: string;
  lureWeight: string;
  lureImage: LureImage
}

export default function RecordPatternLureDetail(props: LureProps) {

  // S3パス
  const s3DomainPath = process.env.NEXT_PUBLIC_S3_DOMAIN
  // 画像拡張子
  const image_ext = '.png'
  return (
    <>
      <Image p='2' width={366} height={366} src={s3DomainPath + props.lureImage.image_file + image_ext ?? '/no_image.png'} alt={props.lureName ?? 'No Image'} />
      <Box
        my='2'
        fontWeight='semibold'
        fontSize={18}
        as='h3'
        lineHeight='tight'
        isTruncated
      >
        {props.lureName}
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
          WEIGHT {props.lureWeight} g
        </Box>
        <Box textTransform='uppercase'>
          COLOR {props.lureColor}
        </Box>
        <Box textTransform='uppercase'>
          COMPANY {props.lureCompany}
        </Box>
      </Stack>
    </>
  )
}