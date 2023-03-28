import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import RequestForm from '../../components/oldcomponents/RequestForm'
import Spinner from '../../components/Spinner'
import { toast } from 'react-toastify'
import { getRequests, reset } from '../../features/requests/requestSlice'
import RequestItemStaff from '../../components/RequestItemStaff'
import RequestItemStaffPend  from '../../components/RequestItemStaffPend'
import Logo from '../../styling/Logo'
import { Heading, Box, Button, Text } from '@chakra-ui/react'

function Requests() {

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
    <Box
    fontWeight={'bold'}
    color = {'#5FA7CF'}
    >


    <Logo/>
    <section className="heading">
        <h1>Manage Patient Requests</h1>
        
    </section>
    <Text
        color={'gray.500'}
        fontSize={'3xl'}
        >Current Active Requests:</Text>

        {/* only return if user is admin else display error#	 */}
        {user && user.role === 'staff' && (	
        <div className="container">	
            <div className="row">	
                <div className="col-md-6 offset-md-3">	
                    
                    
    <section className="content">
  {requests.filter(request => request.status === "active").length > 0 ? (
    <div className="requests">
      {requests
        .filter(request => request.status === "active")
        .map(request => (
          <RequestItemStaff key={request._id} request={request} />
        ))}
    </div>
  ) : (
    <h2>No Active Requests</h2>
  )}
</section>
<Text
        color={'gray.500'}
        fontSize={'3xl'}
        >In Progress Requests:  
        </Text>
<section className="pending">


        
        {requests.filter(request => request.status === "pending").length > 0 ? (
          <div>
        {requests
        .filter(request => request.status === "pending")
        .map(request => (
          <RequestItemStaffPend key={request._id} request={request} />
        ))}
        </div>
         ) : (
    <h2>No Requests in Progress</h2>
  )}
                    </section>
                </div>	
            </div>	
        </div>	
    )}	
    {!user && (	
        <div className="container">	
            <div className="row">	
                <div className="col-md-6 offset-md-3">	
                    <h1 className="text-center">Manage Requests</h1>	
                    <p className="text-center">You need to login to access this page</p>	
                </div>	
            </div>	
        </div>	
    )}	
    {user && user.role !== 'staff' && (	
        <div className="container">	
            <div className="row">	
                <div className="col-md-6 offset-md-3">	
                    <h1 className="text-center">Manage Requests</h1>	
                    <p className="text-center">You are not authorized to access this page</p>	
                </div>	
            </div>	
        </div>	
    )}	
        
        </Box>
    </>
  )
}

export default Requests