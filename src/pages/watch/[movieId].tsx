import { useRouter } from 'next/router';
import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import useMovie from '../../../hooks/useMovie';

function Movie() {
    const router = useRouter();
    const {movieId} = router.query;
    const {data} = useMovie(movieId as string);

  return (
    <div className='h-screen w-screen bg-black'>
      <nav onClick={() => router.back()} className='fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70'>
        <AiOutlineArrowLeft size={30} className="text-white "/>
        <p className='text-white text-xl md:text-3xl'>
          <span className='font-light'>
            Watching
          </span>
          {data?.title}
          </p>
      </nav>
      <video 
      autoPlay
      controls
      src={data?.videoUrl}
      className='h-full w-full'>
      </video>
    </div>
  )
}

export default Movie;