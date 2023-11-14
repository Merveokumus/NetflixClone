import axios from "axios";
import { ActionTypes } from "../ActionTypes";

//? api isteği yaparken gönderilecek
const options = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGZmZGU0OTdmMWQwMzcxOTY2YmUwMmFhNjJhNTAzYSIsInN1YiI6IjY1NGI0YmFkNTMyYWNiNTMzNzFlZThjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HBBGoknamSco5ZGK3SAjSjv-yb9vsO6-BICQpSt8eRA",
  },
};

// ! axios un davranışını belirleme
axios.defaults.baseURL = "https://api.themoviedb.org/3";

//asenkron aksiyon
export const getMovies = () => (dispatch) => {
  //asenkron işlemler yapılıyor...(store aktarmadan önce yapılan işlem)
  axios
    .get("/movie/popular", options)
    //apiden gelen veriyi reducer a aktarma
    .then((res) =>
      dispatch({
        type: ActionTypes.SET_MOVIES,
        payload: res.data.results,
      })
    )
    .catch((err) => console.log(err));
};

// kategori verilerin almakiçin aksiyon
export const getGenres = () => (dispatch) => {
  //kategori verisin çekme isteği
  axios
    .get("/genre/movie/list", options)
    //veriyi store a aktar
    .then((res) =>
      dispatch({
        type: ActionTypes.SET_GENRES,
        payload: res.data.genres,
      })
    );
};

//! custom hook tanımlayacağız.

export const fetchByUrl = async (url) => {
  const res = await axios.get(url, options);
  return res.data;
};

/* function getMovies() {
  return async function (dispatch) {
    //asenkron işlemler yapılıyor...

    dispatch({
      //reducer a gönderme
    });
  };
}

burada iki kullanım şekli de olabilir
 */
