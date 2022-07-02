import {
  Box,
  Stack
} from '@chakra-ui/react'
import React from 'react';

type LureProps = {
  lureName: string;
  lureCompany: string;
  lureColor: string;
  lureWeight: string;
}

export default function RecordPatternLureDetail(props: LureProps) {
  return (
    <>
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