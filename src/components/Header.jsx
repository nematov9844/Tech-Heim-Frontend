import { useState } from 'react';
import HeartIcon from '../assets/heart';
import LogoICon from '../assets/logo';
import Menu from '../assets/Menu';
import ShoppingIcon from '../assets/shopping';
import UserIcon from '../assets/user';
import { Link, Links } from 'react-router-dom';

export default function Header() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className='flex justify-between items-center py-4'>
      {/* Mobile Menu Button */}
      <div className='sm:hidden'>
        <button onClick={toggleDrawer}>
          <Menu />
        </button>
      </div>

      {/* Logo */}
      <div className='w-[53px] h-[63px] hidden sm:block'>
        <LogoICon />
      </div>

      {/* Mobile Title */}
      <div className='sm:hidden'>
        <h1 className='text-[#0951BE]'>Tech Heim</h1>
      </div>

      {/* Desktop Navigation */}
      <ul className='hidden sm:flex gap-4 items-center text-xl font-light'>
        <Link to={"/"}>Home</Link>
        <Link to={"/product"}>Product</Link>
        <Link to={"/blog"}>Blog</Link>
        <Link to={"/faq"}>FAQ</Link>
        <Link to={"/contact"}>Contact Us</Link>
      </ul>

      {/* Icons */}
      <div className='flex items-center'>
        <div className='hidden sm:block'>
          <HeartIcon />
        </div>
        <ShoppingIcon />
        <UserIcon />
      </div>

      {/* Drawer (Mobile Navigation) */}
      {isDrawerOpen && (
  <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end transition-all duration-300 ease-linear">
    <div
      className={`w-64 bg-white h-full shadow-lg p-4 transform transition-all ${
        isDrawerOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <button
        onClick={toggleDrawer}
        className="mb-4 text-gray-500 hover:text-gray-900"
      >
        Close
      </button>
      <ul className="flex flex-col gap-4 text-lg font-light">
        <Link to={"/home"}>Home</Link>
        <Link to={"/product"}>Product</Link>
        <Link to={"/blog"}>Blog</Link>
        <Link to={"/faq"}>FAQ</Link>
        <Link to={"/contact"}>Contact Us</Link>
      </ul>
    </div>
  </div>
)}

    </header>
  );
}
