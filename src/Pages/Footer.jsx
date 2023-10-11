import {AiOutlineArrowRight} from 'react-icons/ai'
function Footer() {
  return (
    <div >
        <div className='relative '>
            <div className='footer-background blur-sm mix-blend-normal pointer-events-none'>
            </div>
        <div className='flex  items-center w-full  justify-center'>
        <div className='md:ml-[4rem] w-[45%] md:w-[30%] mt-[0.3rem]'>
        <h1 className='md:text-2xl text-3xl font-satisfy text-dodgerBlue'>Reinverse</h1>
        <p className='mt-[0.1rem] text-[0.7rem] md:text-[1rem] font-thin '>Reinverse is dedicated to helping you navigate the crypto market you can buy and sell different cryptocurrencies with our platform while also monitoring prices and market trends.
        </p>
        <p className='mt-2  mb-[1.4rem] md:mb-[1.5rem] md:text-[1.2rem] text-[0.8rem]'>
            Sign up for our newsletter to get the latest crypto news and updates
        </p>
        <span className='relative'>
        <input type="text" placeholder='Email Address'  className='md:px-5  px-0 py-1 required  md:ml-0 placeholder:pl-3   focus:border-green-400 placeholder:font-thin border rounded-md outline-none    border-green-400 bg-slate-400'/>
            <div>
            <span className='absolute right-1 top-0 text-2xl bg-1 text-green-200 cursor-pointer'><AiOutlineArrowRight/></span>
            </div>
        </span>
        </div>
        <div className='w-[32%] items-center justify-center flex flex-col  md:gap-[0.5rem] '>
        <ul className='mt-1 font-thin md:font-bold '>
            <li className='mt-2 cursor-pointer hover:text-green-400 text-sm'>Company</li>
            <li className='mt-2 cursor-pointer hover:text-green-400 text-sm'>About</li>
            <li className='mt-2 cursor-pointer hover:text-green-400 text-sm'>Careers</li>
            <li className='mt-2 cursor-pointer hover:text-green-400 text-sm'>Press</li>
            <li className='mt-2 cursor-pointer hover:text-green-400 text-sm'>Merch</li>
        </ul>
        </div>
        <div className='  md:mr-[2rem] w-[32%] items-center justify-center md:flex md:flex-col hidden'>
            <ul className=' flex flex-col gap-[0.5rem] font-thin md:text-[1rem] text-1xl text-GhostWhite'>
                <li>Privacy Policy and Terms of Service</li>
                <li>
                    Reinverse Privacy Policy
                </li>
                <li>
                    Reinverse Biometrics Privacy Policy
                </li>
                <li>
                    Reinverse Finacial Privacy Notice
                </li>
                <li>
                    Reinverse Terms of Service
                </li>
                <li>
                    Reinverse Trade Desk Terms of Service
                </li>
            </ul>
        </div>
        <div>

        </div>
         <div>

         </div>
        </div>
        </div>
    


    </div>
  )
}

export default Footer