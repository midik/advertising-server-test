import Campaigns from '../lib/campaigns';


/**
 * Get all campaigns
 * @param ctx
 */
export const get = async (ctx) => {
    const items = await Campaigns.getAll();
    ctx.ok(items);
};
