import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import BandList from './BandList';
import AlbumList from './AlbumList.js';
import SongList from './SongList';
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
                <Route exact path='/bands' component={BandList} />
                <Route exact path='/albums' component={AlbumList} />
                <Route exact path='/songs' component={SongList} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={SignUp} />
              </Switch>
            </div>
          </BrowserRouter>
        )
      }
    }

    ReactDOM.render(<App />, document.getElementById('app'))
