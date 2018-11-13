import Router from 'koa-router';
import * as campaigns from '../controllers/campaigns';


const router = new Router();

router.get('/', campaigns.get);

export default router.routes();
