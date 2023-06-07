import axios from "axios";
import { ActionTypes } from "../ActionTypes";

const options = {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDdhOTAwMDQ0M2NiZmUwZWM5NzAzZTAyYTU2YWQ4ZSIsInN1YiI6IjY0N2M1OTdmMTc0OTczMDBjMTMyZDE3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.307BgGxcwrEJ2o9gLt1X_deP4YrIikOENndvbQAMyGo'
    }
  };
axios.defaults.baseURL = "https://api.themoviedb.org/3";

export const getMovies = () => (dispatch) => {
    axios.get("/movie/popular", options)
    .then((res)=>  dispatch({
        type:ActionTypes.SET_MOVIES,
        payload:res.data.results
    }));
   
};

//Kategori verileri

export const getGenres = () => (dispatch) =>{
  axios.get("/genre/movie/list",options)
  .then((res)=>dispatch({
    type: ActionTypes.SET_GENRES,
    payload:res.data.genres
  }))
};

// custom hook

export const fetchByUrl = async(url) => {
  const res = await axios.get(url, options);

  return res.data
}