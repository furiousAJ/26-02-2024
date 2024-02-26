import React, { useContext } from 'react'
import "./sellernavbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListIcon from '@mui/icons-material/List';


const Sellernavbar = () => {

 

  return (
    <div className='dashnavbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="search..." /><SearchIcon/>
        </div>
        <div className="items">
        <div className="items">
          <LanguageOutlinedIcon className='icon'/>English
           </div>
           
          <div className="item">
            <FullscreenOutlinedIcon className='icon'/>
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className='icon'/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className='icon'/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListIcon className='icon'/>
          </div>
          
     </div>
      </div>
    </div>
  )
}

export default Sellernavbar
