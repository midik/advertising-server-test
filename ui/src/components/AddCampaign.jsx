import React, {Component} from 'react';

import {
  Button
} from 'reactstrap';
import PropTypes from "prop-types";


class AddCampaign extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      isValid: false,
      name: ''
    };

    this.onToggle = this.onToggle.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onSaveCampaign = this.onSaveCampaign.bind(this);
  }

  onToggle() {
    this.setState({collapsed: !this.state.collapsed});
  }

  onNameChange(e) {
    this.setState({
      name: e.target.value,
      isValid: !!e.target.value
    });
  }

  async onSaveCampaign() {
    await this.props.onSaveCampaign(this.state.name);
    this.setState({collapsed: true});
  }


  render() {

    return (

      <div>
        <div className={`row mb-1 ${!this.state.collapsed ? "collapse" : ""}`}>
          <div className="col-md-12">
            <Button className="btn btn-square btn-outline-success pull-right" size="sm" onClick={this.onToggle}>Add Campaign</Button>
          </div>
        </div>

        <div className={`row mb-1 ${this.state.collapsed ? "collapse" : ""}`}>
          <div className="col-md-12">

            <form className="form-row">

              <div className="col-7">
                <label className="sr-only" htmlFor="campaignName">Name</label>
                <input type="text" className={`form-control mb-2 mr-sm-2 ${this.state.isValid ? "is-valid" : "is-invalid"}`}
                       id="campaignName" placeholder="Campaign name" onChange={this.onNameChange} value={this.state.name}/>
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">Please provide a name</div>

              </div>

              <div className="col-5" role="group">
                <div className="pull-right">
                  <Button className="btn btn-square btn-outline-success mb-2 pull-right" size="sm" disabled={!this.state.isValid} onClick={this.onSaveCampaign}>&nbsp;OK&nbsp;</Button>
                  <Button className="btn btn-square btn-ghost-danger mb-2 mr-1 pull-right" size="sm" onClick={this.onToggle}>Cancel</Button>
                </div>
              </div>

            </form>

          </div>
        </div>
      </div>
    );
  }
}


AddCampaign.propTypes = {
  onSaveCampaign: PropTypes.func.isRequired
};

export default AddCampaign;
