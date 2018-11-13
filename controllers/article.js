import op from 'object-path';
import Article from '../lib/article';


/**
 * Get the article
 * @param ctx
 */
export const get = async (ctx) => {
    const id = op.get(ctx, 'params.id');

    const item = new Article();
    await item.fetch(id);
    ctx.ok(item);
};


/**
 * Create new article
 * @param ctx
 */
export const post = async (ctx) => {

    const campaignId = op.get(ctx, 'params.id');
    const name = op.get(ctx, 'request.body.name');
    const content = op.get(ctx, 'request.body.content');

    // TODO validation

    const item = new Article();
    await item.create({campaignId, name, content});
    ctx.ok(item);
};


/**
 * Update the article
 * @param ctx
 */
export const put = async (ctx) => {

    const name = op.get(ctx, 'request.body.name');
    const content = op.get(ctx, 'request.body.content');

    // TODO validation

    const item = new Article();
    if (!item) throw new Error('Bad article id');

    if (!name) item.name = name;
    if (!content) item.content = content;

    await item.fetch(id);
    await item.save();

    ctx.ok(item);
};


/**
 * Delete the article
 * @param ctx
 */
export const del = async (ctx) => {
    const id = op.get(ctx, 'params.id');
    await Article.delete(id);
    ctx.ok();
};
