import { Space } from "antd";
import 'antd/dist/reset.css';
import "./App.css"
import PageContent from "./components/PageContent";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import SideMenu from "./components/SideMenu";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </div>
      <AppFooter />
    </div>
  );
}
export default App;
