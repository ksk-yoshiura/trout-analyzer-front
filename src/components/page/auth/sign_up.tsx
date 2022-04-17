import SignUpForm from '../../model/auth/SignUpForm'
import {
  Link,
  Icon
} from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import NextLink from "next/link"

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