import React from "react";
// import Footer from "./Footer";
import { Outlet} from "react-router-dom";

function Body(){
    return(
        <>
          <Outlet></Outlet>
          {/* <Footer></Footer> */}
        </>
    )
}


export default Body;