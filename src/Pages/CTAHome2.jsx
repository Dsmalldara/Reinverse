import VennCircle from '../Images/vennCircle.svg'
import Case from '../Images/case.svg'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { LuArrowBigRightDash } from 'react-icons/lu';
function CTAHome2() {
  return (
<div className='mb-[3rem]'>
    <div  className='flex flex-col md:flex-row items-center justify-evenly '>
  <div className='relative  md:ml-[2rem]'>
  <div className='absolute w-full top-0 left-0 md:mt-[-8rem]  md:ml-[5rem] pointer-events-none' >
     <img src={VennCircle} alt=""  className=' md:w-[90%] h-[70%] '/>
 </div>
    <div  className='md:w-[70%] w-[92%] md:ml-[3rem] md:mt-[2rem] ml-[1rem] z-30 items-center justify-center '>
    <h1  className=' leading-7 md:leading-[4rem] text-2xl flex md:text-4xl font-rajdhani'>
         Take your First Step into Safe Secure Crypto Investing
     </h1>
     <p className='mt-[2rem] md:w-full w-[88%] flex items-center justify-center'>
     Dive into the fascinating world of cryptocurrency 
  Explore a diverse range of digital assets, stay updated on market trends, and make well-informed decisions. 
     </p>
   <div className='ml-0 md:ml-[-4rem] pt-[2.3rem] mb-[2rem] md:mb-0 z-70 md:mt-0 mt-[0rem] flex items-center justify-center'>
   <button className='btn-general rounded-[0.5rem]  p-2 px-3 outline-none  '>Get started</button>
   </div>
    </div>
  </div>
 <div className='relative'>
 <div className='md:mr-[2rem]'>
        {/* <img src={bag} alt="" /> */}
        <div className=' items-center justify-center flex w-full'>
            <img src={Case} className=' w-[85%]  md:w-[50rem]' alt="" />
        </div>
  </div>
 
 </div>
    </div>
     <div className='items-center justify-center flex flex-col md:mt-[4rem] '>
            <h1 className=' text-3xl md:text-5xl '>Recieve Transmissions</h1>
            <p className='mt-[0.5rem] md:mt-[1.3rem] font-thin'>
                Unsubscribe at anytime. <span className=' text-creamyWhite font-bold cursor-pointer'> Privacy Policy <span className='inline-block text-2xl text-green-300 rotate-[310deg]'><LuArrowBigRightDash/></span> </span>
            </p>
            <div className='flex items-center justify-center mt-[2rem] md:mt-[2.4rem] relative'>
                <input type="text" placeholder='Email Address'  className='px-5 py-2 required   focus:border-green-400 placeholder:font-thin border rounded-md outline-none    border-green-400 bg'/>
           <span className='absolute right-1 top-2 text-2xl bg-1 text-green-200 cursor-pointer'><AiOutlineArrowRight/></span>
            </div>
     </div>
    </div>
  )
}

export default CTAHome2

