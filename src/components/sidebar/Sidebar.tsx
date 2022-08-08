import './sidebar.scss'

import {   
  LineStyle, 
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebarComponent">
      <div className="wrapper">
        <div className="menu">
          <h3>Dashboard</h3>
          <ul>
            <Link to='/' className='link'>
              <li>
                <LineStyle className='icon'/>
                Home
              </li>
            </Link>
            <li>
              <Timeline className='icon' />
              Analytics
            </li>
            <li>
              <TrendingUp className='icon' />
              Sales
            </li>
          </ul>
        </div>
        <div className="menu">
          <h3>Quick Menu</h3>
          <ul>
            <Link to='/users' className='link'>
              <li>
                <PermIdentity className='icon'/>
                Users
              </li>
            </Link>
            <Link to='/products' className='link'>
              <li>
                <Storefront className='icon' />
                Products
              </li>
            </Link>
            <li>
              <AttachMoney className='icon' />
              Transactions
            </li>
            <li>
              <BarChart className='icon' />
              Reports
            </li>
          </ul>
        </div>
        <div className="menu">
          <h3>Notifications</h3>
          <ul>
            <li>
              <MailOutline className='icon'/>
              Mail
            </li>
            <li>
              <DynamicFeed className='icon' />
              Feedback
            </li>
            <li>
              <ChatBubbleOutline className='icon' />
              Messages
            </li>
          </ul>
        </div>
        <div className="menu">
          <h3>Staff</h3>
          <ul>
            <li>
              <WorkOutline className='icon'/>
              Manage
            </li>
            <li>
              <Timeline className='icon' />
              Analytics
            </li>
            <li>
              <Report className='icon' />
              Report
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar