import SortingFolder from '../Components/SortingSection/SortingFolder'
import CryptoItems from './CryptoItems'
import NewsTicker from './NewsTicker'
function Crypto() {
  return (
    <div  className='w-[100%]  mt-12 flex flex-col mb-18  items-center justify-center'>
      <NewsTicker/>
        <SortingFolder/>
    <CryptoItems/>
    </div>
  )
}

export default Crypto