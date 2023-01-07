import {
  Box,
  Image,
  Stack
} from '@chakra-ui/react'
import React from 'react';

import { image_ext, S3_DOMAIN_PATH } from "../../../../const/image"

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

  return (
    <>
      <Image p='2' width={366} height={366} src={S3_DOMAIN_PATH + props.lureImage.image_file + image_ext ?? '/no_image.png'} alt={props.lureName ?? 'No Image'} />
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