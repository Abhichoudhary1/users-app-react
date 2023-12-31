import React, { useContext, useEffect } from 'react'
import UserContext from '../Context/UserContext'
import { newfetchuser } from '../Context/UserAction'
import { useParams } from 'react-router-dom'

const Userpage = () => {

   const {dispatch,user} = useContext(UserContext)

   const params = useParams();


   const getuser = async (id) => {
      const data = await newfetchuser(id)
          dispatch({
            type:"GET_USER",
            payload:data
          })
   }

   useEffect(()=>{
      getuser(params.id)
   }, [])

   if(!user){
      return(
         <h1 className='text-center mt-5 display-1 text-secondary'>...loading</h1>
         )
   }
  return (
     <div className="container p-5">
        <h1 className='text-center'>welcome {user.name}</h1>
     </div>
  )
}

export default Userpage
