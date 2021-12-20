import {
  Button,
  Link
} from "@chakra-ui/react";
import * as FaIcons from "react-icons/fa";


export default function SNSLinkButton() {
  return (
    <>
      <Link href="https://telegram.org/" isExternal>
        <Button colorScheme='blue'><FaIcons.FaTelegram /></Button>
      </Link>
      <Link href="https://twitter.com/home" isExternal>
        <Button colorScheme='blue'><FaIcons.FaTwitter /></Button>
      </Link>
    </>
  )
}