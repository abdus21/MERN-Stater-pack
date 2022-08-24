import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Verify = () => {
    const Navigate = useNavigate()

    const [input,setInput] = useState({code : ''});

    const handleInput = (e)=>{

        setInput((prev)=>({...prev,[e.target.name]:e.target.value}))
      }

      const handleForm = ()=>{
        axios.post(`http://localhost:5050/api/user/verify`,input).then(res=>{
            console.log(res);
            Navigate('/')
        }).catch(error=>{
            console.log(error);
        })
      }
    
  return (
    <div >
        <input onChange={handleInput} name='code' value={input.code} type="text" placeholder='verify code' />
        <button onClick={handleForm}>verufy</button>
    </div>
  )
}

export default Verify