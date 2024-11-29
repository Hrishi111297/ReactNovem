import React from 'react'

const UserInfoFunction=(props)=> {
const {name}=props;
  return (
    <div  className='userCard'>
        <h1>Hello {name}</h1>
        <h2>Sindhudurga </h2>
        <h2>Kankavli</h2>
        <h2>9970561589</h2>    
    </div>
  )
}

export default UserInfoFunction;