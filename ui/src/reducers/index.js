import op from 'object-path';
// import status from '../lib/statuses';

import {
  // NOTIFICATION_DISMISS,
  GET_CAMPAIGNS_REQUEST, GET_CAMPAIGNS_SUCCESS, GET_CAMPAIGNS_ERROR,
  ADD_CAMPAIGN_REQUEST, ADD_CAMPAIGN_SUCCESS, ADD_CAMPAIGN_ERROR,
  DELETE_CAMPAIGN_REQUEST, DELETE_CAMPAIGN_SUCCESS, DELETE_CAMPAIGN_ERROR,
  ADD_ARTICLE_REQUEST, ADD_ARTICLE_SUCCESS, ADD_ARTICLE_ERROR,
  DELETE_ARTICLE_REQUEST, DELETE_ARTICLE_SUCCESS, DELETE_ARTICLE_ERROR
} from '../actions';


export default function reducer(state = {}, action) {

  const campaigns = Object.assign({}, state.campaigns);
  // const errors = Object.assign({}, state.errors);

  switch (action.type) {

    /**
     * Notifications
     */
    // case NOTIFICATION_DISMISS:
    //   op.del(errors, action.id);
    //   return {...state, scraping: false, errors};


    // /**
    //  * Scrapping the Source
    //  */
    // case SCRAP_REQUEST:
    //   return {...state, scraping: true};
    //
    //
    // /**
    //  * Scrapping the URL
    //  */
    // case SCRAP_URL_REQUEST:
    //   op.set(sources, [action.sourceId, 'urls', action.urlId, 'status'], status.working);
    //   return {...state, scraping: true};
    //
    // case SCRAP_URL_SUCCESS:
    //   op.set(sources, [action.sourceId, 'urls', action.urlId, 'status'], status.ok);
    //   op.set(sources, [action.sourceId, 'urls', action.urlId, 'data', action.data.id], action.data);
    //   return {...state, scraping: false, sources};
    //
    // case SCRAP_URL_ERROR:
    //   op.set(errors, action.error.id, action.error);
    //   op.set(sources, [action.sourceId, 'urls', action.urlId, 'status'], status.error);
    //   return {...state, scraping: false, sources, errors};
    //


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


    // /**
    //  * Handling rules
    //  */
    // case SAVE_RULE_SUCCESS:
    //   op.set(sources, [action.sourceId, 'rules', action.data.id], action.data);
    //   return {...state, sources};


    // /**
    //  * Handling results
    //  */
    // case GET_RESULTS_REQUEST:
    //   op.set(sources, [action.sourceId, 'urls', action.urlId, 'gettingResults'], true);
    //   return {...state, sources};
    //
    // case GET_RESULTS_SUCCESS:
    //   op.set(sources, [action.sourceId, 'urls', action.urlId, 'gettingResults'], false);
    //   op.set(sources, [action.sourceId, 'urls', action.urlId, 'data'], action.data);
    //   return {...state, sources};
    //
    // case GET_RESULTS_ERROR:
    //   op.set(sources, [action.sourceId, 'urls', action.urlId, 'gettingResults'], false);
    //   return {...state, sources};
    //
    //
    // case SAVE_RESULT_REQUEST:
    //   op.set(sources, [action.sourceId, 'urls', action.urlId, 'gettingResults'], true);
    //   return {...state, sources};
    //
    // case SAVE_RESULT_SUCCESS:
    //
    //   console.log('reducer:');
    //   console.dir(action.data);
    //
    //   op.set(sources, [action.sourceId, 'urls', action.urlId, 'gettingResults'], false);
    //   op.set(sources, [action.sourceId, 'urls', action.urlId, 'data', action.resultId], action.data);
    //   return {...state, sources};
    //
    // case SAVE_RESULT_ERROR:
    //   op.set(sources, [action.sourceId, 'urls', action.urlId, 'gettingResults'], false);
    //   return {...state, sources};
    //
    //
    // case DELETE_RESULT_REQUEST:
    //   // op.set(sources, [action.sourceId, 'urls', action.urlId, 'gettingResults'], true);
    //   return {...state, sources};
    //
    // case DELETE_RESULT_SUCCESS:
    //   // op.set(sources, [action.sourceId, 'urls', action.urlId, 'gettingResults'], false);
    //   op.del(sources, [action.sourceId, 'urls', action.urlId, 'data', action.resultId]);
    //   return {...state, sources};
    //
    // case DELETE_RESULT_ERROR:
    //   // op.set(sources, [action.sourceId, 'urls', action.urlId, 'gettingResults'], false);
    //   return {...state, sources};
    //

    default:
      return state;
  }
}
