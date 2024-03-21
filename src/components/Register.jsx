import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerapi } from '../apicalls/api'

function Register() {
    const [userdata,setuserdata]=useState({
        name:"",
        email:"",
        password:""
    })

    const navi=useNavigate()

    const register=async(e)=>
    {
        e.preventDefault()
        const{name,email,password}=userdata
    
        if(!name || !email || !password)
        {
            alert('Fill completely')
        }
        else
        {
            const result=await registerapi(userdata)
    console.log(result);
            if(result.status===200)
            {
                alert('succesfully registered')
                setuserdata({
                    name:"",
                    email:"",
                    password:""
                })
                navi('/')
            }
            else
            {
                alert(result.response.data)
            }
        }
    }
  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>

        <h1 className='text-bold mt-5' style={{fontSize:'50px'}}>Sign Up</h1>

            <form className='d-flex justify-content-center align-items-center flex-column w-100 mt-3'>

                <input type="text" className='form-control mt-4 w-50' placeholder='Enter name' value={userdata.name} onChange={(e)=>setuserdata({...userdata,name:e.target.value})}/>

                <input type="email" className='form-control mt-4 w-50' placeholder='Enter email' value={userdata.email} onChange={(e)=>setuserdata({...userdata,email:e.target.value})}/>

                <input type="password" className='form-control mt-5 w-50' placeholder='Enter password' value={userdata.password} onChange={(e)=>setuserdata({...userdata,password:e.target.value})}/>

                <button className='btn btn-success mt-5 w-25' type='button' onClick={register}>Submit</button>

                <p className='mt-4'>Already a user ? <a href="/" style={{textDecoration:'none',color:'#D63484',fontWeight:'bold'}}>Login</a></p>

            </form>
            
        </div>
  )
}

export default Register
