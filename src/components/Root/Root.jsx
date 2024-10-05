import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Root = () => {
  return (
    <div className="m-20 space-y-10">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
