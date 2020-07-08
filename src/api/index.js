import axios from 'axios';

const apiKey = 'acc202a4fc34be5b66475540489da957';

const searchUrl = 'https://api.themoviedb.org/3/search/movie'
const movieUrl = 'https://api.themoviedb.org/3/movie'

export async function searchApi(searchText) {
    try {
        if (searchText !== '') {
            const searchQuery = `${searchUrl}?api_key=${apiKey}&query=${searchText}`;
            const { data: { results } } = await axios.get(searchQuery);
            return results;
        }
        return [];
    } catch (error) {
        return error;
    }
}

export async function addMovie(id) {
    try {
        const movieReq = `${movieUrl}/${id}?api_key=${apiKey}&append_to_response=videos`;
        const { data } = await axios.get(movieReq);
        return data;
    } catch (error) {
        return error;
    }
}

export function posterUrl(poster) {
    if (poster["poster_path"] !== null) {
        return `https://image.tmdb.org/t/p/w185/${poster["poster_path"]}`;
    } else {
        return `https://via.placeholder.com/185x278?text=No+Poster`;
    }
}


// examples:
// search
// https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=mad+max
// movie + videos
// https://api.themoviedb.org/3/movie/343611?api_key=acc202a4fc34be5b66475540489da957&append_to_response=videos