import React, {Component} from 'react';


class ProgressBar extends Component {

  render() {

    return (
      <div className={`progress progress-bar-thin ${!this.props.visible ? "hidden" : ""}`}>
        <div className="progress-bar progress-bar-thin progress-bar-striped progress-bar-animated" role="progressbar"
             aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}} />
      </div>
    );
  }
}

// TODO
ProgressBar.propTypes = {};

export default ProgressBar;
