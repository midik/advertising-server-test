import api from './api';
import pub from './public';
import campaign from './campaign';
import campaigns from './campaigns';
import article from './article';
import articles from './articles';


export default (router, env) => {

    router.prefix(`/${env}`);

    router.use('/api', api);
    router.use('/public', pub);

    router.use('/campaign', campaign);
    router.use('/campaigns', campaigns);

    router.use('/article', article);
    router.use('/articles', articles);
};
