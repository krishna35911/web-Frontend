import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { deleteuserapi, getuserapi } from '../apicalls/api'

function Home() {

  const[users,setusers]=useState([])

  const allusers=async()=>
  {
    const res=await getuserapi()
    if(res.status===200)
    {
      setusers(res.data)
    }
    else
    {
      console.log(res.response.data)
    }

  }
  console.log(users);


  const handleDelete=async(id)=>
  {
   const token=sessionStorage.getItem("token")
   console.log(token);
   const header={
     "Content-Type":"application/json",
     "x-access-token":`${token}`
   }
   const result=await deleteuserapi(id,header)
   console.log(result);
 
   if(result.status===200)
   {
     allusers()
   }
   else
   {
     alert(result.response.data)
   }
  }
  useEffect(()=>
  {
    allusers()
  },[])
  return (
    <>
    <h1 className='text-center bold mt-5'>All users</h1>
      <Table striped bordered hover className='mt-5'>
      <thead className='text-center'>
        <tr >
          <th className='p-4'>#</th>
          <th className='p-4'>Name</th>
          <th className='p-4'>Email</th>
          <th className='p-4'>Password</th>
          <th className='p-4'>Actions</th>
        </tr>
      </thead>
      <tbody className='text-center'>
        {users?.length>0?
        users.map((item)=>(<tr>
          <td>1</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.password}</td>
          <td className='d-flex justify-content-center align-items-center'>
            <button className='btn btn-warning' type='button'>Edit</button>
            <button className='btn btn-danger ms-4' type='button' onClick={()=>handleDelete(item._id)}>Delete</button>
          </td>
        </tr>)):<p>nothing</p>}
      </tbody>
    </Table>
    </>
  )
}

export default Home
