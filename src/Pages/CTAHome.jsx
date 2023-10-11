import { Link } from 'react-router-dom'
import {PiArrowsLeftRightFill} from 'react-icons/pi'
import {FcHeatMap} from 'react-icons/fc'
import {SlWallet} from 'react-icons/sl'
import {AiOutlineArrowRight} from 'react-icons/ai'
import circles from '../images/circles.svg'
import moonLike from '../images/moonLike.svg'
function CTAHome() {
  return (
    <div className="mt-[3rem]">
        <div  className="flex md:flex-row flex-col items-center justify-center space-y-[3rem] md:space-y-0 gap-[7%]">
        <div  className="cta-section md:w-[28%] w-[75%]  h-[16.5rem] rounded-2xl backdrop-blur-sm flex flex-col justify-center items-center">
<div className='items-center my-1 justify-center flex text-4xl border border-charcoalGray p-1 rounded-full w-[20%] '>
     <PiArrowsLeftRightFill/>
     </div>
     <h3 className='items-center flex justify-center'>Trade Desk</h3>
     <p className='flex text-[1rem]  mt-2 items-center px-3 justify-center '>
      invest in crypto anytime, anywhere
      
      with our safe, secure and easy to
      
      use online platform
     </p>
        <p  className='items-center justify-center flex mt-2'>  <Link>Get started
        <span className='ml-2 inline-block'>
        <AiOutlineArrowRight/>
        </span>
        </Link></p>
</div>
     
<div className="cta-section md:w-[28%] w-[75%] p-2 h-[16.5rem] rounded-2xl backdrop-blur-sm flex flex-col justify-center items-center">
  <div className='items-center justify-center flex text-4xl my-1 border border-charcoalGray p-1 rounded-full w-[20%]'>
    <FcHeatMap/>
  </div>
  <h3 className='items-center justify-center flex '>CoinFLip ATMS</h3>
  <p className='items-center justify-center flex text-[1rem]  px-3 mt-2 '>
    We've Thousands of ATM across Africa Where you can easily convert cash to crypto
  </p>
  <p  className='items-center justify-center flex mt-2'>  <Link>Find an ATM
        <span className='ml-2 inline-block'>
        <AiOutlineArrowRight/>
        </span>
        </Link></p>
</div>

      <div  className=" cta-section  md:w-[28%] w-[75%]  p-2 h-[16.5rem] rounded-2xl backdrop-blur-sm flex flex-col justify-center items-center">
      <div className='items-center justify-center flex text-4xl my-1 border border-charcoalGray p-1 rounded-full w-[20%]'>
           <SlWallet/>
           </div>
           <h3 className='items-center justify-center flex'>CoinFLip Wallet</h3>
           <p className='flex items-center justify-center  text-[1rem]  px-3 mt-2'>
            Store your growing investments in 
            our non-custodial wallet that gives you acccess
            to a full suite of DeFi services in one place
           </p>
           <p  className='items-center justify-center flex mt-2'>  <Link>Download the App 
        <span className='ml-2 inline-block'>
        <AiOutlineArrowRight/>
        </span>
        </Link></p>
      </div>
    </div>
    <div className='flex flex-col items-center justify-center mt-[2.5rem] w-full'>
        <h1 className='w-[80%]  text-[1rem] md:text-4xl flex items-center justify-center flex-wrap'>
            A CryptoCurrency Platform that Invest in Africa
        </h1>
            <p className='w-[80%] md:w-[60%] mt-[1.5rem] md:ml-[-3rem]'>
            <span className='font-satisfy text-2xl text-dodgerBlue'>Reinverse</span> is dedicated to transforming African economies through cryptocurrency innovation.  Join us in shaping Africa's financial future with the power of blockchain technology.
            </p>
           <div >
           <button className='btn-general rounded-xl  p-2 px-3 outline-none mt-[1.2rem] md:mt-[1.8rem]'>Get started</button>
           </div>
    </div>
   <div className=''>
   <div className='flex items-end justify-end mt-[-1rem] md:mt-[-9rem]'>
        <img src={circles} alt="" className='flex h-[30rem] w-[90%] md:w-[45%] object-cover' />
    </div>
    <div className='mt-[-16rem]  ml-7 md:ml-[7rem] md:flex hidden'>
        <img src={moonLike} alt="" className='flex h-[20rem] w-[40%] md:w-[40%] object-cover' />
    </div>
   <div className="flex flex-col  mt-[-17rem] justify-center items-center md:justify-end md:items-end">
  <h1 className=" w-[80%] md:w-[30%] md:mr-[7.5rem] font-crimson text-2xl md:text-[2.3rem] tracking-wider">
    24/7 Support to help you get started with a free consultation and customised plan
  </h1>
</div>

   </div>
   <div className='flex flex-col justify-center items-center mt-[11rem]'>
    <h1 className='flex text-3xl items-center justify-center w-[80%] font-bebas-neue md:w-[70%]'>Buy and sell with the lowest fees in the Industry</h1>
   </div>
   <div className='items-center justify-center flex flex-col'>
    <p className='items-center justify-center flex w-[80%] text-GhostWhite mt-[1.5rem] md:mt-[2rem]'>
        Buy and sell 150+ cryptocurrencies with the lowest fees in the industry. We've got you covered with our 24/7 support and advanced trading platform.
    </p>
    <div  className=' flex items-center justify-center mt-[1.5rem] md:mt-[2rem]'>
        <p className=' text-dodgerBlue text-2xl'>
            Learn more <span className='ml-2 inline-block '>
                <AiOutlineArrowRight/>
            </span>
        </p>
    </div>
   </div>
    </div>
  )
}

export default CTAHome
