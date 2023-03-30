import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
  } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux'
import  LogoSmall from '../../styling/LogoSmall';
import { useNavigate } from 'react-router-dom'
import React from 'react'
import { useEffect } from 'react'
import water from "../../assets/images/water.svg";
import toilet from "../../assets/images/toilet.svg";
import medications from "../../assets/images/medications.svg";
import staff from "../../assets/images/staff.svg";
import { useState } from 'react'
import RequestFormS from '../../components/RequestFormStyled';
import { toast } from 'react-toastify'
import { getRequests, reset, createRequest } from '../../features/requests/requestSlice'


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

    useEffect(() => {
      if(isError) {
          toast.error(message)
      }
      if(!user) {
          navigate('/login')
      }
  
      dispatch(getRequests())
  
      return () => {
          dispatch(reset())
      }
  
  }, [user, navigate, dispatch, isError, message])
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
              alignItems={'center'}
              spacing={4}
              display = {'flex'}>
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
              <img src={water} width="30" height="30" alt="water" padding = {'10%'} />
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
              <img src={toilet} width="70" height="70" alt="water" margin = {'10px'} />
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
              <img src={medications} width="40" height="40" alt="water" padding = {'10%'} />
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
              <img src={staff} width="50" height="50" alt="water" padding = {'10%'} />
            </Button>

            < RequestFormS />
            </Stack>
          </Stack>
        </Container>
      </>
    );
  }
  
  