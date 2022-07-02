import { ArrowBackIcon } from '@chakra-ui/icons'
import {
  Icon,
  Link
} from '@chakra-ui/react'
import NextLink from "next/link"
import React from 'react'

type PageName = {
  name: string;
}
export default function BackToListPageLink(props: PageName) {
  const pageName = props.name
  return (
    <NextLink href={"/" + pageName} passHref>
      <Link pb={5} as={'button'} color='teal'>
        <Icon as={ArrowBackIcon} />
        Back to {pageName} list
      </Link>
    </NextLink>
  )
}