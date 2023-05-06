import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import { useEffect, useState } from "react";


function AppHeader() {
  

  return (
    <div className="AppHeader">
      <Image
        width={60}
        src="https://www.refinery29.com/images/10544766.jpg"
      ></Image>
      <Typography.Title>Song's Dashboard</Typography.Title>
      <Space>
        <Badge t>
          <MailOutlined
            
          />
        </Badge>
        <Badge >
          <BellFilled
            
            
          />
        </Badge>
      </Space>
      <Drawer
       
      >
        <List
          
        ></List>
      </Drawer>
      
    </div>
  );
}
export default AppHeader;