import React from 'react'
import {Box, Stack, Flex, Text, Image, Button, Grid, GridItem} from "@chakra-ui/react"
import  {S1, S2, S3, S4, S5, S6, S7, S8, S9, S10} from "../RAW/3/images"

interface Props {
    title:string,
    p:string,
    img:string,
    inverted: boolean
}

const Ex2Component: React.FC<Props> = ({title, p, img, inverted}) => {
    // cambia solo el orden de BOX/IMAGE
    //cambia solo el ml + mr que tiene la box/IMAGE

    return(
        <>
        {inverted? (
            <Flex gap={8} p="4em 0" justify="flex-start" align="center" boxShadow= "rgba(0, 0, 0, 0.1) 0px 3px 6px 3px" borderRadius="20px">
                <Image ml={16} mr={16} w="350px" objectFit="cover" src={img} />
                <Box w="40%">
                    <Text mb={4} fontSize="2xl" fontWeight="bold"> {title}</Text>
                    <Text fontSize="lg" opacity="0.6">{p}</Text>
                </Box>
            </Flex>
        ):(
            // <Flex m="3em auto" w="80%" gap={8} p="4em 0" justify="flex-start" align="center" boxShadow= "rgba(0, 0, 0, 0.1) 0px 3px 6px 3px" borderRadius="20px">
            <Flex m="2.5em 0" gap={8} p="4em 0" justify="flex-start" align="center" boxShadow= "rgba(0, 0, 0, 0.1) 0px 3px 6px 3px" borderRadius="20px">
                <Box ml={16} w="40%">
                    <Text mb={4} fontSize="2xl" fontWeight="bold"> {title}</Text>
                    <Text fontSize="lg" opacity="0.6">{p}</Text>
                </Box>
                <Image w="350px" objectFit="cover" src={img} />
            </Flex>
        )
        }
    </>
  )
}

export default Ex2Component