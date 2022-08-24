import axios from 'axios';
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const ResetPassword = () => {

    const params = useParams();

    const [msg,setMsg] = useState({
        type : '',
        status : false,
        msg : ''
    });


    const [input,setInput] = useState('')

    const handleForm = async (e)=>{
        e.preventDefault();
       try{
        await axios.patch(`http://localhost:5050/api/user/reset-password`,{password : input,token : params.token}).then(res=>{
            setMsg({
                type : 'success',
                status : true,
                msg : 'Reset success'
            })
        }).catch(error=>{
            console.log(error);
            setMsg({
                type : 'danger',
                status : true,
                msg : 'enter valid email'
            })
        });
       }catch(error){
        console.log(error);
        setMsg({
            type : 'danger',
            status : true,
            msg : 'enter valid email'
        })
       
       }
    }


  return (
    <div>
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card shadow">
                        <div className="card-header">
                            <h3 className='fs-6 fw-bold'>Reset Your Password</h3>
                        </div>
                        <div className="card-body">
                            <span className='fs-6 text-muted'>Please enter a new password</span>

                            <form onSubmit={handleForm} action="">
                                <div className="my-3">
                                    <input value={input} onChange={e=>setInput(e.target.value)} type="password" className='form-control' placeholder='New Password' />
                                </div>
                                <hr />
                                <div className="my-3">
                                 <button type='submit' className='btn btn-primary btn-sm'>Save</button>
                                </div>
                                
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ResetPassword