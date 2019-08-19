import React, {Component} from 'react';
import classes from './App.css';
import Main from './containers/Main';
import WOW from 'wowjs';

class App extends Component {

  main = React.createRef();

  componentDidMount() {

    new WOW
        .WOW( {
          // not using mutation observer because we are not adding new elements dynamically
          live: false,
          // callback: (e) => {
          //   if(e.dataset.type === "section") {
          //     setTimeout(() => {
          //       this.main.current.handleChoice(e.dataset.id);
          //     }, 1000);
          //   }
          // }
        })
        .init();
}

  render() {

    return (
      <div className={classes.App}>
        <Main ref={this.main}/>
      </div>
    );
  }
}

export default App;
