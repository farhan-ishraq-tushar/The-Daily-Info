import React from "react";
import moment from 'moment';
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center py-4">
      <div className="logo">
        <img className="w-[300px]" src={logo} alt="" />
      </div>

      <h2 className="text-gray-600">Journalism Without Fear or Favour</h2>

      {/* Time shown using moment package from https://momentjs.com/ */}
      <p>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
    </div>
  );
};

export default Header;
