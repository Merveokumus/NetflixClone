import { getMovies, getGenres } from '../app/actions/movieActions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Hero from '../components/Hero';
import ListMovies from '../components/ListMovies';
import { movieReducer } from './../app/reducers/movieReducer';

const MainPage = () => {

    const dispatch = useDispatch();
    const state = useSelector((store) => store.movieReducer)


    useEffect(() => {
        // populer film verilerini çek ve store a aktar
        dispatch(getMovies());
        // kategori verisini çek ve store a aktar
        dispatch(getGenres());
    }, [])
    return (
        <div>
            {/* Populer filmi gösterme */}
            <Hero />
            {/* Kategorilere göre filmleri listeleme */}
            {state.genres.map((genre) =>
                <ListMovies key={genre.id} genre={genre} />)}
        </div>
    )
}

export default MainPage;
