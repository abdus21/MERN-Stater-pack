
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthenticetUser from './middleware/AuthenticetUser';
import AuthRedirect from './middleware/AuthRedirect';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Cookies from 'js-cookie';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import AuthContext from './context/AuthContext';
import LoadingBar from 'react-top-loading-bar'
import LoaderContext from './context/LoaderContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import createToast from './utility/createToast';
import Verify from './components/Verufy/Verify';
import RecoverPassword from './pages/RecoverPassword/RecoverPassword';
import ResetPassword from './pages/ResetPassword/ResetPassword';



function App() {

  const {dispach} = useContext(AuthContext)

  let token = Cookies.get('token');

  // check logged in user

  useEffect(()=>{

    try{
      axios.get('http://localhost:5050/api/user/me',{
        headers : {
          "Authorization" : `Bearer ${token}`
        }
      }) 
      .then(res=>{

        dispach({type : 'sign_up',payload: res.data});

      }).catch(error=>{
        dispach({type : 'log_out'});
      })

    }catch(error){

    }
  },[token]);

  const {loaderState,loaderDispatch} = useContext(LoaderContext)
  
  return (
      <>
       <LoadingBar
        color='#f11946'
        progress={loaderState}
        onLoaderFinished={() => loaderDispatch({type : 'loader_end'})}
      />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
       <Routes>
          <Route path='/' element={<AuthenticetUser> <Home /></AuthenticetUser>}/>
          <Route path='/login' element={<AuthRedirect><Login /></AuthRedirect>}/>
          <Route path='/verify' element={<AuthRedirect><Verify /></AuthRedirect>}/>
          <Route path='/login/recover-password' element={<RecoverPassword/>}/>
          <Route path='/login/reset-password/url/:token' element={<ResetPassword/>}/>
        </Routes>
      </>
  
  );
}

export default App;
