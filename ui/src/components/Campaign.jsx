import React, {Component} from 'react';
import classnames from 'classnames';

import {
  Badge,
  Button,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import status from '../lib/statuses';
import Article from './Article';
// import RuleItem from './RuleItem';
import AddArticle from './AddArticle';
// import Options from './Options';


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
    this.onStart = this.onStart.bind(this);
    this.onDeleteSource = this.onDeleteSource.bind(this);
  }

  onToggle() {
    this.setState({collapsed: !this.state.collapsed});
  }

  onStart() {
    this.props.onStart(this.props.id);
  }

  onDeleteSource() {
    if (this.state.sure) {
      this.props.onDeleteSource(this.props.id);
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

    const urlLines = Object.entries(this.props.articles).map(([id, article]) =>
      (<Article
        key={id}
        id={id}
        campaignId={this.props.id}
        name={article.name}
        gettingResults={article.gettingResults || false}
        status={article.status || status.idle}
        onSaveArticle={this.props.onSaveArticle}
        onDeleteArticle={this.props.onDeleteArticle}
      />)
    );

    return (
      <div className="row">
        <div className="col-md-12">

          <div className="row hover">
            <div className="col pb-1 pointer" onClick={this.onToggle}>
              <span>{this.props.title}</span>

              <div className="text-muted">
                {/* <Badge color={this.state.status.style}>{this.state.status.name}</Badge> */}
              </div>
            </div>

            <div className="col pt-2" role="group">
              <div className="pull-right">
                <Button className="btn btn-square btn-ghost-warning mr-2" size="sm" onClick={this.onEditCampaign} disabled>Edit</Button>
                <Button className="btn btn-square btn-ghost-danger mr-2" size="sm" onClick={this.onDeleteCampaign}>{this.state.sure ? 'Really?' : 'Delete'}</Button>
                {/* <Button className="btn btn-square btn-outline-info" size="sm" onClick={this.onStart}>Scrap</Button> */}
              </div>
            </div>
          </div>

          <div className="row mt-1 mb-1">
            <div className={`col-md-12 ${this.state.collapsed ? "collapse" : ""}`}>

              <Nav tabs>
                <NavItem>
                  <NavLink className={classnames({active: this.state.activeTab === '1'})} onClick={() => { this.toggle('1'); }}>Articles</NavLink>
                </NavItem>

                {/*<NavItem>*/}
                  {/*<NavLink className={classnames({active: this.state.activeTab === '2'})} onClick={() => { this.toggle('2'); }}>Rule</NavLink>*/}
                {/*</NavItem>*/}
                {/*<NavItem>*/}
                  {/*<NavLink className={classnames({active: this.state.activeTab === '3'})} onClick={() => { this.toggle('3'); }}>Options</NavLink>*/}
                {/*</NavItem>*/}

              </Nav>
              <TabContent activeTab={this.state.activeTab}>

                <TabPane tabId="1">
                  {urlLines.length ? urlLines :
                    <div className="col-md-12 loading">No URLs here</div>
                  }
                  <AddArticle sourceId={this.props.id} onSaveUrl={this.props.onSaveUrl} />
                </TabPane>

                <TabPane tabId="2">
                  <Article
                    campaignId={this.props.id}
                    article={this.props.article}
                    onSaveRule={this.props.onSaveArticle}
                  />
                </TabPane>

                <TabPane tabId="3">
                  {/* <Options /> */}Nothing Here Yet
                </TabPane>

              </TabContent>

            </div>
          </div>
        </div>
      </div>

    );
  }
}

// TODO
Campaign.propTypes = {};

export default Campaign;
