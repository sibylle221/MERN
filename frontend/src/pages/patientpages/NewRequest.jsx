
import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    Icon,
    useColorModeValue,
    createIcon,
  } from '@chakra-ui/react';
  import { useSelector, useDispatch } from 'react-redux'
  import  LogoSmall from '../../styling/LogoSmall';
  import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
  import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
  import { useEffect } from 'react'
  
import { useState } from 'react'
import RequestItemS from '../../components/RequestItemStyled';
import RequestFormS from '../../components/RequestFormStyled';
  import Spinner from '../../components/Spinner'
  import { toast } from 'react-toastify'
  import { getRequests, reset, createRequest } from '../../features/requests/requestSlice'
import { createReducer } from '@reduxjs/toolkit';
//   import RequestItem from '../components/RequestItem'


  export default function CallToActionWithAnnotation() {
  
          
    const {user } = useSelector((state) => state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { requests, isLoading, isError, message } = useSelector((state) => state.requests)



    const handleButtonClick = (text) => {

        
        dispatch(createRequest({text, status: "active"}))
        navigate('/requests')

    }
    
    const [text, setText ] = useState('')


    return (
      <>

        <Container maxW={'3xl'} >
        
          <Stack
            as={Box}
            textAlign={'center'}
            spacing={{ base: 8, md: 10 }}
              
            py={{ base: 4, md: 5 }}>
            <Heading
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '2xl', md: '2xl' }}
              lineHeight={'100%'}
              color = {'#5FA7CF'}   >
                  <LogoSmall /><br />
                  <br></br>
                <Text as={'span'}  fontSize = {'5xl'} color = {'#5FA7CF'} >  
                New Request
                </Text>
            </Heading>
    
  
            <Stack
              
            //   width={'full'}
            //   height = {'full'}
              alignItems={'center'}
              spacing={4}
            //   display = {'flex'}
            //   alignSelf={'center'}
            //   columnGap = {10}
            //   position={'relative'}
            //   margin = {'auto'}
            //   padding = {'auto'}
            display = {'flex'}
            

              >
  
            <Button

             onClick = {(e) => {
                handleButtonClick('Water');
                setText (e.target.value)
            }}

                colorScheme={'blue'}
                width = {250}
                height = {100}
                bg={'#D8F3FF'}
                border = {'4px'}
                color = {'#5FA7CF'}    
                fontSize={'3xl'}
                borderRadius = {20}
                px={10}
                py = {'10'}
                _hover={{
                  bg: '#B9E9FF',
                }}>
              Water
            </Button>
 
            <Button
             onClick = {(e) => {
                handleButtonClick('Toileting');
                setText (e.target.value)
            }}
                colorScheme={'blue'}
                bg={'#D8F3FF'}
                width = {250}
                height = {100}
                border = {'4px'}
                color = {'#5FA7CF'}    
                fontSize={'3xl'}
                borderRadius = {20}
                px={10}
                py = {'10'}
                _hover={{
                  bg: '#B9E9FF',
                }}>
              Toileting
            </Button>
            <Button
             onClick = {(e) => {
                handleButtonClick('Pain Relief');
                setText (e.target.value)
            }}
                colorScheme={'blue'}
                bg={'#D8F3FF'}
                border = {'4px'}
                width = {250}
                height = {100}
                color = {'#5FA7CF'}    
                fontSize={'3xl'}
                borderRadius = {20}
                px={10}
                py = {'10'}
                _hover={{
                  bg: '#B9E9FF',
                }}>
              Pain Relief
            </Button>

            <Button
             onClick = {(e) => {
                handleButtonClick('Mobility Assistance');
                setText (e.target.value)
            }}
                colorScheme={'blue'}
                bg={'#D8F3FF'}
                border = {'4px'}
                width = {250}
                height = {100}
                color = {'#5FA7CF'}    
                fontSize={'3xl'}
                borderRadius = {20}
                px={10}
                py = {'10'}
                _hover={{
                  bg: '#B9E9FF',
                }}>
              Mobility <br/>
              Assistance
            </Button>

            < RequestFormS />


            </Stack>
          </Stack>
        </Container>

      </>
     
    );
  }
  
  