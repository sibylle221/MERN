import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import RequestForm from '../components/RequestForm'
import Spinner from '../components/Spinner'
import { toast } from 'react-toastify'
import { getRequests, reset } from '../features/requests/requestSlice'
import RequestItemStaff from '../components/RequestItemStaff'

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
    <section className="heading">
        <h1>Manage Patient Requests</h1>
        <p>Current Active Requests</p>
    </section>

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
<section className="pending">
        <h1>In Progress Requests   
        </h1>
        {requests
        .filter(request => request.status === "pending")
        .map(request => (
          <RequestItemStaff key={request._id} request={request} />
        ))}
        </section>
    </>
  )
}

export default Requests