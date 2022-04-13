import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';






import './navBar.scss'
const NavBar = () => {
  return (
    <div className='navBar'>
      <div className="wraper">
        <div className="search">
          <input className='input' type="text" placeholder='Search...' />
          <SearchOutlinedIcon className='Icon' />
        </div>
        <div className="items">
          <div className="item">
          <LanguageOutlinedIcon  className='Icon' />
          English
          </div>
          <div className="item">
          <DarkModeOutlinedIcon  className='Icon' />
          </div>
          <div className="item">
          <LanguageOutlinedIcon  className='Icon' />
          </div>
          <div className="item">
          <FullscreenOutlinedIcon  className='Icon' />
          </div>
          <div className="item">
          <NotificationsNoneOutlinedIcon  className='Icon' />
          <div className="counter">1</div>
          </div>
          <div className="item">
          <ChatBubbleOutlineOutlinedIcon  className='Icon' />
          <div className="counter">2</div>
          </div>
          <div className="item">
        <img src="https://i1.sndcdn.com/avatars-by7ZaKLYqHz5jbxC-JLOVMA-t240x240.jpg" alt="" className='avatar'/>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default NavBar