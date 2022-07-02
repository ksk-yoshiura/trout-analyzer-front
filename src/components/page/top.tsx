import {
  Button,
  Stack
} from '@chakra-ui/react';
import NextLink from "next/link"
import React from 'react'

export default function TopPage(): JSX.Element {
  return (
    <>
      <Stack mt={50} spacing={10}>
        <NextLink href="/preparation/field" passHref>
          <Button color="white" bg='tomato' size='lg' w={300} p={4}>
            Get Started
          </Button>
        </NextLink>
        <NextLink href="/records/all" passHref>
          <Button color="white" bg='teal' size='lg' w={300} p={4}>
            Check Your Records
          </Button>
        </NextLink>
      </Stack>
    </>
  );
}