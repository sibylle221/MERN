import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { cancelRequest, deleteRequest } from '../../features/requests/requestSlice';

function RequestItem({ request }) {
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
  }

  const onDelete = async () => {
    try {
      await dispatch(deleteRequest(request._id)).unwrap();
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
      <button onClick={onCancel} className="cancel">
        Cancel
      </button>
      <button onClick={onDelete} className="delete">
        Delete
      </button>
    </div>
  );
}

export default RequestItem;
