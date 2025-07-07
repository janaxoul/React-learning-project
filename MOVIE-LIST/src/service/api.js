const API_KEY = "ecce12d9384a59f1cac24b91ee973aab"
const BASE_URL= "https://api.themoviedb.org/3"

export const getPopularMovies = async ()=>{
    const response= await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    console.log('URL:', `${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    console.log('Response:', response.status);
    const data = await response.json();
    console.log(data);
    return data.results
}
export const searchMovies = async (query)=>{
    const response= await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results
}