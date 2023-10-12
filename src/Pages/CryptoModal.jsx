import React, { useEffect } from 'react';
import {BiSolidUpArrow, BiSolidDownArrow} from 'react-icons/bi'
import { cryptoContext } from '../Components/CryptoContext';
import Modal from 'react-modal'
import { useContext } from 'react';
import Chart from './Chart';
import { Link } from 'react-router-dom';
const HighLowIndicator = ({ currentPrice, high, low }) => {
  // Calculate the percentages of high and low relative to the range from low to high
  const range = high - low;
  const highPercentage = ((high - currentPrice) / range) * 100;
  const lowPercentage = ((currentPrice - low) / range) * 100;
  return (
    <div className="w-full flex mt-2 justify-between">
      <span
        className="bg-red-500 h-1.5 rounded-l-lg "
        style={{ width: `${highPercentage}%` }}
      >
        &nbsp;
      </span>
      <span
        className="bg-green-500 h-1.5 rounded-r-lg"
        style={{ width: `${lowPercentage}%` }}
      >
        &nbsp;
      </span>
    </div>
  );
};

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '80%',
    height: '85%',
    // marginRight: '-50%',
    backgroundColor: 'rgba(50, 49, 49, 0.3)', // Use rgba for background color with opacity
    backdropFilter: 'blur(12px)',
    border: 'none',
    transform: 'translate(-50%, -50%)',
    borderRadius: '1rem',
    overflow: 'hidden'
  },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(41, 39, 39, 0.65)'
    ,
}};
Modal.setAppElement('#root'); // Set the app element for accessibility
import { useState } from 'react';
import { FaBitbucket, FaFacebook, FaGithub, FaReddit, FaTwitter } from 'react-icons/fa';
function CryptoModal({ isOpen, onRequestClose, selectedCrypto,  }) {
  const {currency} = useContext(cryptoContext)
  const [selectedCurrency, setSelectedCurrency] = useState(currency);
  useEffect(() => {
    setSelectedCurrency(currency);
  }, [currency]);
  console.log(currency)
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Crypto Modal"
      shouldCloseOnOverlayClick={true}
      style={customStyles}

    >
      {/* Modal content here */}
      {
        selectedCrypto ?
  
       (
        <div className='flex items-center justify-between h-full w-full'>
            <div className='flex flex-col w-[55%] h-full  '>
          <div className='flex  w-full items-center justify-center'>
            <img src={selectedCrypto.image?.large} alt={selectedCrypto.id}  className='w-[3.3rem] h-[3.3rem] mx-1.5'/>
            <p className='flex text-xl capitalize font-medium'>{selectedCrypto.name}</p>
            <span className='text-[0.92rem] py-0.5 px-2.5 ml-2 text-cyan1-1 bg-cyan1-1 bg-opacity-25 rounded-md uppercase '> {selectedCrypto.symbol} </span>
          </div>
          <div className='flex mt-6 w-full'>
      <div className='w-full flex flex-col '>
      <label className='flex font-light text-sm text-slate-100 capitalize' >Price</label>
      <h2 className='text-lg font-bold font-roboto'>
            {
              new Intl.NumberFormat('en-US', { style: 'currency', currency: currency, maximumSignificantDigits:5, }).format(selectedCrypto.market_data?.current_price[currency])
            }
          </h2>
        </div>
       <div>
       <h2 className={`${selectedCrypto.market_data?.price_change_percentage_24h > 0 ? 'bg-green-400 py-[0.2rem] pr-[1.1rem] text-sm relative text-green-400  px-2 ml-2 bg-opacity-25 rounded' : 'bg-red-600 text-red-600 text-sm  pr-[1.1rem]  bg-opacity-25 mr-2  px-2 py-[0.2rem]  rounded relative'   }`}>   
          {(Number(selectedCrypto.market_data?.price_change_percentage_24h).toFixed(2))}%
          
          <span className='absolute  top-1 right-[0.2rem]'>
              {
                selectedCrypto.market_data?.price_change_percentage_24h > 0 ? <BiSolidUpArrow className='text-green-400'/> : <BiSolidDownArrow className='text-red-600'/>
              }
          </span>
          </h2>
       </div>
          </div>
       <div>
       <div className='mt-[0.5rem] w-full md:space-x-0 space-x-[3rem] flex items-center justify-between'>
         <div className='flex flex-col'>
         <span className='text-sm capitalize text-slate-100'> Market Cap   </span>
          <h2 className='text-base font-bold font-roboto'>
            {
              new Intl.NumberFormat('en-US', { style: 'currency', currency: currency, minimumFractionDigits:0, }).format(selectedCrypto.market_data?.market_cap[currency])
            }
          </h2>
         </div>
         <div className='mr-2 flex flex-col'>
          <span className='text-sm capitalize text-slate-100'> Fully diluted valuation   </span>
          <h2 className='text-base font-bold font-roboto'>
            {
              new Intl.NumberFormat('en-US', { style: 'currency', currency: currency, notation:'compact' }).format(selectedCrypto.market_data?.fully_diluted_valuation[currency])
            }
          </h2>
         </div>
       
         </div>
       </div>
       <div className='mt-[0.5rem]'>
          <span>Total Volume</span>
          <h2 className='text-base font-bold font-roboto'>
            {
              new Intl.NumberFormat('en-US', { style: 'currency', currency: currency, maximumSignificantDigits:5, }).format(selectedCrypto.market_data?.total_volume[currency])
            }
          </h2>
         </div>
         <div className='w-full flex  ml-[-3px] mt-2 justify-between'>
         <HighLowIndicator
         currentPrice={selectedCrypto.market_data?.current_price[currency]}
          high={selectedCrypto.market_data?.high_24h[currency]}
          low={selectedCrypto.market_data?.low_24h[currency]}
         />
         </div>
         <div className='w-full flex justify-between md:space-x-0 space-x-[3rem]'>
            
        <div>
        <div className='mt-[0.7rem]'>
            <span className='text-sm  text-slate-100'>
             Low 24h
            </span>
            <h2 className='text-base font-bold font-roboto'>
            {
              new Intl.NumberFormat('en-US', { style: 'currency', currency: currency, maximumSignificantDigits:5, }).format(selectedCrypto.market_data?.low_24h[currency])
            }
          </h2>
          </div>
          <div className='mt-[0.5rem] mr-2'>
            <span className='text-sm Capitalize  text-slate-100'>
              Max Supply
            </span>
            <h2 className='text-base font-bold font-roboto'>
            {
              new Intl.NumberFormat('en-US', { style: 'currency', currency: currency, maximumSignificantDigits:5, }).format(selectedCrypto.market_data?.max_supply)
            }
          </h2>
          </div>
        </div>
          <div >
          <div className='mt-[0.7rem]'>
            <span className='text-sm  text-slate-100'>
               High 24h
            </span>
            <h2 className='text-base font-bold font-roboto'>
            {
              new Intl.NumberFormat('en-US', { style: 'currency', currency: currency, maximumSignificantDigits:5, }).format(selectedCrypto.market_data?.high_24h[currency])
            }
          </h2>
          </div>

          <div className='mt-[0.3rem] mr-2  '>
            <span className='text-sm Capitalize  text-slate-100'>
              Circulating Supply
            </span>
            <h2 className='text-base font-bold font-roboto'>
            {
              new Intl.NumberFormat('en-US', { style: 'currency', currency: currency, maximumSignificantDigits:5, }).format(selectedCrypto.market_data?.circulating_supply)
            }
          </h2>
          </div>
          </div>
         </div>
         <div className='flex w-full mt-4 justify-between'>
              <div className='flex flex-col'>
              
  <a href={selectedCrypto?.links?.homepage?.[0]} target='_blank' rel="noreferrer noopener" className="text-sm px-1 py-1 my-[0.1rem] bg-opacity-25 bg-slate-100 rounded shadow-md text-slate-900">
    {selectedCrypto?.links?.homepage?.[0].substring(0,25)}
  </a>


  <a href={selectedCrypto?.links?.blockchain_site?.[0]} target='_blank' rel="noreferrer noopener" className="text-sm  my-[0.1rem] px-1 py-1 bg-opacity-25 bg-slate-100 rounded shadow-md text-slate-900">
  {selectedCrypto?.links?.blockchain_site?.[0].substring(0,25)}
  </a>
  <a href={
    selectedCrypto?.links?.official_forum_url?.[0]
  } target='_blank' rel="noreferrer noopener" className="text-sm px-1 py-1 bg-slate-100 text-slate-900 bg-opacity-25   my-[0.1rem] rounded shadow-m">
    {selectedCrypto?.links?.official_forum_url?.[0].substring(0,25)}</a>
              </div>
              <div className='flex flex-col content-start md:ml-0 ml-3 mt-[-1.2rem] md:mt-0 mb-3'>
                <label className='text-sm text-slate-100  capitalize'>sentiment</label>
             <div className='space-y-[0.5rem]'>
             <div>
             <h2 className={`${selectedCrypto?.sentiment_votes_up_percentage > 0 && 'bg-green-400 py-[0.2rem] pr-[1.1rem] text-sm relative text-green-400   px-2 mr-2 bg-opacity-25 rounded'    }`}>   
          {(Number(selectedCrypto?.sentiment_votes_up_percentage ).toFixed(2))}%
          
          <span className='absolute  bottom-1 right-[0.2rem]'>
              {
                selectedCrypto.sentiment_votes_up_percentage  > 0 && <BiSolidUpArrow className='text-green-400'/> 
              }
          </span>
          </h2>
             </div>
             <div>
             <h2 className={`${selectedCrypto.sentiment_votes_down_percentage  &&  'bg-red-600 text-red-600 text-sm  pr-[1.1rem]  bg-opacity-25 mr-2  px-2 py-[0.2rem]  rounded relative'   }`}>   
          {(Number(selectedCrypto.sentiment_votes_down_percentage ).toFixed(2))}%
          
          <span className='absolute  bottom-1 right-[0.2rem]'>
              {
                selectedCrypto.sentiment_votes_down_percentage   &&  <BiSolidDownArrow className='text-red-600'/>
              }
          </span>
          </h2>
             </div>
             </div>
               
              </div>
         </div>
            </div>
            <div className=' hidden md:flex md:flex-col w-[45%] h-full   '>
             <Chart/>
              <div className='flex flex-col space-y-4 '>
                <div className='flex'>
                  <label >
                    Market Cap Rank:
                  </label>
                  <h2 className='text-base font-bold font-roboto  text-slate-200  ml-2'>
                    {selectedCrypto?.market_cap_rank}
                  </h2>
                </div>
                <div className='flex'>
                  <label >
                    Genesis Date:
                  </label>
                  <h2 className='text-base font-bold font-roboto text-slate-200 ml-2'>
                    {selectedCrypto?.genesis_date}
                  </h2>
                </div>
                <div className='flex'>
                  <label >
                    Last Updated:
                  </label>
                  <h2 className='text-base font-bold font-sans  text-slate-200  ml-2'>
                    {selectedCrypto?.last_updated}
                  </h2>
              </div>
            </div>
        </div>
        <div className='mt-auto md:block hidden'>
              <div className='flex gap-[0.6rem]'>
                  <span>
                    <Link to={ selectedCrypto?.links?.subreddit_url}>
                    <FaReddit className='text-[1.5rem] text-cyan1-1'/>
                    </Link> 
                  </span>
                  <span>
                    <Link to={
                      selectedCrypto?.links?.repos_url?.github?.[0]
                    }
                    >
                      <FaGithub className='text-[1.5rem] text-cyan1-1'/>
                    </Link>
                  </span>
                  <span>
                    <Link to={
                      selectedCrypto?.links?.repos_url?.twitter?.[0]
                    }
                    >
                      <FaTwitter className='text-[1.5rem] text-cyan1-1'/>
                    </Link>
                  </span>
                  <span>
                    <Link to={
                      selectedCrypto?.links?.repos_url?.bitbucket?.[0]
                    }
                    >
                      <FaFacebook className='text-[1.5rem] text-cyan1-1'/>
                    </Link>
                  </span>
              </div>
        </div>
        </div>
        )
        : 
        (
          <span className='flex  h-full items-center justify-center  ml-[9rem] md:ml-[16rem] mt-[3rem] '>
          <span>
              loading...
          </span>
              <span className='w-10 ml-2 h-10 rounded-full border-4 border-b-charcoalGray border-green-500 animate-spin'>

              </span>
          </span>
        ) 
      }
    
    
    </Modal>
  );
}

export default CryptoModal;
