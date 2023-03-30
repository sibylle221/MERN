
import { Button, Box, Flex, Heading, Spacer } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../styling/Logo'
import { useDispatch } from 'react-redux'
import { logout, reset } from '../../features/auth/authSlice'

function StaffHome() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }  

    return (
      <Box
      color={'#5FA7CF'}>
        <Logo/>
        <br></br>
        <Button onClick={() => navigate('/requestsstaff')}
        colorScheme={'blue'}
        bg={'#D8F3FF'}
        rounded={'10px'}
        color = {'#5FA7CF'}    
        fontSize={'2xl'}
        margin = {'10px'}
        px={10}
        py = {10}
        _hover={{
            bg: '#B9E9FF',
        }}>
        Manage Accepted Requests
        </Button>
        <br></br>

        <Button onClick={() => navigate('/prescribe')}
         colorScheme={'blue'}
        bg={'#D8F3FF'}
        rounded={'10px'}
        color = {'#5FA7CF'}    
        fontSize={'2xl'}
        margin = {'10px'}
        px={10}
        py = {10}
        _hover={{
        bg: '#B9E9FF',
        }}>

        Prescribe</Button>

        <br></br>
        <Button fontSize = {'2xl'} variant={'link'} colorScheme={'blue'} size={''}       
                           
        bg={'#D8F3FF'}
        rounded={'full'}
        color = {'#5FA7CF'}    
        px={5}
        py = {2}
        margin = {'10px'}
        _hover={{
        bg: '#B9E9FF',
        }}
        onClick = {() => {
           onLogout()
        }}>
        Logout
       </Button>
      </Box>
    )
  }

export default StaffHome