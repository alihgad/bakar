import { Outlet } from "react-router-dom";
import NavBar from "./components/navBar/navBar";

export default function LayOut()  {
    return (
      <div>
        <NavBar /> 
        <div className="flex justify-center items-center mt-10 ">
          <Outlet />    
        </div>
      </div>
    );
  };