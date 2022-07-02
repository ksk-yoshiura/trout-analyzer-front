import {
  Flex,
  Stack
} from '@chakra-ui/react'
import { useRouter } from "next/router"
import React from 'react'

import RecordSerialRegisterForm from '../../model/records/RecordSerialRegisterForm'
import FinishButton from '../../model/records/serial_register_partial/FinishButton'

export default function SerialRegister(): JSX.Element {
  // ページ遷移
  const router = useRouter();
  const { record_id } = router.query
  return (
    <Stack spacing={5} pb={20}>
      <Flex>
        <RecordSerialRegisterForm recordId={record_id} />
      </Flex>
      <Flex margin={'auto'} >
        <FinishButton recordId={record_id} />
      </Flex>
    </Stack>
  );
}