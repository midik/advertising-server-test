/* eslint no-await-in-loop: off */

import op from 'object-path';
import db from '../db';
import Campaign from './campaign';


class Campaigns {

    /**
     * Fetch all campaigns from the db
     */
    static async getAll() {

        const result = {};

        const dbItems = await db.campaign.findAll({
            include: [
                {model: db.article, as: 'article', required: false}
            ]
        });

        for (const dbItem of dbItems) {
            const item = new Campaign();
            await item.fetch(dbItem.id);
            // await item.fetchArticles({shallow: true});
            op.set(result, [dbItem.id], item);
        }

        return result;
    }
}


export default Campaigns;
