import React from 'react';
import { Link } from 'react-scroll'
import Taggol from './Taggol';

const Navbar = () => {
  const NavbarMenu = <>
    <li><Link spy={true} to='/' smooth={true} activeClass='activeClass'>Home</Link></li>
    <li><Link spy={true} to='/about' smooth={true} activeClass='activeClass'>about</Link></li>
    
    <li><Link to='skill'>services</Link></li>
    <li><Link to='service'>About</Link></li>
  </>
  return (
    <div class="navbar bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold  uppercase">
      <div class="navbar-center">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {NavbarMenu}

          </ul>
        </div>
        <a class="btn btn-ghost normal-case text-xl">portfolio</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          {NavbarMenu}
        </ul>
      </div>
      <div class="navbar-end">
        <Taggol />
      </div>
    </div>
  );
};

export default Navbar;