import RecordSerialRegisterForm from '../../model/records/RecordSerialRegisterForm'
import { useRouter } from "next/router"

export default function SerialRegister(): JSX.Element {
  // ページ遷移
  const router = useRouter();
  const { record_id } = router.query
  return (
      <RecordSerialRegisterForm recordId={record_id} />
  );
}