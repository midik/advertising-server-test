import React, {Component} from 'react';
import PropTypes from "prop-types";

import {
  Badge,
  Button
} from 'reactstrap';

import status from '../lib/statuses';
import Article from './Article';
import AddArticle from './AddArticle';


class Campaign extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: props.status,
      collapsed: true,
      sure: false,
      activeTab: '1'
    };

    this.toggle = this.toggle.bind(this);
    this.onToggle = this.onToggle.bind(this);
    this.onDeleteCampaign = this.onDeleteCampaign.bind(this);
  }

  onToggle() {
    this.setState({collapsed: !this.state.collapsed});
  }

  onDeleteCampaign() {
    if (this.state.sure) {
      this.props.onDeleteCampaign(this.props.id);
      this.setState({sure: false});
    } else {
      this.setState({sure: true});
    }
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }


  render() {

    const articleItems = Object.entries(this.props.articles).map(([id, article]) =>
      (<Article
        key={id}
        id={id}
        campaignId={this.props.id}
        name={article.name}
        content={article.content}
        status={article.enabled ? status.enabled : status.disabled}
        onSaveArticle={this.props.onSaveArticle}
        onDeleteArticle={this.props.onDeleteArticle}
      />)
    );

    return (
      <div className="row">
        <div className="col-md-12">

          <div className="row hover pt-2">

            <div className="col-md-1 text-secondary pt-1" onClick={this.onToggle} title="Click to open/close this">

              <div className="container">
                <div className="row no-gutters">
                  <Badge color={this.props.status.style}>{this.props.status.name}</Badge>
                </div>
              </div>

            </div>

            <div className="col pb-1 pointer" onClick={this.onToggle}>
              {this.props.title}
            </div>

            <div className="col pb-1" role="group">
              <div className="pull-right">
                <Button className="btn btn-square btn-ghost-warning mr-2" size="sm" onClick={this.onEditCampaign} disabled>Edit</Button>
                <Button className="btn btn-square btn-ghost-danger mr-2" size="sm" onClick={this.onDeleteCampaign}>{this.state.sure ? 'Really?' : 'Delete'}</Button>
              </div>
            </div>
          </div>

          <div className="row mt-1 mb-1">
            <div className={`col-md-12 ${this.state.collapsed ? "collapse" : ""}`}>

              {articleItems.length ? articleItems :
                <div className="col-md-12 loading text-center">No articles here</div>
              }
              <AddArticle campaignId={this.props.id} onSaveArticle={this.props.onSaveArticle} />

            </div>
          </div>
        </div>
      </div>

    );
  }
}


Campaign.propTypes = {
  id: PropTypes.string.isRequired,
  status: PropTypes.shape({
    name: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
  }).isRequired,
  articles: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    enabled: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  })).isRequired,
  onDeleteCampaign: PropTypes.func.isRequired,
  onSaveArticle: PropTypes.func.isRequired,
  onDeleteArticle: PropTypes.func.isRequired
};

export default Campaign;
