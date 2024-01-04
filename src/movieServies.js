const key=import.meta.env.VITE_TMDB_KEY;
const baseUrl="https://api.themoviedb.org/3";
const requests={
    popular:`${baseUrl}/movie/popular?api_key=${key}`,
    topRated:`${baseUrl}/movie/top_rated?api_key=${key}`,
    trending:`${baseUrl}/search/movie?api_key=${key}&language=en-US&page=2`,
    comedy:`${baseUrl}search/movie?api_key=${key}&language=en-US&query=comdey&page=1&include_adult=flase`,
    upcoming:`${baseUrl}/movie/upcoming?api-key=${key}`
}
export  default requests