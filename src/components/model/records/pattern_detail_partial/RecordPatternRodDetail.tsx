import {
  Box,
  Stack
} from '@chakra-ui/react'

type RodProps = {
  rodHardness: string;
  rodName: string;
  rodCompany: string;
  rodLength: string;
}

export default function RecordPatternLureDetail(props: RodProps) {
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
        {props.rodName}
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
          HARDNESS {props.rodHardness}
        </Box>
        <Box textTransform='uppercase'>
          LENGTH {props.rodLength} ft
        </Box>
        <Box textTransform='uppercase'>
          COMPANY {props.rodCompany}
        </Box>
      </Stack>
    </>
  )
}