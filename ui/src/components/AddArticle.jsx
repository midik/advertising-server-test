import React, {Component} from 'react';

import {
  Button
} from 'reactstrap';
import PropTypes from "prop-types";


class AddArticle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      isValid: false,
      name: ''
    };

    this.onToggle = this.onToggle.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.onSaveArticle = this.onSaveArticle.bind(this);
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

  onContentChange(e) {
    this.setState({
      content: e.target.value
    });
  }

  async onSaveArticle() {
    await this.props.onSaveArticle(this.props.campaignId, this.state.name, this.state.content);
    this.setState({collapsed: true});
  }


  render() {

    return (

      <div className="mt-1">
        <div className={`row mb-1 ${!this.state.collapsed ? "collapse" : ""}`}>
          <div className="col-md-12">
            <Button className="btn btn-sm btn-square btn-outline-success pull-right" onClick={this.onToggle}>Add article</Button>
          </div>
        </div>

        <div className={`row mb-1 ${this.state.collapsed ? "collapse" : ""}`}>
          <div className="col-md-12">

            <form className="form-row">

              <div className="col-8 offset-1">
                <label className="sr-only" htmlFor="name">Name</label>
                <input type="text" className={`form-control mb-2 mr-sm-2 ${this.state.isValid ? "is-valid" : "is-invalid"}`}
                       id="name" placeholder="Name" onChange={this.onNameChange} value={this.state.name} />
                {/* <div className="valid-feedback">Looks good!</div> */}
                {/* <div className="invalid-feedback">Please provide a name</div> */}
                <textarea className="form-control" id="content" rows="5" onChange={this.onContentChange}>{this.state.content}</textarea>
              </div>

              <div className="col-3" role="group">
                <div className="pull-right">
                  <Button className="btn btn-square btn-sm btn-outline-success mb-2 pull-right" disabled={!this.state.isValid} onClick={this.onSaveArticle}>&nbsp;OK&nbsp;</Button>
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


AddArticle.propTypes = {
  campaignId: PropTypes.string.isRequired,
  onSaveArticle: PropTypes.func.isRequired
};

export default AddArticle;
