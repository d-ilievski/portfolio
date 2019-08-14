import React, {Component} from 'react';
import classes from './App.css';
import Main from './containers/Main';
import WOW from 'wowjs';

class App extends Component {

  componentDidMount() {
    new WOW
        .WOW( {
          // not using mutation observer because we are not adding new elements dynamically
          live: false
        })
        .init();
}

  render() {

    return (
      <div className={classes.App}>
        <Main/>
      </div>
    );
  }
}

export default App;
