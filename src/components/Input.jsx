import React from 'react';
import Attach from '../img/attach.svg';
import AddImg from '../img/img.svg';

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type something...' />
      <div className='send'>
        <img src={Attach} alt="" />
        <input type="file" style={{display: 'none'}} id='file' />
        <label htmlFor="file">
          <img src={AddImg} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input
