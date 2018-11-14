import React, {Component} from 'react';

import {
  Badge,
  Button
} from 'reactstrap';
import PropTypes from "prop-types";

// import Results from './Results';
// import ProgressBar from "./ProgressBar";


class Article extends Component {

  constructor(props) {
    super(props);

    this.state = {
      collapsed: true,
      sure: false
      // resultsReady: false
    };

    this.onToggle = this.onToggle.bind(this);
    this.onDeleteArticle = this.onDeleteArticle.bind(this);
  }

  onToggle() {
    this.setState({collapsed: !this.state.collapsed});

    // if (!this.state.resultsReady) {
    //   this.props.onGetResults(this.props.sourceId, this.props.id);
    // }
    // this.setState({resultsReady: true});
  }

  async onDeleteArticle() {
    if (this.state.sure) {
      this.setState({sure: false});
      await this.props.onDeleteArticle(this.props.campaignId, this.props.id);
    } else {
      this.setState({sure: true});
    }
  }


  render() {

    return (
      <div>

        <div className="row pb-1 pointer hover">
          <div className="col-md-1 text-secondary pt-2" onClick={this.onToggle} title="Click to open/close this">

            <div className="container">
              <div className="row no-gutters">
                <span className="col-6">{this.props.id}</span>
                <span className="col-6">
                  <Badge color={this.props.status.style}>{this.props.status.name}</Badge>
                </span>
              </div>
            </div>

          </div>

          <div className="col-md-9 text-muted pt-2" onClick={this.onToggle}>
            {this.props.name}
          </div>
          <div className="col-md-2 pt-1" role="group">
            <div className="pull-right">
              <Button className="btn btn-square btn-ghost-warning mr-1" size="sm" onClick={this.onEditArticle} disabled>Edit</Button>
              <Button className="btn btn-square btn-ghost-danger mr-1" size="sm" onClick={this.onDeleteArticle}>{this.state.sure ? 'Really?' : 'Delete'}</Button>
            </div>
          </div>
        </div>

      </div>
    );
  }
}


Article.propTypes = {
  id: PropTypes.string.isRequired,
  campaignId: PropTypes.string.isRequired,
  status: PropTypes.shape({
    name: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  // onEditArticle: PropTypes.func.isRequired,
  onDeleteArticle: PropTypes.func.isRequired
};

export default Article;
