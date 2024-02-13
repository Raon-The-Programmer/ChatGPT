import React, { useEffect, useState } from "react";
import { IoIosLogIn } from "react-icons/io";
import auth from "../services/auth";
import { useDispatch } from "react-redux";
import { loginUser } from "../Redux/slices/userSession";
import { toast } from "react-toastify";



const Login = () => {
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')
    const dispatch = useDispatch()
    

    useEffect(()=>{
      const checkStatus = async()=>{
        const data = await auth.checkAuth()
        if(data){
          dispatch(loginUser(data.name))
          toast.success(data.message)
        }
      }
      checkStatus()
    },[])
    const handleSubmit = async (e)=>{
        e.preventDefault()
        const user = {
            email,
            password
        }
            try{
             
              const res = await auth.loginuser(user)
            if (res){
             
                dispatch(loginUser(res.name))
              toast.success("LoggedIn!!!")
            }
            }
            catch(err){
             
              toast.error(err.response.data.message)

            }
            
        
    }
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form 
        onSubmit={handleSubmit}
        style={{
          padding: "30px",
          boxShadow: "10px 10px 20px #000",
          borderRadius: "10px",
          border: "none",
          width: "400px",
        }}
      >
        <div className="mb-3 text-center">
          <h2 className="fw-bold">Login</h2>
        </div>
        <div className="mb-3" >
            <label htmlFor="email" className="mb-1">Email</label>
            <input type="text" placeholder="Enter your email" required value={email} onChange={(e)=>setemail(e.target.value)} className="form-control mb-3" />
            <label htmlFor="password" className="mb-1">Password</label>
            <input type="password" value={password} required onChange={(e)=>setpassword(e.target.value)} placeholder="Enter your password" className="form-control" />
        </div>
        <button
          type="submit"
          className="btn btn-primary w-100 mt-3"
        >
          <IoIosLogIn size={20} className="me-2 back" />
          Login
        </button>
        
      </form>
    </div>
  );
};

export default Login;
