import React from "react";
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#">
            <img src={Logo} />
          </a>

          {/* button */}
          <button className="btn btn-sm">Бо ман кор кунед</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
