import React from 'react'
import { useParams } from 'react-router-dom';

function Profile() {
    const params = useParams();
  return (
    <div> 
    
        <h1>Hello, {params.name} </h1>   
    
    </div>
  )
}

export default Profile