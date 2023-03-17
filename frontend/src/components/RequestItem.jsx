// import React from 'react'
// import {Component } from 'react'
// import {useDispatch, useSelector} from 'react-redux'
// import { useState } from 'react'
// import { useEffect } from 'react'
// import { updateRequest, deleteRequest} from '../features/requests/requestSlice'

// function RequestItem ( {request}) {
    
//     console.log (request.status)
//     const { _id: requestId, createdAt, text, status } = request;

//     const dispatch = useDispatch()
    
//     // const [requestStatus, setStatus] = useState(request.status)
//     // const [status , setStatus] = useState(request.status)
//     const onCancel = () => {
//         // setStatus("cancelled")
//         // request.status = "cancelled"
//         // const requestStatus = request.status
//         // const requestId = request._id
//         const updatedRequest = {
//             ...request,
//             status: "cancelled",
//         }
//         // dispatch(updateRequest(cancelRequest._id, cancelRequest.status))
//         dispatch(updateRequest(updatedRequest))
//         // dispatch(updateRequest({requestId, requestStatus}))
//         console.log ("tester")

//     }

//     // const requestId = request._id
//     // const requestStatus = request.status
//   return (
//     <div className= "request">
//         <div>
//             {new Date(createdAt).toLocaleDateString('en-GB')}
//             <br></br>
//             {new Date(createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
        
//         </div>
//         <h2>
//             {text}
//         </h2>
//         <h2>
//             {status}
//         </h2>
        
//         {/* <button onClick = { () => dispatch(updateRequest({requestId, requestStatus: "cancelled"}))}className="cancel"> */}
//         <button onClick={onCancel} className="cancel">
//             Cancel
//             </button>
//             {/* <button onClick={onChange} className="cancel">
//             Cancel tester
//             </button> */}

//             <button onClick = { () => dispatch(deleteRequest(requestId))}className="delete">
//             Delete
//             </button>
//         </div>
//   )
  
// }

// export default RequestItem

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateRequest, deleteRequest } from '../features/requests/requestSlice';

function RequestItem({ request }) {
  const dispatch = useDispatch();

  const [status, setStatus] = useState(request.status);

  const onCancel = async () => {
    try {
      const updatedRequest = await dispatch(updateRequest({
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
