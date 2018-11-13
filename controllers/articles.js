import Articles from '../lib/articles';


/**
 * Get all articles
 * @param ctx
 */
export const get = async (ctx) => {
    const items = await Articles.getAll();
    ctx.ok(items);
};
