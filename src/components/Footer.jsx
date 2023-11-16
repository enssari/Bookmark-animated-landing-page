import React, { useState } from 'react';
import logo from '../assets/logo-bookmark-light.svg';
import face from '../assets/icon-facebook.svg';
import twit from '../assets/icon-twitter.svg';

export const Footer = () => {

  return (
    <div className='w-full' id='container'>
        <div className="flex flex-col lg:flex-row lg:justify-between items-center relative 
        top-[19rem] bg-verydarkblue p-10 space-y-10 md:space-y-[3.5rem] w-full lg:top-[17rem]
        lg:space-y-0 m-auto xl:space-x-[35rem] 2xl:space-x-[55rem]" id="content-table">
            <div className="lg:flex lg:flex-row lg:space-x-[2.5rem] m-auto xl:space-x-[3rem]" id="left-side">
                <div className="" id="logo">
                    <img src={logo} alt="logo" className='md:w-[12rem]'/>
                </div>

                <div className="text-grayishblue flex flex-col space-y-7 pt-[2rem] font-bold
                md:text-[1.1rem] lg:flex-row lg:space-y-0 lg:space-x-[2.5rem] lg:text-[1rem] 
                lg:mt-[-1.9rem]" id="items">
                    <button className='hover:text-softred'>FEATURES</button>
                    <button className='hover:text-softred'>PRICING</button>
                    <button className='hover:text-softred'>CONTACT</button>
                </div>
            </div>

            <div className="flex flex-row space-x-6 items-center lg:space-x-8 m-auto" id="right-side">
                <div id="face">
                    <button className='hover:animate-bounce'>
                        <img src={face} alt="face"  className={`md:w-[1.9rem] hover:animate-ping`}/>
                    </button>
                </div>

                <div id="twit">
                    <button className='hover:animate-bounce'>
                        <img src={twit} alt="twit"  className={`md:w-[1.9rem] hover:border-solid hover:animate-ping`}/>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
