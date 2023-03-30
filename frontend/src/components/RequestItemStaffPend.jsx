import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { activateRequest, completeRequest } from '../features/requests/requestSlice';
import { Button, Text, Box } from '@chakra-ui/react';

function RequestItemStaff({request}) {

  const dispatch = useDispatch();
  const [status, setStatus] = useState(request.status);

  // staff cancels request
  const onActivate = async () => {
      try {
          const updatedRequest = await dispatch(activateRequest({
              id: request._id,
              status: 'active'
          })).unwrap();
          setStatus(updatedRequest.status);
      } catch (error) {
          console.log(error);
      }
  }

  const onComplete = async () => {
    try {
        const updatedRequest = await dispatch(completeRequest({
            id: request._id,
            status: 'complete'
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
      m="10px" >

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
          onActivate
        }
        className="cancel"
        bg="#D8F3FF"
        border="2px"
        color="#5FA7CF"
        bgColor="white"
        _hover={{ bg: '#B9E9FF' }}
        display="inline-block"
      >
        Cancel Request
      </Button>
      </div>
      <div className="request">
        <Button
        showif={status === 'pending'}
        onClick={
            onComplete
        }
        className="cancel"
        bg="#D8F3FF"
        border="2px"
        color="#5FA7CF"
        bgColor="white"
        _hover={{ bg: '#B9E9FF' }}
        display="inline-block">
        Completed Request
      </Button>
  
    </div>
    </Box>
  );
}

export default RequestItemStaff

