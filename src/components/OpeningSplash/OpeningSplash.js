import React, {Component} from 'react';
import classes from './OpeningSplash.css';
import Logo from '../Logo/Logo';
//import Auxilliary from '../../hoc/Auxilliary';
import Navigation from '../Navigation/Navigation';

class OpeningSplash extends Component {

    componentDidMount() {
        
    }
    

    render() {
        return (
            <div className={classes.Container}>
                <div className={classes.OpeningSplash}>
                    <Logo/>
                </div>
                <div className={classes.BlackBackground}>
                    <Navigation choiceHandler={this.props.choiceHandler}/>
                </div>
            </div>
        );
    }
};

export default OpeningSplash;