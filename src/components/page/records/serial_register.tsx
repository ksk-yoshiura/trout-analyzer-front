import RecordSerialRegisterForm from '../../model/records/RecordSerialRegisterForm'
import { useRouter } from "next/router"
import {
  Flex
} from '@chakra-ui/react'

export default function SerialRegister(): JSX.Element {
  // ページ遷移
  const router = useRouter();
  const { record_id } = router.query
  return (
    <Flex pb={20}>
      <RecordSerialRegisterForm recordId={record_id} />
    </Flex>
  );
}