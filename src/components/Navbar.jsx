/// Used rafce to create structure
// Used antdesign for icons and UI

import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

import icon from ''
const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
           <Avatar src={icon} size="large" />
           <Typography.Title level={2} className="logo">
                 <Link to="/">MR Crypto</Link>
           </Typography.Title>
        </div>
    </div>
  )
}

export default Navbar