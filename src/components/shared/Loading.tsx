import { useRouter } from "next/router";

export default function Loading() {
  const router = useRouter();
  const isReady = router.isReady;
  
  if (!isReady) {
    return <p>Loading...</p>
  }
}