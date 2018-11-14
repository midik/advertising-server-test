import React, {Component} from 'react';

import {
  Button
} from 'reactstrap';
import AddCampaign from "./AddCampaign";


class AddArticle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      isValid: false,
      link: ''
    };

    this.onToggle = this.onToggle.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onSaveUrl = this.onSaveUrl.bind(this);
  }

  onToggle() {
    this.setState({collapsed: !this.state.collapsed});
  }

  onNameChange(e) {
    this.setState({
      link: e.target.value,
      isValid: !!e.target.value
    });
  }

  async onSaveUrl() {
    await this.props.onSaveUrl(this.props.sourceId, this.state.link);
    this.setState({collapsed: true});
  }


  render() {

    return (

      <div className="mt-1">
        <div className={`row mb-1 ${!this.state.collapsed ? "collapse" : ""}`}>
          <div className="col-md-12">
            <Button className="btn btn-sm btn-square btn-outline-success pull-right" onClick={this.onToggle}>Add URL</Button>
          </div>
        </div>

        <div className={`row mb-1 ${this.state.collapsed ? "collapse" : ""}`}>
          <div className="col-md-12">

            <form className="form-row">

              <div className="col-8 offset-1">
                <label className="sr-only" htmlFor="urlLink">Link</label>
                <input type="text" className={`form-control mb-2 mr-sm-2 ${this.state.isValid ? "is-valid" : "is-invalid"}`}
                       id="urlLink" placeholder="Link" onChange={this.onNameChange} value={this.state.link} />
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">Please provide a link</div>
              </div>

              <div className="col-3" role="group">
                <div className="pull-right">
                  <Button className="btn btn-square btn-sm btn-outline-success mb-2 pull-right" disabled={!this.state.isValid} onClick={this.onSaveUrl}>&nbsp;OK&nbsp;</Button>
                  <Button className="btn btn-square btn-sm btn-ghost-danger mb-2 mr-1 pull-right" onClick={this.onToggle}>Cancel</Button>
                </div>
              </div>

            </form>

          </div>
        </div>
      </div>
    );
  }
}

// TODO
AddArticle.propTypes = {};

export default AddArticle;
