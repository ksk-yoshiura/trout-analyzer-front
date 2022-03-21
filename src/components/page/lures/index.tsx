import React, { useState } from 'react'
import {
  Flex,
  Button
} from '@chakra-ui/react'
import NextLink from "next/link"
import LuresList from '../../model/lures/LuresList'
import LureTypeSelect from '../../model/lures/LureTypeSelect'

export default function LureIndex(): JSX.Element {
  // ルアータイプセレクト時タイプIDと値変更hookを別々のコンポーネントで使用する
  const [typeId, setTypeId] = useState("0")
  return (
    <>
      <Flex pb={5} justifyContent="space-between" w="90%">
        <LureTypeSelect setTypeId={setTypeId} />
        <NextLink href="/lures/create" passHref>
          <Button  pl={10} pr={10} colorScheme='teal'>New Lures</Button>
        </NextLink>
      </Flex>
      <LuresList typeId={typeId} />
    </>
  );
}