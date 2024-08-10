import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({onSearchInput}:any) {
  return (
    <div className='p-10 bg-gradient-to-br from-lime-100 to-lime-700 flex flex-col justify-center items-center text-white'>
        <h2 className='text-3xl font-bold font-p text-primary'>Browse Through All Template</h2>
        <p>What would you like to create today?</p>
        <div className='w-full flex justify-center'>
            <div className='flex gap-2 items-center border rounded-md bg-white my-5 w-[60%] h-10 pl-5'>
                <Search className='text-primary'/>            
                <input type="text" placeholder='Search' 
                onChange={(event)=>onSearchInput(event.target.value)}
                className='bg-transparent w-full outline-none text-black pl-3'/>
            </div>
        </div>
    </div>
  )
}

export default SearchSection