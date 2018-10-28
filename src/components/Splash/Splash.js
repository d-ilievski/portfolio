import React, {Component} from 'react';
import classes from './Splash.css';

class Splash extends Component {

    state = {}

    render() {

        return (
            <div
                className={classes.Splash}
                style={{
                backgroundColor: this.props.boja,
            }}>
                {this.props.children}
            </div>
        );
    }
}

export default Splash;