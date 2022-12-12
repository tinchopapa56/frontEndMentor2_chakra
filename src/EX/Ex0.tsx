import React from 'react'
import "./styles.css"
import I1 from "../RAW/0/images/1.svg"
import I2 from "../RAW/0/images/2.svg"
import I3 from "../RAW/0/images/3.svg"
import I4 from "../RAW/0/images/4.svg"
import {Box, Text, Stack, Flex, Image, Button, HStack} from "@chakra-ui/react"
import {FaFacebook} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';

//va de 1240 a 1300 ; despues se rompe

// sx={{
//   '@media (max-width: 425px)': {
//     display: 'none',
//   },
// }}


const Ex0:React.FC = ()=> {
  return (
    <div id="ex0">
      <Box w="100%" bg="gray.200" maxWidth="1300px">
      <Image position="absolute" bg="hsl(257, 40%, 49%)" src={I1}/>
      <Image p={8} position="relative" src={I4}/>
      <Flex 
        w="100%" p={10} position="relative" gap={12}
        sx={{
          '@media (max-width: 1200px)': {
           flexDirection:"column",
           alignItems:"center"
          },
        }}
      >
        <Image w="55%"src={I3}/>
        <Box>
          <Text as="h1" color="white" fontSize="5xl"fontWeight="600">Build The Community Your fans will love</Text>
          <Text as="p" color="white" m="1.5em 0">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
            Create connections with your users as you engage in genuine discussion.</Text>
          <Button p={6} color="purple.600" w="25%" borderRadius="50px">Register</Button>
        </Box>
      </Flex>
      
      <HStack justifyContent="flex-end" pr={10}>
          <Button colorScheme='facebook' leftIcon={<FaFacebook />} borderRadius="50px">
            F
          </Button>
          <Button colorScheme='twitter' rightIcon={<FaTwitter />} borderRadius="50px" >
          T
          </Button>
          <Button bg='purple.400' color="white" rightIcon={<FaInstagram />} borderRadius="50px" >
            I 
          </Button>
        </HStack>
      
      </Box>
    </div>
  )
}

export default Ex0