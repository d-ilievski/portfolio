import React, {Component} from 'react';
import classes from './Logo.css';
import Auxilliary from '../../hoc/Auxilliary';


class Logo extends Component {


    

    render() {

        //const hiClasses = [classes.Bubble, 'wow', 'zoomIn']


        return (
            <Auxilliary>
                <div className={'wow ' + classes.Logo} onClick={() => this.props.choiceHandler(2)}>
                    <div className={classes.Name}>
                        Daniel Ilievski
                    </div>
                    <div className={classes.Title}>
                        Web Developer and Designer
                    </div>
                </div>
                {/*<div className={hiClasses.join(" ")} data-wow-duration="1s" data-wow-delay="3s">Hi!</div>*/}
            </Auxilliary>
        );
    }
};

export default Logo;