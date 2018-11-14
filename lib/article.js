import db, {connection} from '../db';
import log from './log';


class Article {

    #dbItem;

    id;
    name;
    enabled;
    content;
    campaignId;
    loaded = 0;
    viewed = 0;
    read = 0;


    constructor() {}


    /**
     * Fetch existing article from the db
     * @param id
     */
    async fetch(id) {

        const item = await db.article.findById(id);
        if (!item) throw new Error('Article not found');

        this.#dbItem = item;

        this.id = item.id;
        this.campaignId = item.campaignId;
        this.enabled = item.enabled;
        this.name = item.name;
        this.content = item.content;
    }


    /**
     * Create new Article instance and persist it to the db
     * @param campaignId
     * @param name
     * @param content
     */
    async create({campaignId, name, content}) {

        // const transaction = await connection.transaction();

        try {
            const item = await db.article.build({campaignId, name, content});

            this.#dbItem = item;
            await this.#dbItem.save();

            this.id = item.id;
            this.campaignId = item.campaignId;
            this.enabled = item.enabled;
            this.name = item.name;
            this.content = item.content;

            // transaction.commit();
        } catch (e) {
            console.error(e);
            // transaction.rollback();
        }
    }


    /**
     * Remove the article
     * @param id
     */
    static async delete(id) {
        if (!id) throw new Error('Bad article id');
        await db.article.destroy({
            where: {id}
        });
    }


    /**
     * Persist the article to the database
     */
    async save() {
        this.#dbItem.id = this.id;
        this.#dbItem.campaignId = this.campaignId;
        this.#dbItem.enabled = this.enabled;
        this.#dbItem.name = this.name;
        this.#dbItem.content = this.content;

        await this.#dbItem.save();
    }
}

export default Article;
