import Router from 'koa-router';
import * as campaign from '../controllers/campaign';


const router = new Router();

router.get('/:id', campaign.get);
router.post('/', campaign.post);
router.put('/:id', campaign.put);
router.del('/:id', campaign.del);

export default router.routes();
