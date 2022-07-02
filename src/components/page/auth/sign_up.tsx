import { ArrowBackIcon } from '@chakra-ui/icons'
import {
  Icon,
  Link
} from '@chakra-ui/react'
import NextLink from "next/link"

import SignUpForm from '../../model/auth/SignUpForm'

export default function SignUpPage(): JSX.Element {
  return (
    <>
      <SignUpForm />
      <NextLink href="/login" passHref>
        <Link py={5} as={'button'} color='teal'>
          <Icon as={ArrowBackIcon} />
          login
        </Link>
      </NextLink>
    </>
  );
}