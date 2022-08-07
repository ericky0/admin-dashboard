import { CalendarToday, LocationOn, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import './user.scss'

const User = () => {
  return (
    <div className='userPage'>
      <div className="titleContainer">
        <h1>Edit User</h1>
        <Link to='/newUser'>
          <button>Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="show">
          <div className="top">
            <img src="https://upload.wikimedia.org/wikipedia/pt/f/f2/Arya_stark_s7.jpg" alt="profile" />
            <div className="title">
              <span className="username">Arya Stark</span>
              <span className="userTitle">Software Engineer</span>
            </div>
          </div>
          <div className="bottom">
            <span className="title">Account Details</span>
            <div className="info">
              <PermIdentity className='icon' />
              <span className="infoTitle">aryastark56</span>
            </div>
            <div className="info">
              <CalendarToday className='icon' />
              <span className="infoTitle">15/05/2003</span>
            </div>

            <span className="title">Contact Details</span>

            <div className="info">
              <PhoneAndroid className='icon' />
              <span className="infoTitle">+55 98931-5013</span>
            </div>
            <div className="info">
              <MailOutline className='icon' />
              <span className="infoTitle">erickkhogarth@gmail.com</span>
            </div>
            <div className="info">
              <LocationOn className='icon' />
              <span className="infoTitle">Ceará | Brasil</span>
            </div>
          </div>
        </div>
        <div className="update">
          <span className="title">Edit</span>
          <form>
            <div className="left">
              <div className="updateItem">
                <label>Username</label>
                <input type="text" placeholder='aryastark56'/>
              </div>
              <div className="updateItem">
                <label>Full Name</label>
                <input type="text" placeholder='Arya Stark'/>
              </div>
              <div className="updateItem">
                <label>E-mail</label>
                <input type="text" placeholder='erickkhogarth@gmail.com'/>
              </div>
              <div className="updateItem">
                <label>Phone</label>
                <input type="text" placeholder='+55 98931-5013'/>
              </div>
              <div className="updateItem">
                <label>Address</label>
                <input type="text" placeholder='Ceará | Brasil'/>
              </div>
            </div>
            <div className="right">
              <div className="upload">
                <label htmlFor="file"><img src="https://upload.wikimedia.org/wikipedia/pt/f/f2/Arya_stark_s7.jpg" alt="profilePic"/><Publish className='publish'/></label>
                <input type="file" id="file" style={{display: 'none'}} />
              </div>
              <button>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default User