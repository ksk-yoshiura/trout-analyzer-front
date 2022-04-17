import React from 'react'
import {
  Box,
  Stack,
  Flex
} from "@chakra-ui/react";
import EquipmentMenuLinkList from './EquipmentMenuLinkList'
import RecordsMenuLinkList from './RecordsMenuLinkList'
import SNSLinkButton from './SNSLinkButton'

export default function SideMenuContentsPC() {
  return (
    <Flex
      flexDirection="column"
      h="100%"
      justifyContent="space-between"
    >
      <Box>
        <Stack spacing='23px' pt={4} display="flex">
          <EquipmentMenuLinkList />
          <RecordsMenuLinkList />
        </Stack>
      </Box>
      <Box
        mb={5}
        display="flex"
        justifyContent="space-between"
        flexDirection="column"
      >
        <SNSLinkButton />
      </Box>
    </Flex>
  )
};