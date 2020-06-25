const API_KEY='YOUR_KEY';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function getMovies(page = null, query)
{
    const pageParameter = page === null? '': '&page='+page;
    // console.log(`QUERY= ${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}${pageParameter}`);
    const resp = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}${pageParameter}`)
    const decodedResp = await resp.json();
    return decodedResp;
}