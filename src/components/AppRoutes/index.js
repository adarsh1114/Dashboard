import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "../../Pages/Dashbaord";
import Total_plays from "../../Pages/Totalplay";
import Unique_play from "../../Pages/uniqueplay";
import ChartBar from "../../Pages/Chart";

function AppRoutes() {
  return (
        
      <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="//unique_play" element={<Unique_play/>}></Route>
      <Route path="/total_plays" element={<Total_plays />}></Route>
      <Route path="/completion_rate" element={<ChartBar/>}></Route>
      
    </Routes>
    
  );
}
export default AppRoutes;