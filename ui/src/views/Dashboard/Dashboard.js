import React, {Component} from 'react';
import {
  Card,
  CardBody,
  Col,
  Row
} from 'reactstrap';

import ListContainer from "../../containers/ListContainer";


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardBody>
                <ListContainer sources={this.state.sources} onStart={this.onStart} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
