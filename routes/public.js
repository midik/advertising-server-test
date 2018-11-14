import Router from 'koa-router';
import * as pub from '../controllers/public';

const router = new Router();

router.get('/page', pub.getPage);
router.get('/ad', pub.getAd);

export default router.routes();
