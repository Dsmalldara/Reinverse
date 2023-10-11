import { useContext } from 'react'
import { useState } from 'react';
import { TrendingContext } from '../Components/TrendingContext'
import { cryptoContext } from '../Components/CryptoContext';
import CryptoModal from './CryptoModal';
function Trending() {
  const [isOpen, setIsOpen] = useState(false);
const {trendingCoins} = useContext(TrendingContext)
const {coinData,setCoinId,  setSelectedCryptoId,} = useContext(cryptoContext)
const openModal = (cryptoId) => {  
  setSelectedCryptoId(cryptoId); // help to set a new coin using the id
    setCoinId(cryptoId); // set the coin id to the selected coin id
    setIsOpen(true); // open the modal
};
    // help to set a new coin using the id so it can be used to fetch the data
    const closeModal = () => { 
      setSelectedCryptoId(null);
      setIsOpen(false);
    };
        // console.log(selectedCrypto)
  return (
    <div className='flex flex-col  mb-8 items-center  justify-center  w-[100%] mt-7  h-full'>
      <div className=' m-auto mt-[1rem] light-brown-gradient'>
      <h1 className='flex font-sans text-[1.7rem]  md:text-[4rem]'>
        Swift BlockChain Revolution
      </h1>
      </div>
        <div className='p-gradient flex items-center justify-center w-[70%] mt-[1.2rem] md:mt-[2rem]  m-auto font-serif'>
      Swift BlockChain Revolution - Pioneering a New Era in Cryptocurrency, Decentralization, and Financial Innovation.
       Join Us to Explore Limitless Possibilities and Empower Your Digital Future.
      </div> 
    <div className='flex flex-wrap justify-evenly  w-[90%] mt-[3rem] mb-[2.6rem]' >
      {
        trendingCoins ? trendingCoins.map((coin)=>{
          return(
            <div key={coin?.item.id} onClick={()=>{openModal(coin.item.id)}}   className='cursor-pointer flex flex-col items-center shadow-lg justify-center w-[4.4rem] md:w-[5.9rem] h-[3rem]  md:h-[4rem] rounded-lg bg-[#272424] backdrop-blur-md opacity-50  m-2'>
              <img src={coin?.item.large} alt="" className='md:w-[3rem] w-[2rem]] md:h-[3rem] h-[2rem] flex items-center justify-center' />
            </div>
          )
          }
        )
        :    <span className='flex  h-full items-center justify-center '>
        <span>
            loading...
        </span>
            <span className='w-10 ml-2 h-10 rounded-full border-4 border-b-charcoalGray border-green-500 animate-spin'>

            </span>
        </span>
      }
      </div> 
      <div className='flex flex-wrap justify-evenly mt-4 min-h-[60vh] w-[80%]  md:space-y-[1.5rem] space-y-[2rem] '>
        {
          Array.isArray(trendingCoins) && trendingCoins.map((coin)=>{
            return(
              <div key={coin?.item.id} onClick={()=>{openModal(coin.item.id)}}  className='flex flex-col  items-center   justify-center  py-2  shadow-lg bg-[#191818] backdrop-blur-md last:mb-0 rounded-lg p-4 relative cursor-pointer hover:bg-charcoalGray    hover:bg-opactiy-40 m-2'>
                              <img src={coin?.item.large} alt="" className='md:w-[3rem] w-[2rem]] md:h-[3rem] h-[2rem] flex items-center justify-center' />
                              <div className='flex justify-end items-end'>{coin?.item.name}</div>
               <span className='flex '>
                <label className=' light-brown-gradient font-satisfy mr-2'> Market Cap Rank:</label>
                <p className='flex font-bebas-neue'> {coin?.item.market_cap_rank}

              </p>
               </span>
               <span className='flex mr-2'>
                <label  className='font-crimson text-gradient mr-2'>Price(in btc):</label>
                <p className=' font-serif text-red-200'>
               {
                (Number(coin?.item?.price_btc).toFixed(9))
               }
                </p>
                </span>
                <span className='flex'>
                  <label className='light-brown-gradient font-satisfy  mr-3'>Rating :</label>
                  <p className='font-serif text-red-100'>
                    {coin?.item.score}
                  </p>
                </span>
              </div>
            )
          
          }
          )
        }
      </div>
      <CryptoModal isOpen={isOpen} onRequestClose={closeModal} selectedCrypto={coinData} />
</div>
  )
}

export default Trending