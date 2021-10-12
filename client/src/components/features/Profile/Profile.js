import "antd/dist/antd.css";
import "./Proflie.css";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContextProvider";
import { ExportOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const Profile = () => {
  const { logout } = useContext(AuthContext);
  const [state, setState] = useState([]);

  const handleMenuClick = (e) => {
    if (e.key === "3") {
      setState({ visible: false });
    }
  };

  const handleVisibleChange = (flag) => {
    setState({ visible: flag });
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">פרופיל</Menu.Item>
      <Menu.Item key="2">מועדפים</Menu.Item>
    </Menu>
  );

  return (
    <div>
      <div className="profile">
        <Avatar size={35} icon={<UserOutlined />} />
        <p>hello:</p>
        <ExportOutlined onClick={logout} />

        
          <Dropdown
            overlay={menu}
            onVisibleChange={handleVisibleChange}
            visible={state.visible}
            className="icons"
          >
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <DownOutlined />
            </a>
          </Dropdown>
        

      </div>
    </div>
  );
};

export default Profile;
