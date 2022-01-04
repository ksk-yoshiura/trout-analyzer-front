import {
  Box,
  Badge
} from '@chakra-ui/react'

type BadgeProps = { 
  result: string;
  lureType: string;
  weather: string;
  depth: string;
  speed: string;
}

export default function RecordPatternBadgeDetail(props: BadgeProps): JSX.Element {
  return (
    <Box display='flex' alignItems='baseline'>
      <Badge borderRadius='full' px='2' mr={1} colorScheme='teal'>
        {props.result}
      </Badge>
      <Badge borderRadius='full' px='2' mr={1} color='gray.500'>
        {props.lureType}
      </Badge>
      <Badge borderRadius='full' px='2' mr={1} color='gray.500'>
        {props.weather}
      </Badge>
      <Badge borderRadius='full' px='2' mr={1} color='gray.500'>
        {props.depth}
      </Badge>
      <Badge borderRadius='full' px='2' mr={1} color='gray.500'>
        {props.speed}
      </Badge>
    </Box>

  )
}