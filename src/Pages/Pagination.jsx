import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';
import { useContext, useState } from 'react';
import { cryptoContext } from '../Components/CryptoContext';
import { LuArrowBigRightDash } from 'react-icons/lu';

function Pagination() {
  const { perPage, setPerPage, page, setPage, totalCoins, cryptoData } = useContext(cryptoContext);
  const [inputValue, setInputValue] = useState('');
//   const [page, setPage] = useState(1);

  const handlePerPageChange = (e) => {
    // Restrict the input field to accept only numeric values
    const numericValue = e.target.value.replace(/[^0-9]/g, '');
    setInputValue(numericValue);
  };

  const handlePerPageClick = () => {
    // Set perPage to the numeric value in the input field
    setPerPage(parseInt(inputValue, 10));
  };
  const totalValue = Math.ceil(totalCoins / perPage)
  let totalPages = 250 
        const nextPage =()=>{
            if(page === totalPages){
                return null
            }
            else{
                setPage(page + 1)
            }
        }
        const prevPage =()=>{
            if(page === 1){
                return null
            }
            else{
                return setPage(page - 1)
            }
        }
        console.log(page - 1)
        console.log(page + 1)
        if(
            cryptoData && cryptoData.length >= perPage
        )
  return (
    <div className=" mt-[1.2rem] z-70">
      <div className="flex  space-y-5 md:flex-row flex-col gap-[0.5rem] md:gap-[0.8rem]">
        <div className="items-center mt-[1rem] justify-center flex mr-[2rem] md:mr-[3.8rem]">
          <label htmlFor="page" className="md:text-sm  ">
         per page:
          </label>
          <>
            <input
              type="text"
              placeholder="10"
              value={inputValue}
              onChange={handlePerPageChange}
              className="w-10 shadow-lg h-7 bg-[#100f0ff3] px-1 rounded-md placeholder:ml-2  border-0 placeholder:text-sm placeholder:font-thin border-charcoalGray focus:border focus:border-green-400 outline-none ml-2"
            />
            <LuArrowBigRightDash
              className="w-14 text-4xl text-green-400 cursor-pointer  ml-[-0.5rem] mt-[-0.3rem]"
              onClick={handlePerPageClick}
            />
          
          </>
        </div>
        <div className='flex gap-[0.7rem] md:gap-[1.3rem] '>
        <FiArrowLeftCircle className="text-3xl text-cyan1-1 mt-[-0.1rem]" onClick={prevPage}/>
        <div > 
<button onClick={prevPage} className={`${ page === 1 ? 'hidden' : "bg-charcoalGray hover:bg-[#2d3748] text-sm text-white font-bold py-1 px-3 rounded-full"}`}>
  {page - 1}
</button>
</div>
<div>
<button className="bg-cyan1-1 text-charcoalGray text-sm font-bold py-1 px-3 rounded-full ">
  {page}
</button>
</div>
<div>
<button onClick={nextPage} className={`${page === 250  ? 'hidden' : "bg-charcoalGray hover:bg-[#2d3748] text-sm text-white font-bold py-1 px-3 rounded-full"}`}>
    {page + 1}
</button>
</div>
<div>
</div>
<div>
<FiArrowRightCircle className="text-3xl text-cyan1-1 mt-[-0.1rem]"  onClick={nextPage}/>
</div>
    


        </div>
        <div className='flex md:ml-[4rem] items-center justify-center'>
<label  className='mr-3 font-crimson'>total pages:</label>
<div className="mt-[-0.3rem] hover:bg-[#2d3748] bg-blue-900 text-sm text-white font-bold py-1 px-2 rounded-sm shadow-2xl ">
    {totalValue}
</div>
</div>
      </div>
    </div>
  )
  else{
        return null
  }
}

export default Pagination;




