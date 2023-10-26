import { Outlet } from "react-router-dom";
import Navigation from "./PageGroup/Home/Component/Navbar/Navigation";
import Copyright from "./PageGroup/Home/Component/Copyright";


const Layout=()=>{
    return(
      <>
        <Navigation/>
        <Outlet/>
        <Copyright/>
      </>
    )
  }

  export default Layout;