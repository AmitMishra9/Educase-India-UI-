import { useLocation } from 'react-router';
import { FaAngleDown,  FaUpload, FaSignOutAlt, FaPhone, FaEnvelope } from 'react-icons/fa'; // Import React Icons
import "./User.css";
import  userimg from  '../img/user.jpg';
import upload from '../img/upload.jpg';
import {Link} from "react-router-dom";



function User() {
  const location = useLocation();
  const userData = location.state && location.state.userData;

  return (
    <div className='user-section'>
    <div className='heading'>
          <h3>Account Settings</h3>
          <div className='logout'>
            <Link className='link' to='/'><FaSignOutAlt className='logout-icon' /></Link>
          </div>
        </div>
    

      {userData ? (
        <>
          <div className='profile-info'>
            <div className='image'>
            <img className='userimg' src={userimg} alt={userData.fullName} />
            <img className='upload-image' src={upload} alt="upload image" />
            </div>
            <div className='data'>
            <p>{userData.fullName}</p>
            <div className='icon-info'>
              <span className='info-icon'/>
              <p><FaPhone className='icon'/> {userData.phoneNumber}</p>
            </div>
            <div className='icon-info'>
              <span className='info-icon'/>
              <p><FaEnvelope className='icon'/> {userData.email}</p>
            </div>
          </div>
          </div>
          <div className='description'>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder typeface without relying on meaningful content. </p>
          </div>
        </>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
}

export default User;
