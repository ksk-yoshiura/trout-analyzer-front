import {
  Box,
  Stack
} from '@chakra-ui/react'

type ReelProps = {
  reelType: string;
  reelName: string;
  reelCompany: string;
  reelGear: string;
}

export default function RecordPatternReelDetail(props: ReelProps) {
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
        {props.reelName}
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
          TYPE {props.reelType}
        </Box>
        <Box textTransform='uppercase'>
          GEAR {props.reelGear}
        </Box>
        <Box textTransform='uppercase'>
          COMPANY {props.reelCompany}
        </Box>
      </Stack>
    </>
  )
}