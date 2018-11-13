import Router from 'koa-router';
import * as article from '../controllers/article';


const router = new Router();

router.get('/', article.get);
router.post('/', article.post);
router.put('/:id', article.put);
router.del('/:id', article.del);

export default router.routes();
