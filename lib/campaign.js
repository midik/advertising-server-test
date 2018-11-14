import db, {connection} from '../db';
import log from './log';
// import Article from './article';


class Campaign {

    #dbItem;

    id;
    name;
    enabled;

    articles = {};


    constructor() {}


    /**
     * Fetch existing campaign from the db
     * @param id
     */
    async fetch(id) {

        const item = await db.campaign.findById(id);
        if (!item) throw new Error('Campaign not found');

        this.#dbItem = item;

        this.id = item.id;
        this.campaignId = item.campaignId;
        this.name = item.name;
        this.enabled = item.enabled;
    }


    /**
     * Create new Campaign instance and persist it to the db
     * @param name
     * @param content
     */
    async create({name, content}) {

        const item = await db.campaign.build({name, content});

        this.#dbItem = item;
        await this.#dbItem.save();

        this.id = item.id;
        this.campaignId = item.campaignId;
        this.enabled = item.enabled;
        this.name = item.name;
    }


    /**
     * Remove the campaign
     * @param id
     */
    static async delete(id) {
        if (!id) throw new Error('Bad campaign id');
        await db.campaign.destroy({
            where: {id}
        });
    }


    /**
     * Persist the campaign to the database
     */
    async save() {
        this.#dbItem.id = this.id;
        this.#dbItem.enabled = this.enabled;
        this.#dbItem.name = this.name;

        await this.#dbItem.save();
    }
}

export default Campaign;
