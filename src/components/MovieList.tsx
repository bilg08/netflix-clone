import React from 'react';
import {isEmpty} from 'lodash';
import MovieCard from './MovieCard';
import { Movie } from '../../typings';
interface MovieListProps {
    data: [Movie],
    title: string,
}

function MovieList({data, title}: MovieListProps) {
  if(isEmpty(data)) {
    return null;
  }
  return (
    <div className='px-4 md:px-12 mt-4 space-y-8'>
        <div className='text-white text-md md:text-xl lg:text-2xl font-semibold'>
            <p>{title}</p>
            <div className='grid grid-cols-4 gap-2'>
             {data?.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/>
             ))}
            </div>
        </div>
    </div>
  )
}

export default MovieList