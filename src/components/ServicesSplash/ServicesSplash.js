import React, {Component} from 'react';
import aboutClasses from '../../containers/AboutSplash/AboutSplash.css';
import classes from './ServicesSplash.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faRocket, faPeopleCarry} from '@fortawesome/free-solid-svg-icons'

class ServicesSplash extends Component {

    state = {
        designerMode : false,
        designerModeDelayed : false
    }

    componentDidMount() {
        this.updateRatio();
        window.addEventListener("resize", this.updateRatio);
    }

    updateRatio = () => {
        const cHeight = this.container.clientHeight;
        const cWidth = this.container.clientWidth;
        const eHeight = this.fill.clientHeight;
        const eWidth = this.fill.clientWidth;
        this.ratioX = (cWidth + 100) / eWidth;
        this.ratioY = (cHeight + 100) / eHeight;
    }

    handleChange = () => {

        this.setState((prevState, props) => ({
            designerMode: !prevState.designerMode
        }));

        setTimeout(() => {
            this.setState((prevState, props) => ({
                designerModeDelayed: !prevState.designerModeDelayed
            }));
        }, 200);
        
        if(this.state.designerMode) {

            this.fill.style.transform = 'scaleX('+this.ratioX+') scaleY('+this.ratioY+')';
            this.fill.style.background = 'white';

            this.container.style.transitionDelay = '.5s';
            this.container.style.backgroundColor = 'white';
            
            setTimeout(() => {
                this.fill.style.transform = 'scaleX(0) scaleY(0)';                
            }, 500);

        }
        else {
            
            this.fill.style.transform = 'scaleX('+this.ratioX+') scaleY('+this.ratioY+')';
            this.fill.style.background = 'black';

            this.container.style.transitionDelay = '.5s';
            this.container.style.backgroundColor = 'black';
            
            setTimeout(() => {
                this.fill.style.transform = 'scaleX(0) scaleY(0)';                
            }, 500);
            

        }
    }

    render() {
        return (
            <div className={classes.Container} ref={container => this.container = container}>

                <div className={classes.FloatingButton} onClick={this.handleChange} ref={servicesFloatingBtn => this.servicesFloatingBtn = servicesFloatingBtn}>
                </div>
                
                <div className={classes.Background} ref={fill => this.fill = fill}></div>

                <h1 className={aboutClasses.Heading}>
                    <span>SERVICES</span>
                </h1>

                <div className={classes.ContentWrapper}>
                    <div className={classes.ContentItem}>
                        <div className={classes.Icon}>
                            <FontAwesomeIcon icon={this.state.designerModeDelayed ? faUser : faRocket} size="2x"></FontAwesomeIcon>
                        </div>
                        <div className={classes.Description}>
                            <h3>Rockstar Webapps</h3>

                            <p>The easier your website is to use, the more people use it. An essential part of “easy to use” is intuitiveness...</p>
                            <strong className={classes.Link}>Read More</strong>
                        </div>
                    </div>
                    <div className={classes.ContentItem}>
                        <div className={classes.Icon}>
                            <FontAwesomeIcon icon={this.state.designerModeDelayed ? faUser : faPeopleCarry} size="2x"></FontAwesomeIcon>
                        </div>
                        <div className={classes.Description}>
                            <h3>Rockstar Webapps</h3>

                            <p>Bridge communication gap between designers and developers...</p>
                            <strong className={classes.Link}>Read More</strong>
                        </div>
                    </div>
                    <div className={classes.ContentItem}>
                        <div className={classes.Icon}>
                            <FontAwesomeIcon icon={this.state.designerModeDelayed ? faUser : faRocket} size="2x"></FontAwesomeIcon>
                        </div>
                        <div className={classes.Description}>
                            <h3>Rockstar Webapps</h3>

                            <p>
                                
                            </p>
                            <strong className={classes.Link}>Read More</strong>
                        </div>
                    </div>
                    
                </div>

            </div>
        );
    }
}

export default ServicesSplash;