import {MdArrowDropDownCircle} from 'react-icons/md'
import { useContext } from 'react';
import { cryptoContext } from '../CryptoContext';
function Currency() {
  const {sort, setSort} = useContext(cryptoContext)
  const handleSort=(e)=>{
    e.preventDefault();
    setSort(e.target.value)    
  }
  return (
    <div className=" items-center justify-center flex mr-7 w-full">
      <form className="relative font-normal text-1xl md:text-base  flex items-center" >
      <label className="font-bold mr-2">sort by:
      <select name="sort by" id="" className="  rounded px-3 font-normal leading-3 capitalize py-1 bg-slate-500 focus:outline-0 md:px-2 outline-none"
      onClick={handleSort}
      >
        <option value="market_cap_desc">
          market cap desc
        </option>
        <option value="market_cap_asc">
          market cap asc
        </option>
        <option value="volume_desc">
          volume desc
        </option>
        <option value="volume_asc">
          volume asc
        </option>
        <option value="id_desc">
          id desc
        </option>
        <option value="id_asc">
          id asc
        </option>
        {/* <option value="id_desc">
          price asc
        </option> */}
      </select>
      <MdArrowDropDownCircle className="  absolute md:text-[2rem] right-0 top-0 text-[2rem]  text-green-400 pointer-events-none ml-2 "/>
      </label>
      </form>
    </div>
  )
}

export default Currency