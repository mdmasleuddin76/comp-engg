import { Outlet } from "react-router-dom";
import Navigation from "./PageGroup/Home/Component/Navbar/Navigation";
import Copyright from "./PageGroup/Home/Component/Copyright";
import AboutDept from "./PageGroup/About/AboutDept";


const Layout=()=>{
    return(
      <>
        <Navigation/>
        <Outlet/>
        {/* <Copyright/> */}
        <AboutDept/>
      </>
    )
  }

  export default Layout;