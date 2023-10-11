import {BiSearchAlt} from 'react-icons/bi'
import { useState } from 'react'
import { useContext } from 'react'
import { cryptoContext } from '../CryptoContext'    
import { debounce } from 'lodash'
const SearchResult = ({handleSearch})=>{
    let {searchedResult,setSearchCoins, setSearchedResult} = useContext(cryptoContext)
    const [searchItem, setSearchItem] = useState('')
    let handleChange =(e)=>{
        e.preventDefault();
        let Query = e.target.value;
        setSearchItem(Query)
        handleSearch(Query)
    }
    const handleSearching=(coin)=>{
        setSearchCoins(coin)
        setSearchItem('')
        setSearchedResult()
       
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        handleSearch(searchItem)
    }
    return(
        <div>
               <div className='relative'>
   <form action="" className='flex flex-row relative items-center '
   onSubmit={handleSubmit}
   >
        <input type="text" name='search' placeholder="Search..." onChange={handleChange} className=" border outline-none bg-charcoalGray px-3 border-slate-300 p-1 rounded-md required w-[13rem] md:w-[18rem] focus:border-green-400 placeholder:border-green-200" />
      <>
  <button type='submit'  className='absolute cursor-pointer outline-none right-1 text-2xl  text-green-300' onClick={handleSubmit}> <BiSearchAlt/></button>
      </>
    </form>
    {
  searchItem.length > 0 ? (
    <div className=' z-20 absolute rounded-md top-9 left-[-2rem] md:left-[-5rem] lg:left-[-7rem] w-96 h-96 overflow-x-hidden py-2 bg-charcoalGray scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-charcoalGray    bg-opacity-50 backdrop-blur-md '>
    {
        searchedResult ? 
        searchedResult.map((coin)=>{
            return(
                <div key={coin.id} className='py-[0.2rem] cursor-pointer' onClick={() => handleSearching(coin.id)}>
                <div className='flex flex-row items-start justify-start gap-[2rem] pl-[1rem] '>
                  <div className='flex flex-row items-center'>
                    <img src={coin.thumb} alt="" className='w-5 h-5' />
                    <h3 className='ml-2'>{coin.name}</h3>
                  </div>
                </div>
              </div>
            )
        })
        : <div className=' h-[20rem] items-center justify-center flex '>
          <div className='flex '>
            <span className=' text-green-300 font-rajdhani mt-1'>
              loading...
            </span>
            <span className='inline-block ml-2 w-10 h-10 border-4 border-green-500 rounded-full border-b-GhostWhite animate-spin '>

            </span>
          </div>
        </div>
    }
    </div>
  ) : null
}   
   </div>
        </div>
    )
}
function Search() {
    const {getSearchedResult, } = useContext(cryptoContext)
   const debounceSearch = debounce(function(val){
    getSearchedResult({query:val})
   },2400)

  return (
  <>
  <SearchResult  handleSearch={debounceSearch} />
  </>

  )
}

export default Search;