import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bulma/css/bulma.css';
import {HomeContainer} from './containers/HomeContainer';
import {MovieDetail} from './pages/MovieDetail';
import {NotFound} from './pages/NotFound';

class App extends Component {
  state = { 
    lastPage: 1,
  }

  _updateLastPage = (lastPage) =>
  {
    this.setState({lastPage});
  }
  render()
  { 
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={HomeContainer}/>
          <Route path='/detail/:id' component={MovieDetail} />
          <Route component={NotFound}/>
        </Switch>
      </div>
    );    
    
  }
}

export default App;
