import op from 'object-path';

import {
  GET_CAMPAIGNS_REQUEST, GET_CAMPAIGNS_SUCCESS, GET_CAMPAIGNS_ERROR,
  ADD_CAMPAIGN_SUCCESS,
  DELETE_CAMPAIGN_SUCCESS,
  ADD_ARTICLE_SUCCESS,
  DELETE_ARTICLE_SUCCESS
} from '../actions';


export default function reducer(state = {}, action) {

  const campaigns = Object.assign({}, state.campaigns);

  switch (action.type) {

    /**
     * Fetching campaigns
     */
    case GET_CAMPAIGNS_REQUEST:
      return {...state, gettingCampaigns: true};

    case GET_CAMPAIGNS_SUCCESS:
      return {...state, gettingCampaigns: false, campaigns: action.data};

    case GET_CAMPAIGNS_ERROR:
      return {...state, gettingCampaigns: false, error: action.error};

    /**
     * Handling a single campaign
     */
    case ADD_CAMPAIGN_SUCCESS:
      op.set(campaigns, [action.data.id], action.data);
      return {...state, campaigns};

    case DELETE_CAMPAIGN_SUCCESS:
      op.del(campaigns, [action.id]);
      return {...state, campaigns};

    /**
     * Handling articles
     */
    case ADD_ARTICLE_SUCCESS:
      op.set(campaigns, [action.campaignId, 'articles', action.data.id], action.data);
      return {...state, campaigns};

    case DELETE_ARTICLE_SUCCESS:
      op.del(campaigns, [action.campaignId, 'articles', action.articleId]);
      return {...state, campaigns};


    // more to come

    default:
      return state;
  }
}
