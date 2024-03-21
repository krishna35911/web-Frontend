import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginapi } from '../apicalls/api'

function Login() {
    const [userdata,setuserdata]=useState({
        email:"",
        password:""
    })

    const navi=useNavigate()

    const login=async(e)=>
    {
        e.preventDefault()
        const {email,password}=userdata
        if(!email || !password)
        {
            alert('Fill completely')
        }
        else
        {    
                const res=await loginapi(userdata)
                    
                if(res.status==200)
                {
                    alert('login successful')
                    sessionStorage.setItem('alreadyuser',JSON.stringify(res.data.alreadyuser))
                    sessionStorage.setItem('token',res.data.token)    

                    setuserdata({
                        username:"",
                        password:""
                    })
                    setTimeout(()=>
                    {
                        navi('/home')
                    },1000)
                }
                else
                {
                    alert(res.response.data)
                }
           
        }
    }
  return (
    <>
      <div className='d-flex justify-content-center align-items-center flex-column'>

        <h1 className='text-bold mt-5' style={{fontSize:'50px'}}>Sign In</h1>

            <form className='d-flex justify-content-center align-items-center flex-column w-100 mt-3'>

                <input type="text" className='form-control mt-4 w-50' placeholder='Enter email' value={userdata.email} onChange={(e)=>setuserdata({...userdata,email:e.target.value})}/>

                <input type="password" className='form-control mt-5 w-50' placeholder='Enter password' value={userdata.password} onChange={(e)=>setuserdata({...userdata,password:e.target.value})}/>

                <button className='btn btn-success mt-5 w-25' type='button' onClick={login}>Submit</button>

                <p className='mt-4'>New user ? <a href="/register" style={{textDecoration:'none',color:'#D63484',fontWeight:'bold'}}>Register</a></p>

            </form>
            
        </div>
    </>
  )
}

export default Login
