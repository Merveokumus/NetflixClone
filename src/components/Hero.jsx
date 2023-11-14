import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { movieReducer } from './../app/reducers/movieReducer';
import { Link } from 'react-router-dom';

export const baseImgUrl = 'https://image.tmdb.org/t/p/original'

const Hero = () => {
    const state = useSelector((store) => store.movieReducer);
    //rastgele bir sayı bulma
    const index = Math.round(Math.random() * 19)
    //20filmden rastgele film seçme
    const film = (state.populerFilms[index])

    return (
        <div className='row bg-dark text-light p-4'>
            <div className='col-md-6 mb-3 d-flex flex-column justify-content-center gap-3'>
                <h1>{film?.title}</h1>
                <p>{film?.overview}</p>
                <p className='text-warning'>IMDB: {film?.vote_average}</p>
                <div className='d-flex justify-content-center gap-3'>

                    <Link className='btn btn-danger' to={`/movie/${film?.id}`}>Filmi İzle</Link>
                    <button className='btn btn-info'>Listeye Ekle</button>
                </div>
            </div>
            <div className='col-md-6 d-flez align-item-center'>
                <img className='img-fluid rounded shadow ' src={`${baseImgUrl}${film?.backdrop_path}`} alt="" />
            </div>
        </div>
    )
}

export default Hero
