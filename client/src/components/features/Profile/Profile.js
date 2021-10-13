import 'antd/dist/antd.css';
import './Proflie.css';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContextProvider';
import { ExportOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Redirect } from 'react-router-dom';

const Profile = () => {
  const { logout } = useContext(AuthContext);
  const [state, setState] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      return;
    }
    fetch('http://localhost:8080/api/userAuth/userInfo', {
      method: 'GET',
      headers: { 'x-api-key': localStorage.getItem('token') },
    })
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const logoutAdmin = () => {
    logout();
    return <Redirect to='/login' />;
  };

  const handleMenuClick = (e) => {
    if (e.key === '3') {
      setState({ visible: false });
    }
  };

  const handleVisibleChange = (flag) => {
    setState({ visible: flag });
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key='1'>פרופיל</Menu.Item>
      <Menu.Item key='2'>מועדפים</Menu.Item>
    </Menu>
  );

  return (
    <div className='profile-container'>
      <div>
        <div className='greeting-profile-container'>
          <Avatar size={35} icon={<UserOutlined />} />
        </div>
        <div>
          <div className='profile-logout-container'>
            <div>
              <h3>
                hello: {user.firstName} {user.lastName}
              </h3>
            </div>
            <ExportOutlined
              onClick={logoutAdmin}
              className='icons'
              style={{ fontSize: '18px' }}
            />

            <Dropdown
              overlay={menu}
              onVisibleChange={handleVisibleChange}
              visible={state.visible}
              className='drop'
            >
              <a
                className='ant-dropdown-link'
                onClick={(e) => e.preventDefault()}
                style={{ fontSize: '18px', color: 'red' }}
              >
                <DownOutlined />
              </a>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>

    // <div className="profile">
    //   <Avatar size={35} icon={<UserOutlined />} />

    //   <div className="icons2">

    //   <h3>hello:</h3>
    //   <div className="icon3">
    //     <ExportOutlined onClick={logoutAdmin} className="icons" />

    //     <Dropdown
    //       overlay={menu}
    //       onVisibleChange={handleVisibleChange}
    //       visible={state.visible}
    //       className="drop"
    //     >
    //       <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
    //         <DownOutlined />
    //       </a>
    //     </Dropdown>
    //     </div>
    //   </div>

    // </div>
  );
};

export default Profile;
