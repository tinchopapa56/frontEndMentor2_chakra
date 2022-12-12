import React from 'react'
import I1 from "../RAW/0/images/1.svg"
import I2 from "../RAW/0/images/2.svg"
import I3 from "../RAW/0/images/3.svg"
import I4 from "../RAW/0/images/4.svg"
import {Box, Text, Stack, Flex, Image} from "@chakra-ui/react"

const Ex0:React.FC = ()=> {
  return (
    <Box bg="gray.200">
      <Text> ahi</Text>
      <Image src={I1}/>
      <Image src={I2}/>
      <Image src={I3}/>
      <Image src={I4}/>
    </Box>
  )
}

export default Ex0