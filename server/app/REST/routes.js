import userEndpoint from './user.endpoint';
import movieEndpoint from './movie.endpoint';

const routes = function (router) {
    userEndpoint(router);
    movieEndpoint(router);
};

export default routes;
