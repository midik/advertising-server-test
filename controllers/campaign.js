import op from 'object-path';
import Campaign from '../lib/campaign';


/**
 * Get the campaign
 * @param ctx
 */
export const get = async (ctx) => {
    const id = op.get(ctx, 'params.id');

    const item = new Campaign();
    await item.fetch(id);
    ctx.ok(item);
};


/**
 * Create new campaign
 * @param ctx
 */
export const post = async (ctx) => {

    const name = op.get(ctx, 'request.body.name');
    const status = op.get(ctx, 'request.body.status');

    // TODO validation

    const item = new Campaign();
    await item.create({name, status});
    ctx.ok(item);
};


/**
 * Update the campaign
 * @param ctx
 */
export const put = async (ctx) => {

    const id = op.get(ctx, 'params.id');
    const name = op.get(ctx, 'request.body.name');
    const enabled = op.get(ctx, 'request.body.enabled');

    // TODO validation

    const item = new Campaign();

    await item.fetch(id);
    if (!item) throw new Error('Bad campaign id');

    if (name) item.name = name;
    if (enabled) item.enabled = enabled === 'true';

    await item.save();

    ctx.ok(item);
};


/**
 * Delete the campaign
 * @param ctx
 */
export const del = async (ctx) => {
    const id = op.get(ctx, 'params.id');
    await Campaign.delete(id);
    ctx.ok();
};
