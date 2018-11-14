import React, {Component} from 'react';
import {AlertList} from 'react-bs-notifier';


class Error extends Component {

  constructor() {
    super();

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(target) {
    const {id} = target;
    // this.props.onDismissNotification(id);
  }

  render() {

    const alerts = Object.values(this.props.errors).map((error) => ({
      id: error.id,
      headline: 'Error!',
      type: "danger",
      message: error.message,
      timeout: 5000
    }));

    return (
      <AlertList position="bottom-right" alerts={alerts} onDismiss={this.onDismiss}/>
    );
  }
}

// TODO
Error.propTypes = {};

export default Error;
