import {
    PlusCircleOutlined,
    ShoppingCartOutlined,
    PlayCircleOutlined,
    BarChartOutlined
  } from "@ant-design/icons";
import {Card,Space,Statistic,Table,Typography} from "antd";
import "./Dashboard.css"
import React, { useState } from "react";
import RecentPlay from "../List";
import ChartBar from "../Chart"


function Dashbaord(props) {
  
    return (
        <div>
         <Typography.Title level={4}>Dashbaord</Typography.Title>
        <Space direction="horizontal">
        <DashboardCard
          icon={
            <PlayCircleOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Unique_play"}
          value={0}
          
        />
         <DashboardCard
          icon={
            <PlusCircleOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Total_plays"}
        
          
          value={0}
        />
         <DashboardCard
          icon={
            <BarChartOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Completion_rate"}
          value={0}
        />
          </Space>
          <Space direction="horizontal">
          <RecentPlay/>
          <ChartBar/>
          </Space>
        </div>
    );
}

function DashboardCard({ title, value, icon }) {
  const [count, setCount] = useState(5);

    
    const incrementCount = () => {
     
      setCount(count + 1);
    };
    return (
      <Card>
        <Space direction="horizontal">
          {icon}
          <Statistic title={title} value={count} />
          <button onClick={incrementCount}>click </button>
        </Space>
      </Card>
    );
  }
  
export default Dashbaord;