import React, { useReducer } from 'react';
import LoaderContext from '../context/LoaderContext';
import LoaderReducer, { INITIAL_STATE } from '../reducer/LoaderReducer';

const LoaderContextProvider = ({children}) => {

    const [loaderState,loaderDispatch] = useReducer(LoaderReducer,INITIAL_STATE);
    
  return (
    <div>
        <LoaderContext.Provider value={{
           loaderState,
           loaderDispatch
        }}>
            {children}
        </LoaderContext.Provider>
               
        </div>
  )
}

export default LoaderContextProvider