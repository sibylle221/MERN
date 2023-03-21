
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
import  Logo  from '../styling/Logo';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
export default function CallToActionWithAnnotation() {

        
  return (
    <>
      <Container maxW={'3xl'}>
      
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
            
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
                color = "blue.400">
                
                <Logo/> <br />
            <Text as={'span'} color={'gray.500'}>
              Healthcare, in your hands
            </Text>
          </Heading>

          <Stack
            direction={'column'}
            width={'full'}
            spacing={10}
      
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
                        <Link to = "/login">

            <Button
              colorScheme={'blue'}
              bg={'blue.400'}
              rounded={30}
              
              fontSize={'5xl'}
              px={10}
              py = {10}
              _hover={{
                bg: 'blue.500',
              }}>
              Login
            </Button>
            </Link>
            <Link to = "/signup">
            <Button
              colorScheme={'blue'}
              bg={'blue.400'}
              rounded={30}
              
              fontSize={'5xl'}
              px={10}
              py = {10}
              _hover={{
                bg: 'blue.500',
              }}>
              Sign up
            </Button>
            </Link>
            <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
              Learn more
            </Button>
            <Box>

            
            </Box>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

