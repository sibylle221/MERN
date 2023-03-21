// import React from 'react'
// import {useDispatch} from 'react-redux'
// import { useState } from 'react'
// import { cancelRequest} from '../features/requests/requestSlice'


// function RequestItem( {request}) {
//     const dispatch = useDispatch()

//     console.log (request.status)
//     const onCancel = e => {
//         e.preventDefault()
//         dispatch(cancelRequest({status}))
//         setStatus('')
//     }
    

//     const [status, setStatus ] = useState('')

//   return (
//     <div className= "request">
//         <div>
//             {new Date(request.createdAt).toLocaleDateString('en-GB')}
//             <br></br>
//             {new Date(request.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
        
//         </div>
//         <h2>
//             {request.text}
//         </h2>
//         <h2>
//             {request.status}
//         </h2>

//         {/* <button value = "cancelled" onClick = { () => dispatch(cancelRequest(request._id)) } className="cancel"> */}
//         <button>
//         <input type='button' name='status' id='status' value = {status}
//                     onChange = {(e) => setStatus ("cancelled")} />
//             Cancel
//             </button>
//         </div>
//   )
  
// }

// export default RequestItem

