import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Spinner from '../../components/Spinner'
import { toast } from 'react-toastify'
import { getRequests, reset } from '../../features/requests/requestSlice'
import RequestItemS from '../../components/RequestItemStyled'
import { Heading, Text } from '@chakra-ui/react'
import LogoSmall from '../../styling/LogoSmall'


function PastRequests() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
    const { requests, isLoading, isError, message } = useSelector((state) => state.requests)

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }
        if(!user) {
            navigate('/login')
        }

        dispatch(getRequests())

        return () => {
            dispatch(reset())
        }

    }, [user, navigate, dispatch, isError, message])

    if (isLoading) {
        return <Spinner />
    }

  return (
    <>
    <Heading
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '2xl', md: '2xl' }}
              lineHeight={'100%'}
              color = {'#5FA7CF'}   >
                  <LogoSmall /><br />
                  <br></br>
                <Text as={'span'}  fontSize = {'5xl'} color = {'#5FA7CF'}>  
                Past Requests
                </Text>
            </Heading>
    <section className="heading">

        <p>Old requests that have been completed or cancelled</p>
    </section>
    <section className="content">
  {requests.filter(request => request.status !== "active").length > 0 ? (
    <div className="requests">
      {requests
        .filter(request => request.status !== "active")
        .map(request => (
          <RequestItemS key={request._id} request={request} />
        ))}
    </div>
  ) : (
    <h2>No Active Requests</h2>
  )}
</section>
    </>
  )
}

export default PastRequests


