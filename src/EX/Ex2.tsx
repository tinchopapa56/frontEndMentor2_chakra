import React from 'react'
import  {S1, S2, S3, S4, S5, S6, S7, S8, S9, S10} from "../RAW/3/images"
import {Box, Stack, Flex, Text, Image, Button, Grid, GridItem} from "@chakra-ui/react"
import Ex2Component from './components/Ex2Component'

const Ex2:React.FC = ()=> {
  const footerLOGO = "https://fervent-mayer-36e64f.netlify.app/huddle-landing-page/images/logo%20white.svg"
  return (
    <Flex direction="column" >
      {/* NAV */}

      <Flex justify="space-between" p="2em 8em"> {/*HORRIBLE HARDCODE*/}
          <Image w="250px" objectFit="cover" src={S7} />
          <Button bg="gray.200" color="black" w="200px" borderRadius="20px" p={4}>Try it Free</Button>
      </Flex>

      {/* {LAND} */}
      <Flex border="3px red solid" justify="center" align="center">
        <Box w="50%">
          <Text mb={8} fontSize="4xl" fontWeight="bold">Build The Community <br /> Your Fans Will Love</Text>
          <Text w="70%" mb={4} fontSize="lg">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion</Text>
          <Button bg="hsl(322, 100%, 66%)" color="white" p={4} w="250px" borderRadius="20px">Get started for free</Button>
        </Box>
        <Image w="400px" objectFit="cover" src={S5} />
      </Flex>

      {/* Boxes  */}
      <Box>
        <Ex2Component 
          title="Grow Together"
          p="Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form." 
          img= {S4}
          inverted= {false}        
          />
        <Ex2Component 
          title="Flowing Conversations"
          p="You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow." 
          img={S3}
          inverted= {true}
        />
        <Ex2Component 
          title="Your Users"
          p="It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately." 
          img={S6}
          inverted= {false}
        />
      </Box>
      
      {/* last box */}

    <Box m="0 auto" mb={8} textAlign="center" p={16} boxShadow= "rgba(0, 0, 0, 0.1) 0px 3px 6px 3px" borderRadius="20px">
      <Text mb={4} fontSize="3xl" fontWeight="bold">Ready To Build Your Community?</Text>
      <Button bg="hsl(322, 100%, 66%)" color="white" p={4} w="250px" borderRadius="20px">Get started for free</Button>
    </Box>

    {/* FOOTER */}
    <Box p="6em 0" bg="hsl(192, 100%, 9%)" color="white">
       <Image w="200px" objectFit="cover" src={footerLOGO} />
      <Stack m="0 auto" w="90%" direction="row">
        <Box w="25%">
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Text>
          <Text>+1-543-123-4567</Text>
          <Text>example@huddle.com</Text>
        </Box>
        <Box w="25%">
          <Text>About us</Text>
          <Text>What We Do</Text>
          <Text>FAQ</Text>
        </Box>
        <Box w="25%">
          <Text>Career</Text>
          <Text>Blog</Text>
          <Text>Contact us</Text>
        </Box>
        <Stack w="25%" direction="row">
          <Button bg="black" color="white" borderColor="white" w="20px">f</Button>
          <Button bg="black" color="white" borderColor="white" w="20px">t</Button>
          <Button bg="black" color="white" borderColor="white" w="20px">Ig</Button>
        </Stack>
      </Stack>
    </Box>


      <Stack minHeight="400px" bg="gray.600" direction="column" spacing={0}>
          {/* <Image w="300px" objectFit="cover" src={S1} /> */}
          {/* <Image w="300px" objectFit="cover" src={S2} /> */}
          <Image w="300px" objectFit="cover" src={S8} />
          <Image w="300px" objectFit="cover" src={S9} />
          {/* <Image w="300px" objectFit="cover" src={S10} /> */}
        </Stack>
    </Flex>
  )
}

export default Ex2