import React from 'react';
import {
  Box,
  Stack
} from '@chakra-ui/react'

type Linerops = {
  lineType: string;
  lineName: string;
  lineCompany: string;
  lineThickness: string;
}

export default function RecordPatternLineDetail(props: Linerops) {
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
        {props.lineName}
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
          TYPE {props.lineType}
        </Box>
        <Box textTransform='uppercase'>
          THICKNESS {props.lineThickness} lb
        </Box>
        <Box textTransform='uppercase'>
          COMPANY {props.lineCompany}
        </Box>
      </Stack>
    </>
  )
}