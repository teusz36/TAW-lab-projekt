import business from '../business/business.container';

const movieEndpoint = (router) => {
    router.get('/api/movies', async (request, response, next) => {
        try {
            let result = await business.getMovieManager().query();
            console.log("request ")
            console.log(result)
            response.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    });

    router.get('/api/movies/:id', async (request, response, next) => {
        try {
            const id = request.params.id;
            let result = await business.getMovieManager().get(id);
            console.log(result);

            if (result) {
                response.status(200).send(result);
            } else {
                response.status(404).send('Dokument o podanym ID nie został znaleziony.');
            }
        } catch (error) {
            console.log(error);
            response.status(500).send('Wystąpił błąd serwera.');
        }
    });

    router.post('/api/movies', async (request, response, next) => {
        try {
            let result = await business.getMovieManager().createNewOrUpdate(request.body);
            response.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    });

    router.delete('/api/movies/:id', async (request, response, next) => {
      try {
        const id = request.params.id;
        let result = await business.getMovieManager().deleteMovie(id);

        if (result) {
          response.status(200).send('Film został usunięty.');
        } else {
          response.status(404).send('Nie znaleziono filmu o podanym ID.');
        }
      } catch (error) {
        console.log(error);
        response.status(500).send('Wystąpił błąd serwera.');
      }
    });

};
export default movieEndpoint;
