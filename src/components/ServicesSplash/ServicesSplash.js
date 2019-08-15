import React, {Component} from 'react';
import aboutClasses from '../../containers/AboutSplash/AboutSplash.css';
import classes from './ServicesSplash.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faRocket, faTachometerAlt} from '@fortawesome/free-solid-svg-icons/'
// import {ReactComponent as ResponsivenessLogo} from '../../images/icons/responsiveness.svg';

class ServicesSplash extends Component {

    state = {
        designerMode: false,
        designerModeDelayed: false,
        cooldown: null
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

        if (this.state.cooldown === null) {
            this.setState({cooldown: setTimeout(() => {
                    this.setState({cooldown: null});
                }, 800)});

            this.setState((prevState, props) => ({
                designerMode: !prevState.designerMode
            }));

            setTimeout(() => {
                this.setState((prevState, props) => ({
                    designerModeDelayed: !prevState.designerModeDelayed
                }));
            }, 200);

            if (this.state.designerMode) {

                this.fill.style.transform = 'scaleX(' + this.ratioX + ') scaleY(' + this.ratioY + ')';
                this.fill.style.background = 'white';

                this.container.style.transitionDelay = '.5s';
                this.container.style.backgroundColor = 'white';

                setTimeout(() => {
                    this.fill.style.transform = 'scaleX(0) scaleY(0)';
                }, 500);

            } else {

                this.fill.style.transform = 'scaleX(' + this.ratioX + ') scaleY(' + this.ratioY + ')';
                this.fill.style.background = 'black';

                this.container.style.transitionDelay = '.5s';
                this.container.style.backgroundColor = 'black';

                setTimeout(() => {
                    this.fill.style.transform = 'scaleX(0) scaleY(0)';
                }, 500);

            }
        }

    }

    render() {
        return (
            <div
                className={classes.Container}
                ref={container => this.container = container}>

                <div
                    className={classes.FloatingButton}
                    onClick={this.handleChange}
                    ref={servicesFloatingBtn => this.servicesFloatingBtn = servicesFloatingBtn}></div>

                <div className={classes.Background} ref={fill => this.fill = fill}></div>

                <h1 className={aboutClasses.Heading + ' wow ' + aboutClasses.Appear} data-wow-delay="0.2s">
                    <span>SERVICES</span>
                </h1>

                <div className={classes.ContentWrapper}>
                    <div className={classes.ContentItem + ' wow ' + aboutClasses.Appear} data-wow-delay="0.4s">
                        <div className={classes.Icon}>
                            <FontAwesomeIcon
                                icon={this.state.designerModeDelayed
                                ? faUser
                                : faTachometerAlt}
                                size="2x"></FontAwesomeIcon>
                        </div>
                        <div className={classes.Description}>
                            <h3>High Performance</h3>

                            <p>Having a fast website is key to keeping people around which ultimately
                                converts them into customers.</p>
                            <strong className={classes.Link}>Read More</strong>
                        </div>
                    </div>
                    <div className={classes.ContentItem + ' wow ' + aboutClasses.Appear} data-wow-delay="0.6s">
                        <div className={classes.Icon}>
                            <FontAwesomeIcon icon={this.state.designerModeDelayed ? faUser : faUser} size="2x"></FontAwesomeIcon>
                            {/* <ResponsivenessLogo/> */}
                        </div>
                        <div className={classes.Description}>
                            <h3>Responsive</h3>

                            <p>Bridge communication gap between designers and developers...</p>
                            <strong className={classes.Link}>Read More</strong>
                        </div>
                    </div>
                    <div className={classes.ContentItem + ' wow ' + aboutClasses.Appear} data-wow-delay="0.8s">
                        <div className={classes.Icon}>
                            <FontAwesomeIcon
                                icon={this.state.designerModeDelayed
                                ? faUser
                                : faRocket}
                                size="2x"></FontAwesomeIcon>
                        </div>
                        <div className={classes.Description}>
                            <h3>Rockstar Webapps</h3>

                            <p></p>
                            <strong className={classes.Link}>Read More</strong>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default ServicesSplash;