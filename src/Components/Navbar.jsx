import logo from '../Components/logo.svg'
import { Link } from 'react-router-dom'
import { BsBookmark } from 'react-icons/bs'
import {FiBookmark, FiTrendingUp} from 'react-icons/fi'
import {FaBars} from 'react-icons/fa'
import { MdCancel } from 'react-icons/md'
import { useState } from 'react'
import { useContext } from 'react'
import { cryptoContext } from './CryptoContext'
function Navbar() {
  const { favoriteCoins } = useContext(cryptoContext)
     const [active, setActive] = useState('Home')
     const [isOpen, setIsOpen] = useState(false)
     const openModal = () => {
        setIsOpen(true)
      }
      const closeModal = () => {
        setIsOpen(false)
      }
  return (
    <div className='md:sticky md:top-0 md:z-40'>
    <div className='md:flex hidden  bg-darkblue  mb-[3rem] w-[100%] top-0 sticky  py-2 mx-auto backdrop-blur-md z-40  pt-2 text-white px-3 justify-center items-start gap-[2rem] md:gap-[10rem] '>
      <div className='text-3xl  font-bold font-satisfy mr-auto z-20 text-whiteSmoke ml-[2.5rem]'>Reinverse
        </div>
        <div className='flex space-x-6 md:space-x-[2.6rem] mr-auto z-20 justify-center place-items-center'>
          <h3 className={`${ active ===  'Home' ?   'flex border-b-2 border-blue-200 text-whiteSmoke' : '  text-whiteSmoke'}`} onClick={()=>{setActive('Home')}} >
            <Link to='/' className=' text-whiteSmoke'>Home</Link>
          </h3>
          <h3 className='text-1xl' onClick={()=>{setActive('Trending Coins')}}>
            <Link to='/trending'  className={`${ active ===  'Trending Coins' ?   'flex border-b-2 border-blue-200 text-whiteSmoke ' : '  text-whiteSmoke'}`}>Trending Coins <span className='mr-2 inline-block mt-2'><FiTrendingUp/></span> </Link>
          </h3>
          <h3 className='text-1xl' onClick={()=>{setActive('Saved Coins')}}>
            <Link to='/saved'  className={`${ active ===  'Saved Coins' ?   'flex border-b-2 border-blue-200 text-whiteSmoke mb-1' : '  text-whiteSmoke'}`}>Saved Coins <span className='mr-2 inline-block mt-2'><BsBookmark/></span> </Link>
          </h3>
      </div>
      </div>
      <div>
      <div className='text-3xl flex md:hidden  mt-[.5rem]  font-bold font-satisfy mr-auto z-20 text-whiteSmoke ml-[2.5rem] '>
      <span className=' text-dodgerBlue '>
      {
        isOpen ? <MdCancel onClick={closeModal} className='text-3xl cursor-pointer mt-[1rem]'/> : <FaBars onClick={openModal} className='text-3xl cursor-pointer mr-[2rem]'/>
      }
      
      </span>
      <span className={`${ isOpen === true ? 'hidden' : 'text-2xl text-dodgerBlue  font-bold font-satisfy  z-20  ml-[2.5rem]'}`}>Reinverse
        </span>
        </div>
        <div>
          <ul  className={`${isOpen ? 'flex flex-col items-center text-center text-whiteSmoke text-2xl h-[100vh]  space-y-[3rem] min-w-[80vw] bg-darkblue font-bold font-satisfy mt-[-3rem]' : 'hidden'} md:hidden`}>
            <li  onClick={()=>{setActive('Home')}} className='mt-[3rem]'>
            <Link to='/'  className={`${ active ===  'Home' ?   'flex border-b-2 border-blue-200 text-whiteSmoke ' : ' flex text-whiteSmoke'}`}>Home</Link>
            </li>
            <li  onClick={()=>{setActive('Trending Coins')}}>
            <Link to='/trending'  className={`${ active ===  'Trending Coins' ?   'flex border-b-2 border-blue-200 text-whiteSmoke ' : ' flex text-whiteSmoke'}`}>Trending Coins <span className='mr-2 inline-block mt-2'><FiTrendingUp/></span> </Link>
            </li>
            <li  onClick={()=>{setActive('Saved Coins')}}  >
            <Link to='/saved'  className={`${ active ===  'Saved Coins' ?   'flex border-b-2 border-blue-200 text-whiteSmoke ' : ' flex text-whiteSmoke'}`}>Saved Coins <span className='mr-2 inline-block mt-2'><FiBookmark/></span> {favoriteCoins.length >= 1 && <span className="text-green-500">({favoriteCoins.length})</span>} </Link>
            </li>
          </ul>
        </div>
      </div>
      </div>
  )
}



export default Navbar