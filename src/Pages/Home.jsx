import cover from '../Images/crypt1.png'
import blur1 from '../Images/crypt2.png'
import  bg2 from '../Images/bg2.png'
import  coin1 from '../Images/coin1.svg'
import  coin3 from '../Images/coin3.svg'
import  coin2 from '../Images/coin2.svg'
import star1 from '../Images/star1.svg'
import CTAHome from './CTAHome'
import Crypto from './Crypto'
import CTAHome2 from './CTAHome2'
import Footer from './Footer'
function Home() {
  return (
    <div>
    <div className='relative md:w-full w-[90%]  '>
        <div className='absolute top-[1rem] md:top-[-18px] items-center justify-center md:left-[32rem] left-[12rem]'>
            <img src={bg2} alt="" className='img-1 md:w-[12rem] w-[10rem] h-[10rem] md:h-[15rem] blur-[0.2px] ' />
        </div>
        <div className='absolute top-[1rem]  right-[7rem] md:right-[17rem]'>
            <img src={coin2} alt="" className='w-[3rem] h-[3rem] blur-[0.2px] hover:animate-spin  ' />
        </div>
        <div className='absolute top-[6rem]  left-[12rem]'>
            <img src={coin3} alt="" className='w-[3rem] h-[3rem] blur-[0.2px]  ' />
        </div>
        <div className='absolute  top-[5.7rem] right-[2rem] md:right-[10rem] flex md:animate-none '>
            <img src={star1} alt="" />
        </div>
         <div className='absolute md:top-[14.4rem] top-[13.1rem] left-[1rem]  md:left-[9.2rem]'>
                <img src={blur1} alt="" className='w-[6rem] h-[2.7rem] md:h-[5rem] rounded-[100%]'/>      </div>
         <div className='absolute top-[0.1rem] items-center justify-center '>
         <img src={coin1} alt="" />
         </div>
         <div className='absolute top-[8rem] md:pl-[10rem] ml-[0.7rem]'>
         <h1 className='md:text-[2.5rem]  text-[2rem] font-bold text-whiteSmoke'>
            We make Crypto
            <br />
                <span className='ml-3 inline-block md:mt-5 mt-3'>
               Clear and simple
                </span>
            </h1>
         </div>
     <div className=' absolute md:top-[8rem] top-[13rem] right-[1rem] md:right-[12rem] flex  animate-spin'>
        <img src={cover} alt=""  className='w-[4rem] h-[4rem] md:h-[6rem] md:w-[6rem] bg-GhostWhite rounded-full'/>
     </div>
     <div className='md:pt-[16rem] text-[0.8rem] pt-[19rem]  md:pl-[14rem] ml-[2rem] '>
        <p>Buy, sell and track different Cryptocurrencies with our platform
            <br />
            Reinverse is dedicated to helping you navigate the crypto market
        </p>
     </div>
        <div className='items-center justify-center flex pt-[1rem] md:pt-[1rem] '>
            <button className='btn-general rounded-[0.5rem]  p-2 px-3 outline-none  '>Get started</button>
        </div>
        </div>
        <div>
            <CTAHome/>
            <Crypto/>
            <CTAHome2/>
            <Footer/>
            </div>
    </div>
  )
}

export default Home;