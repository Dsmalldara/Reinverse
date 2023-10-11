import { useContext } from 'react'
import { useState } from 'react'
import { cryptoContext } from '../CryptoContext'
import {PiNavigationArrowDuotone} from 'react-icons/pi'
import { currencyList } from './CurrencyList'
import { useRef } from 'react'
function Sorting() {
  const {currency, setCurrency} = useContext(cryptoContext)
  const currencyRef = useRef(null)
   const handleCurrenyChange =(e)=>{
    e.preventDefault();
      setCurrency(currencyRef.current.value)

    }
  console.log(currency)
  return (
    <>
    <form className=' w-full items-center justify-center flex mt-1 relative'
    >
      <select  name="currency"  className='px-2 outline-none items-center justify-center  border w-25  h-6 focus:border-green-300 border-charcoalGray rounded-md py-0 bg-charcoalGray placeholder:ml-4' ref={currencyRef} 
      onClick={handleCurrenyChange}
      >
   {
  currencyList.map((item, index) => (
    <option key={index} value={item.name} className='flex flex-row'>
      {item.icon && (
        <span className="mr-2 inline-block">{item.icon}</span>
      )}
      {item.name}
    </option>
  ))
}

      </select>
      <PiNavigationArrowDuotone className='items-center justify-center flex text-2xl text-green-400 rotate-[110deg] cursor-pointer ml-1'  onClick={handleCurrenyChange}/>
    </form>
    
    </>
  )
}

export default Sorting



{/* <label htmlFor="currency" className=' px-2 flex items-center justify-center font-bold '>currency :</label>
      <input type="currency" placeholder='usd' className='px-1 outline-none items-center justify-center  border w-14  h-6 focus:border-green-300 border-charcoalGray rounded-md py-0 bg-charcoalGray placeholder:ml-4' ref={currencyRef}/>
      <PiNavigationArrowDuotone className='items-center justify-center flex text-2xl text-green-400 rotate-[110deg] cursor-pointer ml-1'  onClick={handleCurrenyChange}/> */}