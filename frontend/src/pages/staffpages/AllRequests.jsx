import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Spinner from '../../components/Spinner'
import { toast } from 'react-toastify'
import { getAllRequests, reset } from '../../features/requests/requestSlice'
import RequestItemS from '../../components/RequestItemStyled'
import { Box, Button, Heading, Text } from '@chakra-ui/react'

function AllRequests() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
    //make requests get all requests
    const { requests, isLoading, isError, message } = useSelector((state) => state.requests)
    console.log(AllRequests,"AllRequests")

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }
        if(!user) {
            navigate('/login')
        }

        dispatch(getAllRequests())

        return () => {
            dispatch(reset())
        }

    }, [user, navigate, dispatch, isError, message])

    if (isLoading) {
        return <Spinner />
    }

  return (
    <>
    <Box
    bg={'#5FA7CF'}
    color = {'white'}
    fontWeight = {'bold'}>
    <section className="heading">
        <h1>Manage Requests</h1>
        <p>How can we help you today?</p>
    </section>
    <section className="content">
    {requests.filter(request => request.status === "active").length > 0 ? (
        <div className = "requests">
            {requests.filter(request => request.status === "active").map((request) => (
                <RequestItemS key={request._id} request={request} />
        ))}
        </div>
    ) :
    (<h2>No Active Requests</h2>)
    }
</section>
</Box>
    </>
  )
}

export default AllRequests