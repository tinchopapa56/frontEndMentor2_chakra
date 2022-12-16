import React from 'react'
import  {S1, S2, S3, S4, S5, S6, S7, S8, S9, S10} from "../RAW/3/images"
import {Box, Stack, Flex, Text, Image, Button, Grid, GridItem, Container} from "@chakra-ui/react"
import Ex2Component from './components/Ex2Component'

const Ex2:React.FC = ()=> {
  const footerLOGO = "https://fervent-mayer-36e64f.netlify.app/huddle-landing-page/images/logo%20white.svg"
  return (
    
    <Box w="TODA LA PAG">

      {/* HERO CONTAINER */}
      <Box bg="hsl(193, 100%, 96%)" backgroundImage="url(https://fervent-mayer-36e64f.netlify.app/huddle-landing-page/images/bg-hero-desktop.svg)" backgroundPosition="center" backgroundSize="cover">
        <Container m="0 auto" maxWidth="1000px" pt={12}>
            {/* NAV */}
            <Flex justify="space-between" mb={16}> 
                <Image w="250px" objectFit="contain" src={S7} />
                <Button bg="white" color="black" w="200px" borderRadius="40px" p={6} fontWeight="bold" boxShadow= "rgba(0, 0, 0, 0.1) 0px 3px 6px 3px">Try it Free</Button>
            </Flex>

            {/* {LAND} */}
            <Flex pb={8}>
              <Box flex="1">
                <Text mb={8} fontSize="4xl" fontWeight="bold">Build The Community <br /> Your Fans Will Love</Text>
                <Text w="85%" mb={4} fontSize="lg" opacity="0.6">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion</Text>
                <Button bg="hsl(322, 100%, 66%)" color="white" p={6} w="250px" borderRadius="20px">Get started for free</Button>
              </Box>
              <Box flex="1">
                <Image ml="20%" w="80%" objectFit="cover" src={S5} />
              </Box>
            </Flex>

        </Container>
      </Box>

        {/*CARDS CONTAINER*/}
      <Container m="0 auto" maxWidth="1000px" pt={12}>
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
      </Container>
      
        {/* LAST BOX container */}
      <Container m="0 auto" maxWidth="1000px" pt={12}>
        {/* <Box bg="white" display="inline-block" mb="-50%" z-index="1" position="relative" textAlign="center" p={16} boxShadow= "rgba(0, 0, 0, 0.1) 0px 3px 6px 3px" borderRadius="20px"> */}
        <Box w="65%" position="relative" bg="white" m="0 auto" mb="-70px" textAlign="center" p={16} boxShadow= "rgba(0, 0, 0, 0.1) 0px 3px 6px 3px" borderRadius="20px">
          <Text  mb={6} fontSize="3xl" fontWeight="bold">Ready To Build Your Community?</Text>
          <Button color="white" bg="hsl(322, 100%, 66%)" p={6} w="280px" borderRadius="30px">Get started for free</Button>
        </Box>
      </Container>
      
      {/* FOOTER */}
      <Box pt={48} pb={32} bg="black" color="white">
        <Container pt={12} maxWidth="1000px">
          <Flex m="0 auto" ml={12} position="relative" justify="space-between" align="flex-start"  fontSize="xl">
            <Image position="absolute" top="-25%" left="-5%" mb={8} w="250px" objectFit="cover" src={footerLOGO} />
              <Flex direction="column"  flex="1">
                <Text mb={4} lineHeight={6} w="90%">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Text>
                <Text mb={4}>+1-543-123-4567</Text>
                <Text mb={4}>example@huddle.com</Text>
              </Flex>
              <Flex direction="column" flex="1">
                <Text mb={4}>About us</Text>
                <Text mb={4}>What We Do</Text>
                <Text mb={4}>FAQ</Text>
              </Flex>
              <Flex direction="column" flex="1">
                <Text mb={4}>Career</Text>
                <Text mb={4}>Blog</Text>
                <Text mb={4}>Contact us</Text>
              </Flex>
              <Stack  flex="1" direction="row">
                <Button bg="black" color="white" borderColor="white" w="20px" variant="outline" borderRadius={9999}>f</Button>
                <Button bg="black" color="white" borderColor="white" w="20px" variant="outline" borderRadius={9999}>t</Button>
                <Button bg="black" color="white" borderColor="white" w="20px" variant="outline" borderRadius={9999}>Ig</Button>
              </Stack>
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}

export default Ex2
