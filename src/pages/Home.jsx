import React, { useContext, useEffect } from 'react'
import Card from '../components/Card'
import UserContext from '../Context/UserContext'
import { Fetchuser } from '../Context/UserAction'

const Home = () => {

    const { users, dispatch } = useContext(UserContext)

    const getdata = async () => {
        const data = await Fetchuser()
        dispatch({
            type: "GET_DATA",
            payload: data,
        })
    }
    useEffect(() => {
        getdata()
    }, [])

    if(users.length === 0){
      return(
        <h1 className="text-center text-secondary mt-5 display-1">NO user</h1>
        )
    }
    return (
        <div className="container p-5 ">
            <h1 className="text-center display-1">user</h1>

            <div className="row mt-2 g-3">
                {
                    users.map((user) => <Card key={user.id} user={user}/>)
                }
            
            </div>

        </div>
    )
}

export default Home
