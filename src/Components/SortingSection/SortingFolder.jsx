import React from 'react'
import Search from './Search'
import Sorting from '../SortingSection/Sorting'
import Currency from './Currency'
import Refresh from './Refresh'
function SortingFolder() {
  return (
    <div className='w-[80%] gap-[1.5rem]  md:gap-[1rem] items-center justify-center flex-col border-0  flex md:flex-row md:items-start md:justify-start md:border border-slate-300 p-1 rounded-md '>
        <Search />
        <Sorting />
        <Currency />
        <Refresh/>
    </div>
  )
}

export default SortingFolder
