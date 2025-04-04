import React from 'react'
import UpcomingCard from './UpcomingCard'
const Upcoming = () => {
  return (
    <div className='flex flex-col gap-4 w-full h-full p-4'>
        <div className='flex-[3] flex justify-between w-full text-[#173061]'>
            <div className='flex-[3] p-4 flex flex-col gap-2'>
                <div className='text-xl font-bold'>Upcoming</div>
                <div className='text-sm'>Attending the meet will automatically mark your attendance</div>
            </div>
            <div className='flex-[2] flex items-center justify-end gap-2 p-2'>
                <UpcomingCard />
            </div>
        </div>
        <div className='flex-[2] flex flex-col gap-2 w-full h-full'>
            <div className='flex-[1] rounded text-[#173061] bg-[#DAE1EC] flex items-center justify-center'>
                Link will appear here
            </div>
            <div className='flex-[1] cursor-pointer rounded text-white bg-dblue flex items-center justify-center'>
                Generate Link
            </div>
        </div>
    </div>
  )
}

export default Upcoming