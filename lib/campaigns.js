/* eslint no-await-in-loop: off */

import op from 'object-path';
import db from '../db';
import Campaign from './campaign';
import Article from './article';


class Campaigns {

    /**
     * Fetch all campaigns from the db
     */
    static async getAll() {

        const result = {};

        const dbCampaigns = await db.campaign.findAll({
            include: [
                {model: db.article, as: 'articles', required: false}
            ]
        });

        for (const dbCampaign of dbCampaigns) {
            const campaign = new Campaign();
            await campaign.fetch(dbCampaign.id);

            for (const dbArticle of dbCampaign.articles) {
                const article = new Article();
                await article.fetch(dbArticle.id);
                op.set(campaign, ['articles', dbArticle.id], article);
            }

            op.set(result, [dbCampaign.id], campaign);
        }

        return result;
    }
}


export default Campaigns;
