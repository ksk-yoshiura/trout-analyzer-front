import LoginForm from '../../model/auth/LoginForm'
import {
  Link,
  Icon
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import NextLink from "next/link"

export default function LoginPage(): JSX.Element {
  return (
    <>
      <LoginForm csrfToken={''} />
      <NextLink href="/sign_up" passHref>
        <Link pb={5} as={'button'} color='teal'>
          sign up
          <Icon as={ArrowForwardIcon} />
        </Link>
      </NextLink>
    </>
  );
}