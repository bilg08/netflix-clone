import { ArrowRightCircleIcon, ArrowRightIcon, PlayIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import React from 'react';
import useInfoModal from '../../hooks/useInfoModal';
import { Movie } from '../../typings';
import FavoriteButton from './FavoriteButton';
import {BiChevronDown} from 'react-icons/bi';
interface MovieCardType  {
    movie: Movie
}
function MovieCard({movie}: MovieCardType) {
  const router = useRouter();
  const {openModal} = useInfoModal();
  return (
    <div className='group bg-zinc-900 col-span relative md:h-[12vw]'>
      <img src={movie.thumbnailUrl} 
      className="cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[12vw]"
        alt="ThumbNail"
    />
    <div className='opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100'>
        <img src={movie.thumbnailUrl}/>
        <div className='z-10 bg-zinc-800 p-2 lg:-4 absolute w-full transition shadow-md rounded-b-md'>
           <div className='flex flex-row items-center gap-3'>
            <div className='cursor-pointer w-6 h-6 transition hover:bg-neutral-300 lg:2-10 lg:h-10 bg-white rounded-full flex justify-center items-center'>
                <PlayIcon 
               onClick={() => router.push(`/watch/${movie?.id}`)}
                width={30} height={30} color='black' />
            </div>
            <div>
              <FavoriteButton movieId={movie.id || ''}/>
            </div>
            <div 
              onClick={() => openModal(movie?.id as string)}
              className='cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300'>
                <BiChevronDown size={30} className='text-white group-hover/item:text-neutral-300'/>
              </div>
           </div>
           <p className='text-green-400 font-semibold mt-4'>
            New <span className='text-white'>2023</span>
           </p>
           <div className='flex flex-row mt-4 gap-2 items-center'>
             <p className='text-white text-[10px] lg:text-sm'>{movie.duration}</p>
           </div>
           <div className='flex flex-row mt-4 gap-2 items-center'>
             <p className='text-white text-[10px] lg:text-sm'>{movie.genre}</p>
           </div>
        </div>
    </div>
    </div>
  )
}

export default MovieCard