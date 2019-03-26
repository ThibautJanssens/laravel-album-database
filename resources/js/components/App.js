import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Albums from './Albums';
import Album from './Album';
import newAlbum from './newAlbum';
import Login from './Login';
import SignUp from './SignUp';

class App extends Component {
    render () {
        return (
          <BrowserRouter>
            <div>
              <Header />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/albums' component={Albums} />
                <Route exact path='/newAlbum' component={newAlbum} />
                <Route exact path='/album/:id' component={Album} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={SignUp} />
              </Switch>
            </div>
          </BrowserRouter>
        )
      }
    }

    ReactDOM.render(<App />, document.getElementById('app'))
