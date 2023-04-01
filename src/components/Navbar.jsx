import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Dilmurat Chat</span>
      <div className='user'>
        <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Image" />
        <span>Jane</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
