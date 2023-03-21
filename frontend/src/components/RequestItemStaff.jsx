import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { pendingRequest, activateRequest } from '../features/requests/requestSlice';

function RequestItemStaff({ request }) {
  const dispatch = useDispatch();

  const [status, setStatus] = useState(request.status);

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



  return (
    <div className="request">
      <div>
        {new Date(request.createdAt).toLocaleDateString('en-GB')}
        <br />
        {new Date(request.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </div>
      <h2>{request.text}</h2>
      <h2>{status}</h2>

  
        <button onClick={onAccept} className="pending"  showif={status === 'active'}>
        Accept Request
        </button>
      
        <button onClick={onActivate} className="active" showif={status === 'pending'}>
        Cancel Request
        </button>

       
    </div>
  );
}

export default RequestItemStaff
