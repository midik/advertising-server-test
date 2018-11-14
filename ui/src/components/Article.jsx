import React, {Component} from 'react';

import {
  Badge,
  Button
} from 'reactstrap';
import PropTypes from "prop-types";

class Article extends Component {

  constructor(props) {
    super(props);

    this.state = {
      collapsed: true,
      sure: false
    };

    this.onToggle = this.onToggle.bind(this);
    this.onDeleteArticle = this.onDeleteArticle.bind(this);
  }

  onToggle() {
    this.setState({collapsed: !this.state.collapsed});
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

          <div className="col-md-7 text-muted pt-2" onClick={this.onToggle}>
            {this.props.name}
          </div>

          <div className="col-md-2 text-muted pt-2" onClick={this.onToggle} title="Loaded / Viewed / Read">
            {this.props.loaded} / {this.props.viewed} / {this.props.read}
          </div>

          <div className="col-md-2 pt-1" role="group">
            <div className="pull-right">
              <Button className="btn btn-square btn-ghost-warning mr-1" size="sm" onClick={this.onEditArticle} disabled>Edit</Button>
              <Button className="btn btn-square btn-ghost-danger mr-1" size="sm" onClick={this.onDeleteArticle}>{this.state.sure ? 'Really?' : 'Delete'}</Button>
            </div>
          </div>
        </div>

        <div className={`col-md-12 mt-2 ${this.state.collapsed ? "collapse" : ""}`}>
          <div className="container-fluid">

            <textarea disabled className="form-control" id="content" rows="5" onChange={this.onContentChange} defaultValue={this.props.content} />

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
  loaded: PropTypes.number.isRequired,
  viewed: PropTypes.number.isRequired,
  read: PropTypes.number.isRequired,
  // onEditArticle: PropTypes.func.isRequired,
  onDeleteArticle: PropTypes.func.isRequired
};

export default Article;
