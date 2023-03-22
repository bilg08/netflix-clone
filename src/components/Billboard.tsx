import React from 'react'
import useBillboard from '../../hooks/useBillboard'
import {InformationCircleIcon} from '@heroicons/react/24/outline'
function Billboard() {
    const {data} = useBillboard();
  return (
    <div className='relative h-[56.25vw]'>
        <video 
        className='w-full h-[56.25vw object-cover brightness-[60% '
        autoPlay 
        muted 
        loop 
        src={data?.videoUrl} 
        poster={data?.thumbnailUrl}>
        </video>
        <div className='absolute top-[30%] md:top-[40%] ml-4 md:ml-16'>
          <p className='text-white text-xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl'>
            {data?.title}
          </p>
          <p className='text-white text-[8px] md:text-lg mt-3 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl'>
            {data?.description}
          </p>
          <div className='flex flex-row items-center mt-3 md:mt-4 gap-3'>
            <button className='bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition'>
              More Info
              <InformationCircleIcon width={24} height={24} className='ml-2'/>
            </button>
          </div>
        </div>
    </div>
  )
}

export default Billboard