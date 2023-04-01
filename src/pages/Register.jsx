import React from 'react';
import Add from '../img/icon-avatar.png'

const Register = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='login'>Dilmurat Chat</span>
        <span className='title'>Register</span>
        <form>
          <input type="text" placeholder='your name' />
          <input type="email" placeholder='email' />
          <input type="password" placeholder='password' />
          <input style={{display: 'none'}} type="file" id='file' />
          <label htmlFor="file">
            <img className='add-img' src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sing up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  )
}

export default Register
