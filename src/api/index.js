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

export async function favApi(state) {
    try {
            if (typeof state === 'object') {
                const movieArray= [];
                for await (let id of state) {
                    const movieRequest = `${movieUrl}/${id}?api_key=${apiKey}&append_to_response=videos`;
                    const { data } = await axios.get(movieRequest);
                    movieArray.push(data);
                }
                return movieArray;
            }
            return 'trash';
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


// examples:
// search
// https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=mad+max
// movie + videos
// https://api.themoviedb.org/3/movie/343611?api_key={api_key}&append_to_response=videos