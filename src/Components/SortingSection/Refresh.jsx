import React from 'react'
import { useContext } from 'react'
import { cryptoContext } from '../CryptoContext'
import {BiReset} from 'react-icons/bi'
function Refresh() {
    const {resetFunction} = useContext(cryptoContext)
  return (
    <div className='flex gap-3 md:mr-[2rem]'>
    <span className='flex font-crimson md:hidden'>
     refresh:
    </span>
       <div>
       <BiReset
        onClick={resetFunction}
        className="text-[1.5rem] text-green-400 cursor-pointer hover:text-green-300 "/>
       </div>
    </div>
  )
}

export default Refresh