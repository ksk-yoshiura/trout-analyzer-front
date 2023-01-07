import {
  Badge,
  Box,
  Image,
  Stack
} from '@chakra-ui/react'
import React from 'react'
import useSWR from 'swr'

import { image_ext, S3_DOMAIN_PATH } from "../../../const/image"
import type { FieldDetailApiResponse } from "../../../pages/api/fields/[id]"
import getDateFormatted from "../../../utils/dateFormat"
import Loading from '../../shared/Loading'

type DetailProps = {
  chosenId: number
}

export default function FieldDetail(props: DetailProps): JSX.Element {
  // ID取得
  const { chosenId } = props

  // APIからデータ取得
  const { data } = useSWR<FieldDetailApiResponse, Error>('fields/' + chosenId)
  if (!data) return <Loading />
  // フィールドデータ
  const fieldDetailData = data.result ? data.result : null
  // 画像URL
  const imageUrl = fieldDetailData?.FieldImage && S3_DOMAIN_PATH ? S3_DOMAIN_PATH + fieldDetailData.FieldImage.image_file + image_ext : '/no_image.png'
  // 画像alt
  const imageAlt = fieldDetailData?.FieldImage ? fieldDetailData.name : 'No Image'

  return (
    <Box maxW='sm' overflow='hidden' textAlign='center'>
      <Image src={imageUrl} alt={imageAlt} width={366} height={366} />

      <Box p='2'>
        <Box display='flex' alignItems='baseline'>
          {
            fieldDetailData?.lastVisitedAt ?
              <></>
              :
              <Badge borderRadius='full' px='2' mr={1} colorScheme='teal'>
                New
              </Badge>
          }
        </Box>

        <Box
          my='2'
          fontWeight='semibold'
          fontSize={18}
          as='h3'
          lineHeight='tight'
          isTruncated
        >
          {fieldDetailData?.name}
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
            ADDRESS {fieldDetailData?.address}
          </Box>
          <Box>
            ADDED {fieldDetailData ? getDateFormatted(fieldDetailData.CreatedAt) : null}
          </Box>
          <Box>
            LAST VISITED {fieldDetailData ? getDateFormatted(fieldDetailData.lastVisitedAt) : null}
          </Box>
        </Stack>

      </Box>
    </Box>
  )
}