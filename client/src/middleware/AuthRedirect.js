import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import {Navigate} from 'react-router-dom'

const AuthRedirect = ({children}) => {

    const {isLogged} = useContext(AuthContext)

  return !isLogged ? children : <Navigate to='/' />

}

export default AuthRedirect