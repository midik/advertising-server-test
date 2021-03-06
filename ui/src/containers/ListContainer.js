import {connect} from 'react-redux';

import {
  getCampaigns,
  addCampaign,
  deleteCampaign,
  addArticle,
  deleteArticle
} from '../actions';

import {getCampaignsList} from '../lib/campaigns';

import CampaignList from '../components/CampaignList';


function mapStateToProps(state) {
  return {
    campaigns: getCampaignsList(state),
    gettingCampaigns: state.gettingCampaigns,
    errors: state.errors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // onStart: (id) => dispatch(scrapSource(id)),
    // onStartUrl: (sourceId, urlId) => dispatch(scrapUrl(sourceId, urlId)),
    onSaveCampaign: (name) => dispatch(addCampaign(name)),
    onDeleteCampaign: (id) => dispatch(deleteCampaign(id)),
    onSaveArticle: (campaignId, name, content) => dispatch(addArticle(campaignId, name, content)),
    onDeleteArticle: (campaignId, articleId) => dispatch(deleteArticle(campaignId, articleId)),
    onRefresh: () => dispatch(getCampaigns()),
    // onGetResults: (sourceId, urlId) => dispatch(getResults(sourceId, urlId)),
    // onSaveResult: (sourceId, urlId, resultId, data) => dispatch(saveResult(sourceId, urlId, resultId, data)),
    // onDeleteResult: (sourceId, urlId, resultId) => dispatch(deleteResult(sourceId, urlId, resultId)),
    // onDismissNotification: (id) => dispatch(dismissNotification(id))
  };
}

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(CampaignList);

export default ListContainer;
