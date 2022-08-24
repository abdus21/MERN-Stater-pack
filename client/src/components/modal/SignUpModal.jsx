import React from 'react';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../modal/modal.scss';
import swal from 'sweetalert';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import {useNavigate} from 'react-router-dom';
import createToast from '../../utility/createToast';
import axios from 'axios';




const SignUpModal = (props) => {

  // use navigate
  const Navigate = useNavigate()


  const {dispach} = useContext(AuthContext)

  const [input,setInput] = useState({
    name : '',
    username : '',
    email : '',
    password : ''
  })

  // handle input fields

  const handleInput = (e)=>{

    setInput((prev)=>({...prev,[e.target.name]:e.target.value}))
  }

  // handle submit form

  const handleSubmit = async (e)=>{
    e.preventDefault();
    
   try{
    if(!input.name || !input.email || !input.username || !input.password){
      createToast("All fields are required")
     
    }else{
      await axios.post('http://localhost:5050/api/user/register',input).then(res=>{

        swal("","Registration successful","success");
        setInput((prev)=>({
          name : '',
          email : '',
          username : '',
          password : ''
        }))
        props.setModalShow(false)
        Navigate('/verify')
      
      }).catch(error=>{
        console.log(error);
      })
    }
    
   }catch(error){
    console.log(error);
   }

  }


  return (

    <>
   

<Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      dialogClassName="modal-40w"
      centered
    >
      <Modal.Header closeButton>
      <div className="modal-top">
      <h2 className='Sign-Up'> Sign Up</h2>
          <span className='quick-and-easy'>It's quick and easy.</span>
      </div>
      </Modal.Header>
      
      <Modal.Body>
       <form action="" className='sign-up-form'>
          <div className="first-sur">
            <input name='name' value={input.name} onChange={handleInput} className='first-name' placeholder='First name' type="text" />

            <input name='username' value={input.username} onChange={handleInput} className='first-name' placeholder='Surname' type="text" />

          </div>

          <input name='email' value={input.email} onChange={handleInput} type="text" className='modile-or-email' placeholder='Modile numder or email address' />

          <input name='password' value={input.password} onChange={handleInput} type="text" className='modile-or-email' placeholder='New password' />

          <span className='date-of-birth-text'>Date of birth?</span>
          <div className="select-date-of-birth">
            <select className='date' name="" id="">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7</option>
              <option value="">8</option>
              <option value="">9</option>
              <option value="">10</option>
              <option value="">11</option>
              <option value="">12</option>
              <option value="">13</option>
              <option value="">14</option>
              <option value="">15</option>
              <option value="">16</option>
              <option value="">17</option>
              <option value="">18</option>
              <option value="">19</option>
              <option value="">20</option>
              <option value="">21</option>
              <option value="">22</option>
              <option value="">23</option>
              <option value="">24</option>
              <option value="">25</option>
              <option value="">26</option>
              <option value="">27</option>
              <option value="">28</option>
              <option value="">29</option>
              <option value="">30</option>
              <option value="">31</option>
            </select>
            <select className='date' name="" id="">
              <option value="">Jen</option>
              <option value="">Fab</option>
              <option value="">Mar</option>
              <option value="">Apr</option>
              <option value="">May</option>
              <option value="">Jun</option>
              <option value="">Jul</option>
              <option value="">Aug</option>
              <option value="">Sep</option>
              <option value="">Oct</option>
              <option value="">Nov</option>
              <option value="">Dec</option>
            </select>
            <select className='date' name="" id="">
              <option value="">2022</option>
              <option value="">2021</option>
              <option value="">2020</option>
              <option value="">2019</option>
              <option value="">2018</option>
              <option value="">2017</option>
              <option value="">2016</option>
              <option value="">2015</option>
              <option value="">2014</option>
              <option value="">2013</option>
              <option value="">2012</option>
              <option value="">2011</option>
              <option value="">2010</option>
              <option value="">2009</option>
              <option value="">2009</option>
              <option value="">2008</option>
              <option value="">2007</option>
              <option value="">2006</option>
              <option value="">2005</option>
              <option value="">2004</option>
              <option value="">2003</option>
              <option value="">2002</option>
              <option value="">2001</option>
            </select>
          </div>
          <span className='gender-text'>Gender</span>
          <div className="gender">

            <div className="input-label">
              <label className='label-eliment' htmlFor="female">Female</label>
              <input type="radio" name='gender' id='female' />
            </div>

            <div className="input-label">
              <label className='label-eliment' htmlFor="male">Male</label>
              <input  type="radio" name='gender' id='male' />
            </div>

            <div className="input-label">
              <label className='label-eliment' htmlFor="Custom">Custom</label>
              <input type="radio" name='gender' id='Custom' />
            </div>
           
          </div>


          <span className='information-text'>People who use our service may have uploaded your contact information to Facebook. <a className='privacy-policy' href="#">Learn more</a>.</span>

          <span className='information-text'>By clicking Sign Up, you agree to our <a className='privacy-policy' href="#">Terms</a>,<a className='privacy-policy' href="#">Privacy Policy</a> and <a className='privacy-policy' href="#">Cookies Policy</a>. You may receive SMS notifications from us and can opt out at any time.</span>

          <button onClick={handleSubmit} className='sign-up-btn' type='submit'>Sign Up</button>

       </form>

      </Modal.Body>
    </Modal>
    </>

  )
}

export default SignUpModal