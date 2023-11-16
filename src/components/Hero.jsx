import React, { useState } from 'react';
import laptop from '../assets/illustration-hero.svg';
import Data from '../components/Paragraphs.json';
import bookmark from '../assets/illustration-features-tab-1.svg';
import search from '../assets/illustration-features-tab-2.svg';
import share from '../assets/illustration-features-tab-3.svg';
import DataExtension from '../components/Faq.json';
import chrome from '../assets/logo-chrome.svg';
import firefox from '../assets/logo-firefox.svg';
import opera from '../assets/logo-opera.svg';
import dots from '../assets/bg-dots.svg';
import arrow from '../assets/icon-arrow.svg';
import error from '../assets/icon-error.svg';

export const Hero = () => {

  const [clickedOption, setClickedOption] = useState(1);
  const [questionIndex, setQuestionIndex] = useState(null);
  const [input, setInput] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);

  const checkValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    setIsValid(emailRegex.test(input));

    setIsEmpty(input.trim() === '');
  }

  const tabImages = [bookmark, search, share];
  
  const toggleClick = (index) => {
    setClickedOption(index - 1)
  }

  const questionClick = (i) => {
    setQuestionIndex(i)
  }
  
  const imageText = clickedOption !== null && Data.map(data => {
    const selectedOption = data.text[clickedOption - 1];
    return(
      <div key={data.id}>
        <h1 className='font-bold xl:text-[2.5rem]'>
          {selectedOption ? selectedOption.title : null}
        </h1>

        <p className='text-grayishblue leading-loose lg:w-[30rem] m-auto text-center items-center
        lg:text-start lg:pb-6 xl:text-[1.1rem]'>
          {selectedOption ? selectedOption.p : null}
        </p>

        <button className='bg-softblue w-[7rem] h-[2.7rem] rounded-md text-white font-bold
        hidden lg:block'>
          More Info
        </button>
      </div>
    )
  })

  const options = Data.map(data => {
    return(data.text.map(info => {
      return(
        <>
        <hr className='w-[30.2rem] lg:opacity-0'/>
        <button 
        onClick={() => setClickedOption(info.id)}
        key={info.id}
        className='focus:border-b-solid focus:border-b-[3px] focus:border-b-red-600
        pb-3 font-bold text-grayishblue focus:text-[#575656] w-[10rem] hover:text-softred
        duration-100 text-[1.05rem] md:text-[1.1rem] md:w-[15rem] lg:pb-2'>
          {info.option}
        </button>
        <hr className='w-[30.2rem] lg:mt-4 lg:relative lg:top-[1rem] lg:left-[-1.5rem] lg:w-[27rem]'/>
        </>
      )
    }))
  })


  const questions = DataExtension.map(data => {
    const selectedText = data.extensions[questionIndex];

    return(data.extensions.map(info => {
      return(
        <>
        <div className={`items-end relative left-[24rem] top-[3.2rem] flex sm:left-[29rem]
        ${info.id == questionIndex ? '' : ''} md:left-[37rem] md:top-[3.2rem] 2xl:top-[3.2rem]
        lg:top-[3.3rem] sm:top-[3.2rem]`} id="arrow">
            <button 
            key={info.id}
            onClick={() => setQuestionIndex(info.id)}
            className={`${questionIndex === info.id ? 'rotate-180' : ''} duration-150`}>
              <img src={arrow} alt="arrow"/>
            </button>
        </div>

        <div 
        key={info.id}
        onClick={() => setQuestionIndex(info.id)}
        className='border-b-solid border-b-[1px] border-b-[#d5d4d4] flex flex-row
        justify-between pb-3 hover:cursor-pointer' id='qBorder'>
          <div className="w-[25rem] text-start" id="question">
            <h1 className='text-[1.2rem] font-bold opacity-[85%] relative top-[1rem] xl:text-[1.4rem]
            hover:text-softred duration-75'>
              {info.question}
            </h1>

            <div className="pt-[2rem]" id="answer">
              <p className='leading-loose xl:text-[1.1rem]'>
                {info.id == questionIndex ? selectedText.text : null}
              </p>
            </div>
          </div>
        </div>
        </>
      )
    }))
  })

    return (
    <div className="relative top-[5rem] pb-[10rem] lg:top-[3rem]" id="container">
      <div id="content">
        <div 
        className="flex flex-col items-center justify-center lg:flex-row-reverse m-auto" 
        id="manager-section">
          <div id="laptop">
            <img src={laptop} alt="laptop"  className=''/>

          </div>

          <div 
          className="items-center flex flex-col p-10 px-[4rem] text-center lg:text-start lg:items-start
          pt-2 lg:w-[44rem] xl:w-[40rem]" 
          id="text-wrapper">
            <h1 className='font-bold xl:text-[2.5rem]'>
              A Simple Bookmark Manager
            </h1>

            <p className='text-grayishblue leading-loose xl:text-[1.1rem]'>
              A clean and simple interface to organize your favourite websites. Open a new browser
              tab and see your sites load instantly. Try it for free.
            </p>

            <div className="flex flex-row space-x-5 top-[2rem] relative" id="buttons">
              <button className='text-white font-bold bg-softblue
              w-[11rem] h-[3rem] rounded-md hover:bg-transparent hover:text-softblue
              hover:border-solid hover:border-[2px] hover:border-softblue duration-200
              hover:animate-pulse'>
                Get it on Chrome
              </button>
              
              <button className='bg-white shadow-xl font-bold w-[11rem] h-[3rem] rounded-md
              hover:text-grayishblue hover:border-solid hover:border-[2px] hover:border-grayishblue
              hover:bg-transparent hover:animation-pulse duration-200'>
                Get it on Firefox
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center text-center relative top-[5rem]" id="features-section">
          <div className="p-[4rem]" id="text-wrapper">
            <h1 className='font-bold xl:text-[2.5rem]'>Features</h1>

            <p className='text-grayishblue leading-loose w-[23rem] sm:w-[35rem] lg:w-[33rem]
            xl:text-[1.1rem]'>
              Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between
              your devices so you can access them on the go.
            </p>
          </div>

          <div className="flex flex-col space-y-2 items-center lg:flex-row lg:space-x-[-19rem]
          lg:h-[2.7rem]" id="pages">
            {options}
          </div>

          <div className="flex flex-col items-center mt-[10rem] lg:flex-row lg:w-[63rem] m-auto lg:p-7
          lg:mt-[6rem] xl:w-[76rem] xl:mt-[8rem] 2xl:w-[75rem] 2xl:mt-[8rem] sm:m-0 sm:pt-[5rem]"
          id="under-options-content">
            <div id="image">
              <img src={tabImages[clickedOption - 1]} alt="img" className='w-[20rem] sm:w-[28rem]
              relative left-[.5rem] lg:left-0 lg:w-[50rem] xl:left-0 2xl:left-[-2.5rem]'/>
            </div>
          
            <div className="p-[3.5rem] text-center relative top-[2rem] w-[30rem] sm:w-[40rem] m-auto
            lg:items-start lg:text-start lg:top-0 lg:w-[37rem] lg:left-[3rem] xl:left-[4rem]
            2xl:left-[7rem] md:w-[43rem]" id="image-text">
              {imageText}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center relative top-[9rem] 2xl:top-[11rem]" id="extensions-section">
          <div className="text-center w-[22rem] sm:w-[35rem]" id="heeader-text">
            <h1 className='font-bold xl:text-[2.5rem]'>Download the extension</h1>

            <p className='text-grayishblue sm:w-[33rem] md:w-[36rem] m-auto xl:text-[1.1rem] leading-loose'>
              We've got more browsers in the pipeline. Please do let us know if you've got
              a favourite you'd like us to prioritize
            </p>
          </div>

          <div className="flex flex-col space-y-[6rem] pt-[5rem] lg:flex-row lg:relative lg:top-[-4rem]" id="extensions">
            <div className="flex flex-col items-center justify-center space-y-[5rem] lg:flex-row
            lg:space-y-0 lg:space-x-[1rem] xl:space-x-[3rem] 2xl:space-x-[6rem]" id="extension-table">
              <div className="items-center flex flex-col space-y-[1rem] shadow-md rounded-xl
              py-5 px-5" 
              id="chrome">
                <div className="" id="image">
                  <img src={chrome} alt="chrome" />
                </div>

                <div className="text-center" id="text-wrapper">
                  <h1 className='font-bold text-[1.7rem]'>Add to chrome</h1>

                  <p className='text-[1.16rem] text-grayishblue'>Minimum version 62</p>
                </div>

                <div className="pt-6 pb-3" id="dots1">
                  <img src={dots} alt="dots" />
                </div>

                <div className="" id="button">
                  <button className='text-white font-bold bg-softblue w-[16rem] h-[3.5rem] rounded-lg
                  hover:bg-transparent hover:border-solid hover:border-[2px] hover:border-softblue
                  hover:text-softblue hover:animate-pulse duration-300'>
                    Add & Install extension
                  </button>
                </div>
              </div>

              <div className="items-center flex flex-col space-y-[1rem] shadow-md rounded-xl
              py-5 px-5 lg:pt-[5rem]" id="firefox">
                <div className="" id="image">
                  <img src={firefox} alt="firefox" />
                </div>

                <div className="text-center" id="text-wrapper">
                  <h1 className='font-bold text-[1.7rem]'>Add to Firefox</h1>

                  <p className='text-[1.16rem] text-grayishblue'>Minimum version 55</p>
                </div>

                <div className="pt-6 pb-3" id="dots1">
                  <img src={dots} alt="dots2" />
                </div>

                <div className="" id="button">
                  <button className='text-white font-bold bg-softblue w-[16rem] h-[3.5rem] rounded-lg
                  hover:bg-transparent hover:border-solid hover:border-[2px] hover:border-softblue
                  hover:text-softblue hover:animate-pulse duration-300'>
                    Add & Install extension
                  </button>
                </div>
              </div>

              <div className="items-center flex flex-col space-y-[1rem] shadow-md rounded-xl
              py-5 px-5 lg:pt-[10rem]" id="opera">
                <div className="" id="image">
                  <img src={opera} alt="opera" />
                </div>

                <div className="text-center" id="text-wrapper">
                  <h1 className='font-bold text-[1.7rem]'>Add to Opera</h1>

                  <p className='text-[1.16rem] text-grayishblue'>Minimum version 46</p>
                </div>

                <div className="pt-6 pb-3" id="dots3">
                  <img src={dots} alt="dots" />
                </div>

                <div className="" id="button">
                  <button className='text-white font-bold bg-softblue w-[16rem] h-[3.5rem] rounded-lg
                  hover:bg-transparent hover:border-solid hover:border-[2px] hover:border-softblue
                  hover:text-softblue hover:animate-pulse duration-300'>
                    Add & Install extension
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 relative top-[8rem] lg:top-[1rem] xl:top-[-1rem] 2xl:top-[1rem]" id="faq-section">
            <div className="w-[24rem] text-center m-auto sm:w-[32rem] items-center md:w-[36rem]" id="text-wrapper-faq">
              <h1 className='font-bold xl:text-[2.5rem]'>Frequently Asked Questions</h1>

              <p className='text-grayishblue leading-loose xl:text-[1.1rem]'>
                Here are some of our FAQs. If you have any other questions you'd like answered
                please feel free to email us.
              </p>
            </div>

            <hr className='relative top-[5rem] text-[black] font-bold'/>
            <div className='pt-[4rem] w-[22.5rem] sm:w-[30rem] m-auto md:w-[38rem]' id="question-section">
              {questions}
            </div>

            <div className="flex items-center flex-col pt-[3rem]" id="faq-button">
              <button className='bg-softblue w-[7.5rem] h-[3rem] text-white rounded-md font-bold'>
                More Info
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center bg-softblue relative top-[15.5rem] py-[4rem] w-full
          " id="form-section">
            <div className="text-center p-5 px-[4rem] text-[.8rem] w-[30rem] md:text-[1rem] md:w-[35rem]
            lg:w-[37rem] xl:text-[1.2rem]" id="text-wrapper-form">
              <h4 className='uppercase text-white tracking-[.25rem] font-bold'>35.000+ already joined</h4>

              <h1 className='text-white font-bold'>Stay up-to-date with what we're doing</h1>
            </div>

            <div className="flex flex-col space-y-[1.5rem] lg:flex-row lg:space-y-0 lg:space-x-[1rem] 2xl:pb-[2.5rem]" id="input">
              <div className="flex flex-col z-[1000]" id="input-table">
                <div className="flex flex-row" id="input-field">
                  <input 
                  type="text" 
                  onBlur={checkValid}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder='Enter your email address' 
                  className={`text-black p-4 w-[19rem] md:w-[24rem] lg:w-[17rem] h-[3rem] rounded-md xl:w-[21rem]
                  focus:outline-none font-bold ${!isValid || isEmpty ? 'border-red-600 border-[3px] border-solid' : 'border-none'}`}/>

                  <div className={`${!isValid || isEmpty ? 'block' : 'hidden'} items-center flex ml-[-3rem] md:ml-[-2.5rem]`} id="error-img">
                    <img src={error} alt="error" className='w-[1.7rem]'/>
                  </div>
                </div>

                <div className={`bg-softred ${!isValid || isEmpty ? 'block' : 'hidden'} rounded-md relative top-[-.4rem] z-[0] xl:top-[-.45rem]`} id="not-valid-message">
                  <p className='text-white font-bold text-[.8rem] tracking-widest items-center flex pl-4 h-[2rem] lg:h-[1.7rem] lg:w-[17rem]
                  lg:text-[.75rem] xl:w-[21rem]'>
                    Whoops, make sure it's an email
                  </p>
                </div>
              </div>

              <button 
              className='bg-softred w-[19rem] md:w-[24rem] h-[3rem] text-white font-bold rounded-md
              lg:w-[9rem] hover:bg-white hover:text-softred duration-100 hover:border-solid hover:border-[1.5px]
              hover:border-softred'>
                Contact Us
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
