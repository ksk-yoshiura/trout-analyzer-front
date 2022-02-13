import React from 'react'
import {
  Link,
  Icon
} from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import NextLink from "next/link"

type PageName = {
  name: string;
}
export default function BackToListPageLink(props: PageName) {
  const pageName = props.name
  return (
    <NextLink href={"/"+ pageName} passHref>
      <Link pb={5} as={'button'} color='teal'>
        <Icon as={ArrowBackIcon} />
        Back to {pageName} list
      </Link>
    </NextLink>
  ) 

}