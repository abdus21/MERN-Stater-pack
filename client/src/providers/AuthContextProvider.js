import React, { useReducer } from 'react'
import AuthContext from '../context/AuthContext'
import AuthReducer, { INITIAL_STATE } from '../reducer/AuthReducer'

const AuthContextProvider = ({children}) => {

    const [state,dispach] = useReducer(AuthReducer,INITIAL_STATE)
    
  return (
    <div>
        <AuthContext.Provider value={{
            isLogged : state.isLogged,
            user : state.user,
            dispach
        }}>
            {children}
        </AuthContext.Provider>
               
        </div>
  )
}

export default AuthContextProvider