import React, { useContext, useState } from 'react';
import SignUpModal from '../../components/modal/SignUpModal';
import '../Login/Login.scss';
import cookie from 'js-cookie'
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import LoaderContext from '../../context/LoaderContext';
import createToast from '../../utility/createToast';
import axios from 'axios';

const Login = () => {
  // loader context

  const {loaderDispatch} = useContext(LoaderContext)

    // use navigate
    const Navigate = useNavigate();

    const {dispach} = useContext(AuthContext);

    // modal show
  const [modalShow, setModalShow] = useState(false);


  const [input,setInput] = useState({
    email : '',
    password : '',
  })

   // handle input fields

   const handleInput = (e)=>{

    setInput((prev)=>({...prev,[e.target.name]:e.target.value}))
  }

  // handle submit form

  const handleSubmit = async (e)=>{
    e.preventDefault();

    try{
      if(!input.email || !input.password){
        createToast("All fields are required")
        
      }else{
         await axios.post('http://localhost:5050/api/user/login',{email : input.email,password :input.password}).then(res=>{

          if(res.data.user.isVerify){
            setInput({
              email : '',
              password : ''
            });
            cookie.set('token',res.data.token)
            dispach({type : 'sign_up',payload: res.data});
            Navigate('/');
            loaderDispatch({type : 'loader_start'})
          }else{
            createToast("please verify account")
          }
         

      }).catch(error=>{
        createToast(error.response.data.message)
      })
      }
      
    }catch(error){
      console.log(error);
    }
   
  }


  return (
    <div className="color">
       <div className='login-container'>
      <div className="login-wraper">
         <div className="login-logo">
           <img className='logo-img' src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="" />
           <h2 className='logo-text'>Facebook helps you connect and share with the people in your life.</h2>
         </div>

         <div className="login-form">
          <div className="login-form-card">
             <form className='login-form' action="">

               <input name='email' onChange={handleInput} value={input.email} className='form-input' type="text" placeholder='Email address or phone number'/>

               <input name='password' onChange={handleInput} value={input.password} className='form-input' type="password" placeholder='Password'/>

               <button onClick={handleSubmit} type='submit' className='submit-btn'>Log In</button>

             </form>
             <Link className='forgot-password' to="/login/recover-password">Forgotten password?</Link>
             <div className="divider">

             </div>
             <button onClick={() => setModalShow(true)} className='create-new-account'>Create New Account</button>
             <SignUpModal
             show={modalShow}
             onHide={() => setModalShow(false)}
             setModalShow={setModalShow}
             />
          </div>
             <span className='brand-business'><a href="#">Create a Page</a> for a celebrity, brand or business.</span>
         </div>
      </div>
    </div>
    </div>
   
  )
}

export default Login