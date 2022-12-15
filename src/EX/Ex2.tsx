import React from 'react'
import  {S1, S2, S3, S4, S5, S6, S7, S8, S9, S10} from "../RAW/3/images"
import {Box, Stack, Flex, Text, Image, Button, Grid, GridItem} from "@chakra-ui/react"

const Ex2:React.FC = ()=> {
  return (
    <Box>
      <Stack minHeight="400px" bg="green.400" direction="row" spacing={0}>
          <Image w="300px" objectFit="cover" src={S1} />
          <Image w="300px" objectFit="cover" src={S2} />
          <Image w="300px" objectFit="cover" src={S3} />
          <Image w="300px" objectFit="cover" src={S4} />
          <Image w="300px" objectFit="cover" src={S5} />
          <Image w="300px" objectFit="cover" src={S6} />
          <Image w="300px" objectFit="cover" src={S7} />
          <Image w="300px" objectFit="cover" src={S8} />
          <Image w="300px" objectFit="cover" src={S9} />
          <Image w="300px" objectFit="cover" src={S10} />
        </Stack>
    </Box>
  )
}

export default Ex2