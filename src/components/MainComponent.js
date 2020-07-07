import React, { Component } from 'react';
import FillingBlank from './FillingBlank';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';



class Main extends Component {

    render() {
        return (
            <div>
              <Header />
              <TransitionGroup>
                <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                  <Switch>
                    <Route exact path="/FillingBlank" component={() => <FillingBlank number = "1"/>} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
              <Footer />
            </div>
          );
    }
}

export default Main;