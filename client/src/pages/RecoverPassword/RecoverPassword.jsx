import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const RecoverPassword = () => {

    const [input,setInput] = useState('');
    const [msg,setMsg] = useState({
        type : '',
        status : false,
        msg : ''
    });

    const handleForm = async (e)=>{
        e.preventDefault();
        if(input){
            try{
                await axios.post(`http://localhost:5050/api/user/recover-password`,{email : input}).then(res=>{
                    setMsg({
                        type : 'success',
                        status : true,
                        msg : 'Check your email'
                    })
                }).catch(error=>{
                    setMsg({
                        type : 'danger',
                        status : true,
                        msg : 'enter valid email'
                    });
                });
               }catch(error){
                console.log(error);
               }
        }else{
            setMsg({
                type : 'danger',
                status : true,
                msg : 'Please enter email'
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
                            <h3 className='fs-6 fw-bold'>Find Your Account</h3>
                        </div>
                        <div className="card-body">
                            {
                                msg.status && <p className={`alert alert-${msg.type}`}>{msg.msg}</p>
                            }
                            <span className='fs-6 text-muted'>Please enter your email address or mobile number to search for your account.</span>

                            <form onSubmit={handleForm} action="">
                                <div className="my-3">
                                    <input value={input} onChange={e=>setInput(e.target.value)} type="email" className='form-control' placeholder='Email address' />
                                </div>
                                <hr />
                                <div className="my-3 d-flex justify-content-end gap-2">
                                <Link to='/login' className='btn btn-light btn-sm'>Cancel</Link>
                                 <button type='submit' className='btn btn-primary btn-sm'>Search</button>
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

export default RecoverPassword