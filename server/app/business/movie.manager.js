import movieDAO from '../DAO/movieDAO';

function create(context) {
    async function query() {
        let result = movieDAO.query();
        if (result) {
            return result;
        }
    }

    async function get(id) {
        let result = await movieDAO.get(id);
        if (result) {
            return result;
        }
    }

    async function createNewOrUpdate(data) {
        let result = await movieDAO.createNewOrUpdate(data);
        if (result) {
            return result;
        }
    }

    async function deleteMovie(id) {
    console.log("movie.manager")
        let result = await movieDAO.deleteMovieById(id);
        if(result) {
            return result;
        }
    }

    return {
        query: query,
        get: get,
        createNewOrUpdate: createNewOrUpdate,
        deleteMovie: deleteMovie
    };
}

export default {
    create: create
};
