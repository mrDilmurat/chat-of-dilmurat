import React from 'react';

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=60" alt="error:(" />
        <span>Just now</span>
      </div>
      <div className='messageContent'>
        <p>hello</p>
        <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="error:(" />
      </div>
    </div>

  )
}

export default Message
