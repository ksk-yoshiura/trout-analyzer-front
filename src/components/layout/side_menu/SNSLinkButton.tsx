import {
  Button,
  Link,
  VStack
} from "@chakra-ui/react";
import * as FaIcons from "react-icons/fa";


export default function SNSLinkButton() {
  return (
    <VStack>
      <Link href="https://www.facebook.com/" isExternal>
        <Button w={150} colorScheme='facebook' leftIcon={<FaIcons.FaFacebook />}>
          Facebook
        </Button>
      </Link>
      <Link href="https://twitter.com/home" isExternal>
        <Button w={150} colorScheme='twitter' leftIcon={<FaIcons.FaTwitter />}>
          Twitter
        </Button>
      </Link>
    </VStack>
  )
}