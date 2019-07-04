import React, {Component} from 'react';
import aboutClasses from '../../containers/AboutSplash/AboutSplash.css';
import classes from './ProjectsSplash.css';

class ProjectsSplash extends Component {

    state = {
    }

    render() {
        return (
            <div className={classes.Container}>

                <h1 className={aboutClasses.Heading}>
                    <span>PROJECTS</span>
                </h1>

            </div>
        );
    }
}

export default ProjectsSplash;