import React from 'react'
import { useSelector } from 'react-redux'

export const baseImgUrl = 'https://image.tmdb.org/t/p/original';

const Hero = () => {
    const state = useSelector((store) => store.movieReducer);
    const index = Math.round(Math.random()*19);
    const film = state.popularFilms[index];
  return (
    
     <div className='row bg-black text-light p-4'>
       <div className='col-md-6 mb-3 d-flex flex-column justify-content-center gap-3'>
         <h1>{film?.title}  </h1>
         <p>{film?.overview} </p>
         <p className='text-warning'>IMDB:{film?.vote_average} </p>
        <div className='d-flex justify-content-center gap-3'>
          <button className='btn btn-danger'>Filmi izle</button>
          <button className='btn btn-primary'>Listeye ekle</button>
       </div>
      </div>
      <div className='col-md-6 d-flex align-items-center'>
        <img className='img-fluid rounded shadow' src={`${baseImgUrl}${film?.backdrop_path}`} ></img>
      </div>
    
     </div>
  );
};

export default Hero;
