import React from 'react';
import Cam from '../img/video-chat.png';
import User from '../img/icon-avatar.png';
import More from '../img/more.svg';
import Messages from './Messages';
import Input from './Input';


const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={User} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
        <Messages/>
        <Input/>
    </div>
  )
}

export default Chat
