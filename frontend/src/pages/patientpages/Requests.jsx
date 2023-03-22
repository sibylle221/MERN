
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

  

import RequestItemS from '../../components/RequestItemStyled';
import RequestFormS from '../../components/RequestFormStyled';
  import Spinner from '../../components/Spinner'
  import { toast } from 'react-toastify'
  import { getRequests, reset } from '../../features/requests/requestSlice'
//   import RequestItem from '../components/RequestItem'
  


  export default function CallToActionWithAnnotation() {
  
          
    const {user } = useSelector((state) => state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { requests, isLoading, isError, message } = useSelector((state) => state.requests)

    return (
      <>

        <Container maxW={'3xl'} >
        
          <Stack
            as={Box}
            textAlign={'center'}
            spacing={{ base: 8, md: 14 }}
              
            py={{ base: 20, md: 5 }}>
            <Heading
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '2xl', md: '2xl' }}
              lineHeight={'100%'}
              color = {'#5FA7CF'}   >
                  <LogoSmall /><br />
                  <br></br>
                <Text as={'span'}  fontSize = {'5xl'} color = {'#5FA7CF'}>  
                  Manage Requests
                </Text>
            </Heading>
    
  
            <Stack
              direction={'column'}
              width={'full'}
              height = {'full'}
              spacing={10}
              align={'center'}
              alignSelf={'center'}
              position={'relative'}>
                
            <Link to = "/newrequest">
  
              <Button
                colorScheme={'blue'}
                // rounded={'full'}
                bg={'#D8F3FF'}
                border = {'4px'}
                color = {'#5FA7CF'}    
                fontSize={'3xl'}
                borderRadius = {'md'}

                px={10}
                py = {'10'}
                _hover={{
                  bg: '#B9E9FF',
                }}>
                New Request
                
              </Button>
              </Link>
            
              <Text fontSize = {'2xl'} variant={'link'} colorScheme={'blue'} colour = {'blue'} size={'sm'} fontWeight={'bold'}>
              Active Requests:
                </Text>
              

              <section className="content">
  {requests.filter(request => request.status === "active").length > 0 ? (
    <div className="requests">
      {requests
        .filter(request => request.status === "active")
        .map(request => (
          <RequestItemS key={request._id} request={request} />
        ))}
    </div>
  ) : (
    <Text fontSize = {'2xl'} variant={'link'} colorScheme={'blue'} colour = {'blue'} size={'sm'} fontWeight={'bold'}>
    There are currently no Active Requests
        </Text>


  )}
</section>
      
      <Link to = "/pastrequests">
              <Button
                colorScheme={'blue'}
                bg={'#D8F3FF'}
                border = {'4px'}
                color = {'#5FA7CF'}    
                fontSize={'3xl'}
                borderRadius = {'md'}
                px={10}
                py = {'10'}
                _hover={{
                  bg: '#B9E9FF',
                }}>
                View Past Requests
                
              </Button>
              </Link>

            </Stack>
          </Stack>
        </Container>

      </>
     
    );
  }
  
  