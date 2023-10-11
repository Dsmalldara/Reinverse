import { cryptoContext } from '../Components/CryptoContext'
import {BsBookmark} from 'react-icons/bs'
import Pagination from './Pagination'
import { useState } from 'react'
import { useContext } from 'react'
import CryptoModal from './CryptoModal'
function CryptoItems() {
    const [isOpen, setIsOpen] = useState(false);
    const {cryptoData, currency,sort,coinData,setCoinId,  setSelectedCryptoId,
    favoriteCoins, addCoinToFavorites, removeCoinFromFavorites, isCoinInFavorites
    } = useContext(cryptoContext)
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
        console.log(favoriteCoins)
      
        // console.log(selectedCrypto)
  return (
    <div className='flex flex-col  mb-8 items-center  justify-center  w-[80%] mt-7  h-full '>
      <table className='w-full table-auto  px-3 rounded-md'>
        <thead className='  text-slate-100 text-1xl md:text-1xl border-slate-500 mt-2 border-b-2  font-rajdhani '>
            <tr >
                <th className='py-1'>Asset</th>
                <th className='py-1 md:table-cell hidden'>Name</th>
                <th className='py-1'>Price</th>
                <th className='py-1 md:table-cell hidden'>Total_volume</th>
                <th className='py-1'>{sort}</th>
                <th className='py-1  lg:table-cell hidden'>1H</th>
                <th className='py-1  lg:table-cell hidden'>24Hrs</th>
                <th className='py-1  lg:table-cell hidden'>7Days</th>
            </tr>
        </thead>
        <tbody className={`${cryptoData ? ' rounded-md bg-slate-900 border-1 z-50 border-slate-900 shadow-md ' : 'bg-none'}`}>
          {
          cryptoData ? 
            cryptoData.map((item, index) => (
                <tr key={index} className=' hover:bg-slate-700 pl-3 text-center text-base border-0   hover:ease-in-out'>
                  <div onClick={() => openModal(item.id)} className='w-full h-full'>
                    <td className='py-4 cursor-pointer flex uppercase pl-2  md:text-sm text-xs  gap-[0.4rem] md:gap-[0.7rem]'>
                        <img src={item.image} className='w-[1.4rem] h-[1.4rem]' alt="" />
                        <span>{item.symbol}</span>
                    </td>
                    </div>
                    <td className='py-4 cursor-pointer md:text-fontSize text-sm md:table-cell hidden'>{item.name}</td>
                    <td className='py-4 text-sm md:text-base md:font-bold'>
                        {new Intl.NumberFormat('en-US', { style: 'currency', currency: currency }).format(item.current_price)}
                    </td>
                    <td className='py-4 font-semi-bold text-creamyWhite md:table-cell hidden' >
                        {new Intl.NumberFormat('en-US').format(item.total_volume)}
                    </td>
                    <td className='py-4' >
                        {item.market_cap_change_percentage_24h > 0 ?
                            <span className='text-green-500'>{`+${Number(item.market_cap_change_percentage_24h).toFixed(2)}%`}</span>
                            :
                                <span className='text-red-500'>{`${Number(item.market_cap_change_percentage_24h).toFixed(2)}%`}</span>
                            }
                          </td>
                    <td className='py-4 lg:table-cell hidden'>
                        {
                            item.price_change_percentage_1h_in_currency >  0 ?
                            <span className='text-green-500'>{`+${Number(item.price_change_percentage_1h_in_currency).toFixed(2)}%`}</span>
                            :
                                <span className='text-red-500'>{`${Number(item.price_change_percentage_1h_in_currency).toFixed(2)}%`}</span>
                            }
                    </td>
                    <td className='py-4  lg:table-cell hidden'>  {
                            item.price_change_percentage_24h_in_currency >  0 ?
                            <span className='text-green-500'>{`+${Number(item.price_change_percentage_24h_in_currency).toFixed(2)}`}</span>
                            :
                                <span className='text-red-500'>{`${Number(item.price_change_percentage_24h_in_currency).toFixed(2)}`}</span>
                            }</td>
                    <td className='py-4  lg:table-cell hidden'>
                    {
                            item.price_change_percentage_7d_in_currency >  0 ?
                            <span className='text-green-500'>{`+${Number(item.price_change_percentage_7d_in_currency).toFixed(2)}%`}</span>
                            :
                                <span className='text-red-500'>{`${Number(item.price_change_percentage_7d_in_currency).toFixed(2)}%`}</span>
                            }
                    </td>
                    <td className='w-6 h-6 cursor-pointer text-[0.4rem] md:text-[0.7rem] text-slate-100 md:hover:text-green-500'
                  onClick={()=>{if(isCoinInFavorites(item.id)){
                    removeCoinFromFavorites(item.id)
                }else{
                    addCoinToFavorites(item)
                }}}
                   >
                      {isCoinInFavorites(item.id) ? <BsBookmark className="text-2xl text-blue-700  fill-dodgerBlue"/> : <BsBookmark className="text-gray-200 text-2xl"/>}
                 
                    </td>
                </tr>
            ))
            : 
                <span className='flex  h-full items-center justify-center  ml-[9rem] md:ml-[16rem] mt-[3rem] '>
                <span>
                    loading...
                </span>
                    <span className='w-10 ml-2 h-10 rounded-full border-4 border-b-charcoalGray border-green-500 animate-spin'>

                    </span>
                </span>
            }
        </tbody>
      </table>
      <CryptoModal isOpen={isOpen} onRequestClose={closeModal} selectedCrypto={coinData} currency={currency}/>
      <Pagination/>
    </div>
  )
}

export default CryptoItems