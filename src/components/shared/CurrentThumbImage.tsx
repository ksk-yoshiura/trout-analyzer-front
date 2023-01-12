import {
  Image
} from "@chakra-ui/react"
import React from 'react'

type ThumbProps = {
  file: File | null
  imageUrl: string
}

export default function CurrentThumbImage(props: ThumbProps) {
  const { imageUrl, file } = props
  return (
    <>
      {
        imageUrl && !file ?
          <Image
            src={imageUrl}
            className="img-thumbnail mt-2"
            alt={'current image'}
            width={200}
            height={200}
          />
          : <></>
      }
    </>
  )
}