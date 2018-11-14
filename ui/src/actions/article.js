import op from 'object-path';
import Backend from '../lib/backend';
import RuntimeError from '../lib/runtimeError';

export const ADD_ARTICLE_REQUEST = 'ADD_ARTICLE_REQUEST';
export const ADD_ARTICLE_SUCCESS = 'ADD_ARTICLE_SUCCESS';
export const ADD_ARTICLE_ERROR = 'ADD_ARTICLE_ERROR';

export const SAVE_ARTICLE_REQUEST = 'SAVE_ARTICLE_REQUEST';
export const SAVE_ARTICLE_SUCCESS = 'SAVE_ARTICLE_SUCCESS';
export const SAVE_ARTICLE_ERROR = 'SAVE_ARTICLE_ERROR';

export const DELETE_ARTICLE_REQUEST = 'DELETE_ARTICLE_REQUEST';
export const DELETE_ARTICLE_SUCCESS = 'DELETE_ARTICLE_SUCCESS';
export const DELETE_ARTICLE_ERROR = 'DELETE_ARTICLE_ERROR';


export function addArticle(campaignId, name, content) {

  return async (dispatch) => {
    try {
      dispatch({type: ADD_ARTICLE_REQUEST, campaignId});

      console.info(`Adding article...`);
      const response = await Backend.post(`/article`, {
        campaignId,
        name,
        content
      });

      const data = op.get(response.data);
      dispatch({type: ADD_ARTICLE_SUCCESS, campaignId, data});

    } catch (error) {
      console.error(error);
      dispatch({type: ADD_ARTICLE_ERROR, campaignId, error: new RuntimeError({error})});
    }
  };
}

export function deleteArticle(campaignId, articleId) {

  return async (dispatch) => {
    try {
      dispatch({type: DELETE_ARTICLE_REQUEST, campaignId, articleId});

      console.info(`Deleting the article #${articleId} from campaign #${campaignId}...`);
      await Backend.delete(`/article/${articleId}`);

      dispatch({type: DELETE_ARTICLE_SUCCESS, campaignId, articleId});

    } catch (error) {
      console.error(error);
      dispatch({type: DELETE_ARTICLE_ERROR, campaignId, articleId, error: new RuntimeError({error})});
    }
  };
}

