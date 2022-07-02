import {
  Flex
} from '@chakra-ui/react'
import React from 'react'

import RecordsAllList from '../../model/records/RecordsAllList'

export default function RecordsAll(): JSX.Element {
  return (
    <>
      <Flex pb={5} w="100%">
      </Flex>
      <RecordsAllList />
    </>
  );
}