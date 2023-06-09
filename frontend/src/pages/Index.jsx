import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
} from '@chakra-ui/react';
import  Logo  from '../styling/Logo';
import { Link } from 'react-router-dom'

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
            color = {'#5FA7CF'}>
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
            width = {250}
            height = {100}
            bg={'#5FA7CF'}
            border = {'4px'}
            color = {'white'}    
            fontSize={'5xl'}
            borderRadius = {20}
            px={10}
            py = {'10'}
            _hover={{
              bg: '#B9E9FF',
            }}>
              Login
            </Button>
            </Link>
            <Link to = "/register">
            <Button   
              colorScheme={'blue'}
              width = {250}
              height = {100}
              bg={'#5FA7CF'}
              border = {'4px'}
              color = {'white'}    
              fontSize={'5xl'}
              borderRadius = {20}
              px={10}
              py = {'10'}
              _hover={{
                bg: '#B9E9FF',
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

