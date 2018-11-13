import Router from 'koa-router';
import * as articles from '../controllers/campaign';


const router = new Router();

router.get('/', articles.get);

export default router.routes();
