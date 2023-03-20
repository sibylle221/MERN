import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import RequestForm from '../components/RequestForm'
import Spinner from '../components/Spinner'
import { toast } from 'react-toastify'
import { getRequests, reset } from '../features/requests/requestSlice'
import RequestItem from '../components/RequestItem'

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
    <section className="heading">
        <h1>Past Requests</h1>
        <p>Old requests that have been completed or cancelled</p>
    </section>


    <section className="content">
  {requests.filter(request => request.status !== "active").length > 0 ? (
    <div className="requests">
      {requests
        .filter(request => request.status !== "active")
        .map(request => (
          <RequestItem key={request._id} request={request} />
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