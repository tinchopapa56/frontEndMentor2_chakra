import React from 'react'
import {Box, Stack, Flex, Text, Image, Button, Grid, GridItem} from "@chakra-ui/react"
import  {S1, S2, S3, S4, S5, S6, S7, S8, S9} from "../../RAW/1/assets/svg"

const Ex1Grid: React.FC = () => {
    return(
        <>
            <Grid p="0 5%" h="400px" templateRows='repeat(2, 1fr)'templateColumns='repeat(6, 1fr)' gap={6}>

            <GridItem borderRadius="10px" p={4} rowSpan={2} colSpan={2} bg='#755CDE'>
                <Flex p={2} h="100%" align="flex-start" justify="space-between" >
                    <Text alignSelf="flex-end" fontWeight="bold " color="white" fontSize="2xl" >Graphic Design</Text>
                    <Image src={S8}/>
                </Flex>
            </GridItem>

            <GridItem borderRadius="10px" p={4} colSpan={1} bg='#F6A560' >
                <Flex p={2} h="100%" align="flex-start" justify="space-between" >
                    <Text alignSelf="flex-end" fontWeight="bold " color="white" fontSize="2xl" >UI/UX</Text>
                    <Image src={S3}/>
                </Flex>
            </GridItem>
            <GridItem borderRadius="10px" p={4} colSpan={1} bg='#F39E9E' >
                <Flex p={2} h="100%" align="flex-start" justify="space-between" >
                    <Text alignSelf="flex-end" fontWeight="bold " color="white" fontSize="2xl" >Apps</Text>
                    <Image src={S7}/>
                </Flex>
            </GridItem>
            <GridItem borderRadius="10px" p={4} colSpan={2} bg='#61C4B7' >
                <Flex p={2} h="100%" align="flex-start" justify="space-between" >
                    <Text alignSelf="flex-end" fontWeight="bold" color="white" fontSize="2xl" >Photography</Text>
                    <Image src={S2}/>
                </Flex>
            </GridItem>

            <GridItem borderRadius="10px" p={4} colSpan={2} bg='#EB7565' >
                <Flex p={2} h="100%" align="flex-start" justify="space-between" >
                    <Text alignSelf="flex-end" fontWeight="bold " color="white" fontSize="2xl" >Ilustrations</Text>
                    <Image src={S9}/>
                </Flex>
            </GridItem>
            <GridItem borderRadius="10px" p={4} colSpan={2} bg='#552049' >
                <Flex p={2} h="100%" align="flex-start" justify="space-between" >
                    <Text alignSelf="flex-end" fontWeight="bold " color="white" fontSize="2xl" >Motion graphics</Text>
                    <Image src={S1}/>
                </Flex>
            </GridItem>

        </Grid>
        </>
    )
}

export default Ex1Grid