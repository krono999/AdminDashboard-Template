import React from 'react'
import './sideBar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const SideBar = () => {
  return (
    <div className='sideBar'>
      <div className='top'>
        <span className='logo'>Admin DashBoard</span>
      </div>
      <hr className='hr' />
      <div className='center'>
        <ul className='ul'>
          <p className="title">MAIN</p>
          <li className='li'>
        <DashboardIcon className='Icon'/>
            <span>
              Administration
            </span>
          </li>
          <p className="title">LISTS</p>
          <li className='li'>
            <PersonOutlineOutlinedIcon className='Icon' />
            <span>
              User
            </span>
          </li>
          <li className='li'>
          <Inventory2OutlinedIcon className='Icon'/>
            <span>
              Products
            </span>
          </li>
          <p className="title">USEFUL LINKS</p>
          <li className='li'>
          <AlignVerticalBottomIcon  className='Icon'/>
            <span>
              status
            </span>
          </li>
          <li className='li'>
          <NotificationsActiveOutlinedIcon className='Icon' />
            <span>
              notification
            </span>
          </li>
          <p className="title">SERVICE</p>
          <li className='li'>
          <SettingsSystemDaydreamOutlinedIcon className='Icon' />
            <span>
              system health
            </span>
          </li>
          <li className='li'>
          <PsychologyOutlinedIcon className='Icon' />
            <span>
              logs
            </span>
          </li>
          <li className='li'>
          <SettingsOutlinedIcon className='Icon' />
            <span>
              settings
            </span>
          </li>
          <p className="title">USER</p>
          <li className='li'>
          <AccountCircleOutlinedIcon className='Icon' />
            <span>
              profile
            </span>
          </li>
          <li className='li'>
          <LogoutOutlinedIcon className='Icon' />
            <span>
              log out
            </span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div className="colorOptions">
     
        </div>
        <div className="colorOptions">

        </div>
      </div>
    </div>
  )
}

export default SideBar