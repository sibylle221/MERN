import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { pendingRequest } from '../features/requests/requestSlice';
import { Button, Text, Box } from '@chakra-ui/react';


function RequestItemStaff({request}) {

  const dispatch = useDispatch();
  const [status, setStatus] = useState(request.status);

  //staff accepts request
  const onAccept = async () => {
      try {
          const updatedRequest = await dispatch(pendingRequest({
              id: request._id,
              status: 'pending'
          })).unwrap();
          setStatus(updatedRequest.status);
      } catch (error) {
          console.log(error);
      }
  }

  return (
    <Box
      className="request"
      bg="#D8F3FF"
      border="2px"
      borderRadius="40px"
      color="#5FA7CF"
      _hover={{ bg: '#B9E9FF' }}
      p="10px"
      m="10px">

<Text
        fontSize="2xl"
        variant="link"
        colorScheme="blue"
        colour="blue"
        size="sm"
        fontWeight="bold"
        textAlign="left"
        paddingLeft="10px">
        Request: {request.status}
        <Text fontSize="sm" fontWeight="bold" letterSpacing="wide" textTransform="uppercase" mb={2}>
          Submission Time: {new Date(request.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </Text>
      </Text>

      <Text fontSize={'2xl'} fontWeight={'bold'}>{request.text}</Text>
<br></br>

    <div className="request">
        <Button
        showif={status === 'pending'}
        onClick={
          onAccept
          
        }
        className="cancel"
        bg="#D8F3FF"
        border="2px"
        color="#5FA7CF"
        bgColor="white"
        _hover={{ bg: '#B9E9FF' }}
        display="inline-block" >
        Accept
      </Button>
       
    </div>
    </Box>
  );
}

export default RequestItemStaff

