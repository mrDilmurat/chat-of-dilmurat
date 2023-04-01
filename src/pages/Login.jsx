import React from 'react';
import Add from '../img/icon-avatar.png'

const Login = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='login'>Dilmurat Chat</span>
        <span className='title'>Register</span>
        <form>
          <input type="email" placeholder='email' />
          <input type="password" placeholder='password' />
          
          <button>Sing in</button>
        </form>
        <p>You don't have an account? Register</p>
      </div>
    </div>
  )
}

export default Login
