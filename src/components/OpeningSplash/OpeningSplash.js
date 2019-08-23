import React, {Component} from 'react';
import classes from './OpeningSplash.css';
import Logo from '../Logo/Logo';
//import Auxilliary from '../../hoc/Auxilliary';
import Navigation from '../Navigation/Navigation';

class OpeningSplash extends Component {

    componentDidMount() {
        
    }
    

    render() {

        const wowClasses = [classes.BlackBackground, classes.NavigationContainer];
        if (this.props.initial) {
            wowClasses.push(classes.BlackBackgroundInitialOpen);
        } else {
            if(this.props.open) {
                wowClasses.push(classes.BlackBackgroundOpen);
            } else {
                wowClasses.push(classes.BlackBackgroundClose);
            }
        }

        return (
            <div className={classes.Container}>
                <div className={classes.OpeningSplash}>
                    <Logo choiceHandler={this.props.choiceHandler}/>
                </div>
                <div className={wowClasses.join(' ')}>
                    <Navigation choiceHandler={this.props.choiceHandler}/>
                </div>
            </div>
        );
    }
};

export default OpeningSplash;