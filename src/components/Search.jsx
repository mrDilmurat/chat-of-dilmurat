import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='text' placeholder='Find user'/>
      </div>
      <dir className='userChat'>
        <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Image" />
        <div className='userChatInfo'>
          <span>Jane</span>
        </div>
      </dir>
    </div>
  )
}

export default Search
