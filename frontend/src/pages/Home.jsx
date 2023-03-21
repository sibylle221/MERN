
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
  import  LogoSmall from '../styling/LogoSmall';
  import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
  import { Link, useNavigate } from 'react-router-dom'
  import medical from "../assets/images/medical.svg";
import person from "../assets/images/person.svg";
  import stethoscope from "../assets/images/stethoscope.svg";



  export default function CallToActionWithAnnotation() {
  
          
    const {user } = useSelector((state) => state.auth)

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
                  Welcome {user && user.name}!
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
                <Link to = "/login">
  
              <Button
                colorScheme={'blue'}
                bg={'#D8F3FF'}
                rounded={'full'}
                color = {'#5FA7CF'}    
                fontSize={'3xl'}

                px={20}
                py = {16}
                _hover={{
                  bg: '#B9E9FF',
                }}>
                View my <br></br>
                Information
                <img src={medical} />
              </Button>
              </Link>
              <Link to = "/signup">
              <Button
                colorScheme={'blue'}
                bg={'#D8F3FF'}
                rounded={'full'}
                color = {'#5FA7CF'}    
                fontSize={'3xl'}
                px={20}
                py = {16}
                _hover={{
                  bg: '#B9E9FF',
                }}>
                Update <br></br>
                Status
                <img  src={person} />
              </Button>
              </Link>
              <Link to = "/signup">
              <Button
                colorScheme={'blue'}
                bg={'#D8F3FF'}
                rounded={'full'}
                color = {'#5FA7CF'}    
                fontSize={'3xl'}        
                px={20}
                py = {16}
                _hover={{
                  bg: '#B9E9FF',
                }}>
                Manage <br></br>
                Requests
                <img  src={stethoscope} />
              </Button>
              </Link>
              <Button fontSize = {'2xl'} variant={'link'} colorScheme={'blue'} size={'sm'}>
                Check-in
              </Button>
              <Button fontSize = {'2xl'} variant={'link'} colorScheme={'blue'} size={'sm'}>
                Logout
              </Button>
              <Box>
  
              
              </Box>
            </Stack>
          </Stack>
        </Container>

      </>
     
    );
  }
  
  