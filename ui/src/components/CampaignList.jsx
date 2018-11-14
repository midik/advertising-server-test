import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Button
} from 'reactstrap';

import Campaign from './Campaign';
import AddCampaign from './AddCampaign';
// import Error from './Error';
import ProgressBar from './ProgressBar';


class CampaignList extends Component {

  componentDidMount() {
    this.props.onRefresh();
  }

  render() {

    const campaignItems = Object.entries(this.props.campaigns).map(([id, campaign]) => (
      <Campaign
        key={id}
        id={id}
        title={campaign.title}
        articles={campaign.articles}
        status={campaign.status}
        collapsed
        onDeleteCampaign={this.props.onDeleteCampaign}
        onSaveArticle={this.props.onSaveArticle}
        onDeleteArticle={this.props.onDeleteArticle}
      />)
    );

    const noCampaigns = (
      <div className="row">
        <div className="col-md-12 loading">No campaigns yet... &nbsp;
          <Button className="btn btn-square btn-info" onClick={this.props.onRefresh}>Update</Button>
        </div>
      </div>
    );

    return (
      <div className="container-fluid pt-3">

        {/*<Error errors={this.props.errors} onDismissNotification={this.props.onDismissNotification}/>*/}

        <ProgressBar visible={this.props.gettingCampaigns}/>

        {campaignItems.length ? campaignItems : (!this.props.gettingCampaigns ? noCampaigns : '')}

        <AddCampaign onSaveCampaign={this.props.onSaveCampaign} />

      </div>
    );
  }
}


CampaignList.propTypes = {
  campaigns: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.object.isRequired,
    articles: PropTypes.object.isRequired
  })).isRequired,
  onRefresh: PropTypes.func.isRequired,
  onSaveCampaign: PropTypes.func.isRequired,
  onDeleteCampaign: PropTypes.func.isRequired,
  onSaveArticle: PropTypes.func.isRequired,
  onDeleteArticle: PropTypes.func.isRequired,
  gettingCampaigns: PropTypes.bool.isRequired
};

export default CampaignList;
