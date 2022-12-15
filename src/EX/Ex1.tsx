import React from 'react'
import I1 from "../RAW/1/assets/1 (1).jpg"
import I2 from "../RAW/1/assets/1 (2).jpg"
import I3 from "../RAW/1/assets/1 (3).jpg"
import I4 from "../RAW/1/assets/1 (4).jpg"
import I5 from "../RAW/1/assets/1 (5).jpg"
import I6 from "../RAW/1/assets/1 (1).webp"
import  {S1, S2, S3, S4, S5, S6, S7, S8, S9} from "../RAW/1/assets/svg"
import {Box, Stack, Flex, Text, Image, Button, Grid, GridItem} from "@chakra-ui/react"
import Ex1Grid from './components/Ex1Grid'

const Ex1:React.FC = ()=> {
  return (
    // <Box bg="#FFF7F0" p="2em 5%">
    // <Box bg="#FFF7F0" maxWidth="1200px">
    <Box bg="#FFF7F0">

      <Flex justify="space-between" p="2em 5%">
        <Image w="60px" src={S6} />
        <Button borderRadius="50px" fontSize="mg" p="1.5em" bg="blackAlpha.900" color="white">Free consultation</Button>
      </Flex>
      <Box m={16} textAlign="center" >
        <Text fontSize="6xl" fontWeight="bold" mb={4}>Design solutions made easy</Text>
        <Text fontSize="xl" color="#7A746E">With over ten years of experience in various design disciplines, I’m your one-stop <br /> shop for your design needs.</Text>
      </Box>

      {/* GRID ITEM */}
      <Ex1Grid />

      {/* IMG DE LA MINA */}
      <Flex p="0 5%" gap={4} mb={32} mt={40} justify="center" align="center">
        <Image w="40%" src={I6} />
        <Box ml={32} mr={6} w="65%">

          <Text fontWeight="bold" fontSize="4xl" mb={8}>I’m Amy, and I’d love to <br /> work on your next project</Text>
          <Text fontWeight="400" color="#7A746E" fontSize="lg" mb={8}>I love working with others to create beautiful design solutions. I’ve designed everything from brand illustrations to complete mobile apps. I’m also handy with a camera!</Text>
          <Button bg="#EB7565" color="white" w="225px" borderRadius="50px" fontSize="lg" p={8}>Free consultation</Button>          
        </Box>
      </Flex>
      
      {/* MY WORK */}
      <Box>
        <Text textAlign="center" fontWeight="bold" fontSize="4xl" mb={8}>My Work</Text>
        <Stack minHeight="400px" bg="green.400" direction="row" spacing={0}>
          <Image w="33.3%" objectFit="cover" src={I3} />
          <Image w="33.3%" objectFit="cover" src={I4} />
          <Image w="33.4%" objectFit="cover" src={I5} />
        </Stack>
        <Stack direction="row" w="200px" m="2em auto">
            <Image objectFit="cover" src={S4} bg="black" p={6} borderRadius="50%" />
            <Image objectFit="cover" src={S4} bg="black" p={6} borderRadius="50%" />
        </Stack>
      </Box>

      {/* LAST */}
      <Flex m={16} p="3em 4.5em" color="#FFF7F0" bg="black" borderRadius="10px" justify="space-between" align="center">
        <Box>
          <Text fontWeight="bold" fontSize="5xl" mb={4}>Book a call with me</Text>
          <Text w="70%" fontSize="xl" mb={8}>I’d love to have a chat to see how I can help you. The best first step is for us to discuss your project during a free consultation. Then we can move forward from there.</Text>
        </Box>
        <Button bg="#EB7565" color="white" w="300px" borderRadius="50px" fontSize="lg" p="1.5em">Free consultation</Button>          
      </Flex>

      <Flex justify="space-between" p="2em 5%">
        <Image w="60px" src={S6} />
        <Button borderRadius="50px" fontSize="mg" p="1.5em" bg="blackAlpha.900" color="white">Free consultation</Button>
      </Flex>

      
    </Box>
//    <Stack spacing={8} bg="gray.300">
//    <Image w="200px" src={I1} />
//    <Image w="200px" src={I2} />
//  </Stack>
  )
}

export default Ex1