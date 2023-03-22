
import { Button, Box, Flex, Heading, Spacer } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../styling/Logo'


function StaffHome() {
    const navigate = useNavigate()

    return (
      <Box>
        <Logo/>
<Button onClick={() => navigate('/prescribe')}>Prescribe</Button>
<Button onClick={() => navigate('/requestsstaff')}>Manage Accepted Requests</Button>
{/* <Button onClick={() => navigate('/allrequests')}>Patients</Button> */}
      </Box>
    )
  }

// 
export default StaffHome