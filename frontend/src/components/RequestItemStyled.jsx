import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { cancelRequest, deleteRequest } from '../features/requests/requestSlice';
import { Button, Text, Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function RequestItemS({ request }) {
  const dispatch = useDispatch();
  const [status, setStatus] = useState(request.status);

  const onCancel = async () => {
    try {
      const updatedRequest = await dispatch(cancelRequest({
        id: request._id,
        status: 'cancelled'
      })).unwrap();
      setStatus(updatedRequest.status);
    } catch (error) {
      console.log(error);
    }
  };

  const onDelete = async () => {
    try {
      await dispatch(deleteRequest(request._id)).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();
  return (
    <Box
      className="request"
      bg="#D8F3FF"
      border="2px"
      borderRadius="40px"
      color="#5FA7CF"
      _hover={{ bg: '#B9E9FF' }}
      p="10px"
      m="10px"
    >
      <Text
        fontSize="2xl"
        variant="link"
        colorScheme="blue"
        colour="blue"
        size="sm"
        fontWeight="bold"
        textAlign="left"
        paddingLeft="10px"
      >
        Request: {request.status}
        <Text fontSize="sm" fontWeight="bold" letterSpacing="wide" textTransform="uppercase" mb={2}>
          Submission Time: {new Date(request.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </Text>
      </Text>

      <Text fontSize={'2xl'} fontWeight={'bold'}>{request.text}</Text>

      {/* <Button
        onClick={onDelete}
        className="delete"
        bg="#D8F3FF"
        border="2px"
        color="#5FA7CF"
        _hover={{ bg: '#B9E9FF' }}
      >
        Delete
      </Button> */}

      <Button
        onClick={
          onCancel
          
        }
        className="cancel"
        bg="#D8F3FF"
        border="2px"
        color="#5FA7CF"
        bgColor="white"
        _hover={{ bg: '#B9E9FF' }}
        display="inline-block"
      >
        Cancel
      </Button>
    </Box>
  );
}

export default RequestItemS;
