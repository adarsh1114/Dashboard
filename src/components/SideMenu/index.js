import {
    AppstoreOutlined,
    PlayCircleOutlined,
    PlusCircleOutlined,
    BarChartOutlined,
  } from "@ant-design/icons";
  import { Menu } from "antd";
  import { useEffect, useState } from "react";
  import { useLocation, useNavigate } from "react-router-dom";
  
  function SideMenu() {
    const location = useLocation();
    const [selectedKeys, setSelectedKeys] = useState("/");
  
    useEffect(() => {
      const pathName = location.pathname;
      setSelectedKeys(pathName);
    }, [location.pathname]);
  
    const navigate = useNavigate();
    return (
      <div className="SideMenu">
        <Menu
          className="SideMenuVertical"
          mode="vertical"
          onClick={(item) => {
            //item.key
            navigate(item.key);
          }}
          selectedKeys={[selectedKeys]}
          items={[
            {
              label: "Dashbaord",
              icon: <AppstoreOutlined />,
              key: "/",
            },
            {
              label: "Unique_play",
              key: "/unique_play",
              icon: <PlayCircleOutlined/>,
            },
            {
              label: "Total_plays",
              key: "/total_plays",
              icon: <PlusCircleOutlined />,
            },
            {
              label: "Completion_rate",
              key: "/completion_rate",
              icon: <BarChartOutlined />,
            },
          ]}
        ></Menu>
      </div>
    );
  }
  export default SideMenu;