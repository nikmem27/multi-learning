import React, { Component } from 'react';
import FillingBlank from './FillingBlank';
import Login from './LoginComponent';
import Header from './HeaderComponent';
import Sidebar from './Sidebar';

import { Container } from 'reactstrap';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarIsOpen: true
    }
    this.toggleSideBar = this.toggleSideBar.bind(this);
  }

  toggleSideBar() {
    this.setState({
      sidebarIsOpen: !this.state.sidebarIsOpen
    })
  }

  render() {
    return (
      <div>
        <Header sidebarIsOpen={this.state.sidebarIsOpen} toggleSideBar={this.toggleSideBar} />
        <div className="App wrapper">
          <Sidebar isOpen={this.state.sidebarIsOpen} />
          <Container fluid className={"content"}>
            <TransitionGroup>
              <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                <Switch>
                  <Route exact path="/fillingblank/:number" component={FillingBlank} />
                  <Route exact path="/login" component={Login} />
                  {/*<Redirect to="/fillingblank" />*/}
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </Container>
          {/*<Footer />*/}
        </div>
      </div>
    );
  }
}

export default withRouter(Main);