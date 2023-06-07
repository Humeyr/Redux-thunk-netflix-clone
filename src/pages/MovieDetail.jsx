import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchByUrl } from '../app/actions/movieActions';
import { baseImgUrl } from '../components/Hero';

const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState(null)
  const {movieId} =  useParams();

  useEffect(() => {
    fetchByUrl(`/movie/${movieId}`)
    .then((res) => setMovieDetail(res));
  },[]);

  if(movieDetail === null) return "Loading..."
  return (
    <div className='movie-detail row bg-black'>
      <div className='col-md-6 d-flex align-items-center justify-content-center'>
        <img className='detail-img img-fluid' src={`${baseImgUrl}${movieDetail.poster_path}`} />
      </div>
      <div className="col-md-6 d-flex flex-column justify-content-center text-light">
        <h1>{movieDetail.title}</h1>
        <p>{movieDetail.overview}</p>
        <div className="row row-cols-2">
          <div>
            <p>Maliyet: {movieDetail.budget}</p>
            <p>Hasılat: {movieDetail.revenue}</p>
            <p>Kar: {movieDetail.revenue - movieDetail.budget} </p>
          </div>
          <div>
            <div className="d-flex gap-2">
              Kategori(ler):
              {movieDetail.genres.map((genre) => (
                <p className="badge bg-danger">{genre.name}</p>
              ))}
            </div>
            <div className="d-flex gap-2">
              Dil(ler):
              {movieDetail.spoken_languages.map((lang) => (
                <p className="badge bg-warning">{lang.name}</p>
              ))}
            </div>
            <div className="row gap-2">
              Yapımcı(lar):
              {movieDetail.production_companies.map((comp) => (
                <p className="badge bg-primary">{comp.name}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail
