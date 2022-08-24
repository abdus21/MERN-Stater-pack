import React from 'react';
import loader from '../../assets/image/loader.svg';
import './FullScreenLoader.css'

const FullScreenLoader = () => {
  return (
    <div className='ProcessingDiv'>
        <div className="center-screen">
            <img className='loader-size' src={loader} alt="" />
        </div>
        
    </div>
  )
}

export default FullScreenLoader