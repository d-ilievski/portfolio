import React, {Component} from 'react';
import classes from './AboutGraph.css';
import WOW from 'wowjs';

class AboutGraph extends Component {

    componentDidMount() {
        new WOW
        .WOW()
        .init();
    }
    

    generateGraphOptions = () => {
        if (this.props.active === 1) {
            return ([<div className={[classes.GraphOptions, 'wow slideInDown'].join(' ')} key='1'
                        data-wow-delay="2s">
                    <span className={[classes.GraphOption, classes.GraphOptionActive].join(' ')} onClick={() => this.props.choiceHandler(1)}>
                        DEVELOPER
                    </span>

                    <span className={classes.VerticalLine}>|</span>

                    <span className={classes.GraphOption} onClick={() => this.props.choiceHandler(2)}>
                        GRAPHIC DESIGNER
                    </span></div>]
            );
        } else if (this.props.active === 2) {
            return ([<div className={classes.GraphOptions} key='2'>
                    <span className={classes.GraphOption} onClick={() => this.props.choiceHandler(1)}>
                        DEVELOPER
                    </span>

                    <span className={classes.VerticalLine}>|</span>

                    <span className={[classes.GraphOption, classes.GraphOptionActive].join(' ')} onClick={() => this.props.choiceHandler(2)}>
                        GRAPHIC DESIGNER
                    </span></div>]
            );
        } else 
            return 'Error';
        }
    
        generateGraph = () => {
            if (this.props.active === 1) {
                return (
                <div className={classes.GraphChart}>
                    
                </div>
                );
            } else if (this.props.active === 2) {
                return (
                    <div className={classes.GraphChart}>
                        
                    </div>
                    );
            } else 
                return 'Error';
            }    
        

    render() {
    return (
        <div className={classes.Graph}>
        {this.generateGraphOptions()}
        {this.generateGraph()}
        </div>
    );
    }
};

export default AboutGraph;