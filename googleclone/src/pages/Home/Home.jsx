import React from 'react'
import './Home.css';
import {Link} from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/material/Avatar';
import Search from '../../components/Search/Search';


const Home = () => {
  return (
    <div className='home'>
      {/* Header */}
      <div className='home-header'>
        {/* Header Left */}
        <div className="header-left">
          {/* About Link */}
          <Link to='/about'>About</Link>
          {/* Store Link */}
          <Link to='/store'>Store</Link>
        </div>
        {/* Header Right */}
        <div className="header-right">
          {/* Gmail Link */}
          <Link to='/gmail'>Gmail</Link>
          {/* Images Link */}
          <Link to='/images'>Images</Link>
          {/* Icon */}
          <AppsIcon/>
          {/* Avatar */}
          <Avatar/>
        </div>
      </div>
      {/* Body */}
      <div className="home-body">
        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google-Logo" />
        <div className="inputContainer">
          <Search/>
        </div>
      </div>
    </div>
  )
}

export default Home
