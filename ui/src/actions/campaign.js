import op from 'object-path';
// import {scrapUrl} from './url';
import RuntimeError from "../lib/runtimeError";
// import store from '../store';
import Backend from '../lib/backend';

// export const SCRAP_REQUEST = 'SCRAP_REQUEST';

export const ADD_CAMPAIGN_REQUEST = 'ADD_CAMPAIGN_REQUEST';
export const ADD_CAMPAIGN_SUCCESS = 'ADD_CAMPAIGN_SUCCESS';
export const ADD_CAMPAIGN_ERROR = 'ADD_CAMPAIGN_ERROR';

export const SAVE_CAMPAIGN_REQUEST = 'SAVE_CAMPAIGN_REQUEST';
export const SAVE_CAMPAIGN_SUCCESS = 'SAVE_CAMPAIGN_SUCCESS';
export const SAVE_CAMPAIGN_ERROR = 'SAVE_CAMPAIGN_ERROR';

export const DELETE_CAMPAIGN_REQUEST = 'DELETE_CAMPAIGN_REQUEST';
export const DELETE_CAMPAIGN_SUCCESS = 'DELETE_CAMPAIGN_SUCCESS';
export const DELETE_CAMPAIGN_ERROR = 'DELETE_CAMPAIGN_ERROR';


export function addCampaign(name) {

  return async (dispatch) => {
    try {
      dispatch({type: ADD_CAMPAIGN_REQUEST});

      console.info(`Adding campaign...`);
      const response = await Backend.post(`/campaign/`, {name});

      const data = op.get(response.data);
      dispatch({type: ADD_CAMPAIGN_SUCCESS, data});

    } catch (error) {
      console.error(error);
      dispatch({type: ADD_CAMPAIGN_ERROR, error: new RuntimeError({error})});
    }
  };
}

export function deleteCampaign(id) {

  return async (dispatch) => {
    try {
      dispatch({type: DELETE_CAMPAIGN_REQUEST});

      console.info(`Deleting campaign #${id} ...`);
      await Backend.delete(`/campaign/${id}`);

      dispatch({type: DELETE_CAMPAIGN_SUCCESS, id});

    } catch (error) {
      console.error(error);
      dispatch({type: DELETE_CAMPAIGN_ERROR, id, error: new RuntimeError({error})});
    }
  };
}
