import React from "react";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants/index";
import { hamburger } from "../assets/icons";
const Navbar = () => {
  return (
    <header className="padding-x py-8 z-10 w-full">
      <nav className="flex justify-between items-center ">
        <a href="/">
          <img src={headerLogo} width={129} height={29} alt="logo" />
        </a>
        <ul className="font-montserrat flex justify-center items-center gap-16 max-lg:hidden text-lg">
          {navLinks.map((item) => (
           <li key={item.label}>
              <a href={item.href} className="text-lg text-black leading-normal font-montserrat">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
