import React, { useState } from 'react';
import logo from '../assets/logo-bookmark.svg';
import logoL from '../assets/logo-bookmark-light.svg';
import menu from '../assets/icon-hamburger.svg';
import close from '../assets/icon-close.svg';
import face from '../assets/icon-facebook.svg';
import twitter from '../assets/icon-twitter.svg';

export const Navbar = () => {

  const [menuClicked, setMenuClicked] = useState(false);

  return (
    <div id="container">
      <div 
      className={`${menuClicked ? 'block' : 'hidden'}
      flex flex-col items-center absolute w-full h-full z-[1]
      p-[3rem] space-y-[3rem] md:hidden`} 
      id="mobile-menu"
      style={{ background: 'rgba(3, 2, 53, 0.8)' }}>
        <div className="flex flex-row space-x-[14rem] sm:space-x-[19rem]" id="head">
          <div id="logo">
            <img src={logoL} alt="logoLs" className='sm:w-[12rem] sm:h-[2rem]'/>
          </div>

          <div className="flex items-center" id="close">
            <button>
              <img 
              onClick={() => setMenuClicked(false)}
              src={close} 
              alt="close" 
              className='sm:w-[1.5rem] sm:h-[1.3rem]'/>
            </button>
          </div>
        </div>

        <div id="mobile-items">
          <ul className=''>
            <li className='flex flex-col space-y-[1rem] text-white text-[1.3rem]'>
              <button className={`border-t-[1px] border-t-[#676666] border-t-solid w-[24rem] 
              font-bold p-4 duration-100 sm:w-[32rem] ${!menuClicked ? 'pointer-events-none' : ''}`}>
                FEATURES
              </button>
              <button className={`border-t-[1px] border-t-[#676666] border-t-solid w-[24rem] 
              font-bold p-4 duration-100 sm:w-[32rem] ${!menuClicked ? 'pointer-events-none' : ''}`}>
                PRICING
              </button>
              <button className={`border-t-[1px] border-t-[#676666] border-t-solid w-[24rem] p-4
              border-b-[1px] border-b-solid border-b-[#676666] font-bold duration-100 sm:w-[32rem]
              ${!menuClicked ? 'pointer-events-none' : ''}`}>
                CONTACT
              </button>
            </li>
          </ul>
        </div>

        <div className="" id="login-button">
          <button className={`text-white font-bold border-white border-solid 
          border-[2px] bg-transparent w-[24rem] h-[2.5rem] rounded-md tracking-widest
          hover:bg-white hover:text-blue-700 duration-200 hover:border-solid
          hover:border-[1px] hover:border-[cyan] sm:w-[32rem] sm:h-[2.9rem]
          ${!menuClicked ? 'pointer-events-none' : ''}`}>
            LOGIN
          </button>
        </div>

        <div className="space-x-[3rem] relative top-[21rem]" id="social">
          <button 
          className={`${!menuClicked ? 'pointer-events-none' : ''}`}>
            <img src={face} alt="face" className={`w-[2.5rem] h-[2.5rem]`}/>
          </button>

          <button 
          className={`${!menuClicked ? 'pointer-events-none' : ''}`}>
            <img src={twitter} alt="twitter" className={`w-[2.5rem] h-[2.5rem]`}/>
          </button>
        </div>
      </div>
      
      <nav className={`flex flex-row justify-between p-10 w-[30rem] m-auto
      sm:w-[40rem] md:w-[49rem] lg:w-[60rem] xl:w-[77rem] 2xl:w-[87rem] z-[1000]
      ${menuClicked ? 'opacity-0' : 'opacity-100'}`}>
        <div className="flex items-center" id="left-side">
          <img src={logo} alt="logo" className='w-[12rem] h-[2rem]'/>
        </div>

        <div className="flex-row flex space-x-10" id="right-side">
          <div className='items-center flex' id="items">
            <ul>
              <li className='text-grayishblue space-x-5 text-[.9rem] hidden md:flex'>
                <button className='hover:text-red-500 duration-100'>FEATURES</button>
                <button className='hover:text-red-500 duration-100'>PRICING</button>
                <button className='hover:text-red-500 duration-100'>CONTACT</button>
              </li>
            </ul>
          </div>

          <div className="md:hidden items-center flex" id="menu">
            <button onClick={() => setMenuClicked(true)}>
              <img src={menu} alt="menu" className='w-[1.5rem] h-[1.3rem] z-[1001] relative hover:animate-pulse'/>
            </button>
          </div>

          <div className="hidden md:block" id="button">
            <button className='bg-red-600 w-[7rem] h-[2.3rem] rounded-md
            text-white hover:bg-white hover:text-red-600 hover:border-solid
            hover:border-[1.5px] hover:border-red-600 duration-200'>
              LOGIN
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}
