import React, {Component} from 'react';
import aboutClasses from '../../containers/AboutSplash/AboutSplash.css';
import classes from './ServicesSplash.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faCogs, faFeatherAlt, faCompass, faEye} from '@fortawesome/free-solid-svg-icons/'
import Auxilliary from '../../hoc/Auxilliary';
// import {ReactComponent as Grandparents} from '../../images/icons/grandparents.svg';

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

            this.props.handleChoice(3);

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
                    <div className={`${classes.ContentItem} wow ${classes.appearAndOpen}`} data-wow-delay="0.4s">
                        <div className={`${classes.Icon}`}>
                            <FontAwesomeIcon
                                className={`wow ${classes.Grow}`}
                                icon={this.state.designerModeDelayed
                                ? faEye
                                : faFeatherAlt}
                                size="2x"></FontAwesomeIcon>
                        </div>
                        <div className={classes.Description}>
                            {this.state.designerModeDelayed ? 
                                <Auxilliary>
                                    <h3>Featherlight</h3>

                                    <p>
                                        Working alongside clients when designing UI/UX prototypes 
                                    </p>
                                </Auxilliary>
                             : 
                                <Auxilliary>
                                    <h3>Featherlight</h3>

                                    <p>Having a fast lightweight web application is key to keeping people around which ultimately
                                        converts them into customers.</p>
                                </Auxilliary>
                            }
                            
                            {/* <strong className={classes.Link}>Read More</strong> */}
                        </div>
                    </div>
                    <div className={classes.ContentItem + ' wow ' + classes.appearAndOpen} data-wow-delay="0.6s">
                        <div className={classes.Icon}>
                            <FontAwesomeIcon icon={this.state.designerModeDelayed ? faUser : faCogs} size="2x" className={`wow ${classes.Grow}`}></FontAwesomeIcon>
                            {/* <ResponsivenessLogo/> */}
                        </div>
                        <div className={classes.Description}>
                        {this.state.designerModeDelayed ? 
                                <Auxilliary>
                                    <h3>Interactive</h3>

                                    <p>Structured design approach for developing high-level interaction design prototypes using simple interactive media.</p>
                                </Auxilliary>
                                
                             : 
                                <Auxilliary>
                                    <h3>Scalable</h3>

                                    <p>
                                        Web applications built using component-based architectures, following the best and appropriate design practices are easy to scale and grow.
                                    </p>
                                </Auxilliary>
                            }
                            {/* <strong className={classes.Link}>Read More</strong> */}
                        </div>
                    </div>
                    <div className={classes.ContentItem + ' wow ' + classes.appearAndOpen} data-wow-delay="0.8s">
                        <div className={classes.Icon}>
                            <FontAwesomeIcon
                                className={`wow ${classes.Grow}`}
                                icon={this.state.designerModeDelayed
                                ? faUser
                                : faCompass}
                                size="2x"></FontAwesomeIcon>
                        </div>
                        <div className={classes.Description}>
                        {this.state.designerModeDelayed ? 
                                <Auxilliary>
                                    <h3>Intuitive</h3>

                                    <p></p>
                                </Auxilliary>
                             : 
                                <Auxilliary>
                                    <h3>Intuitive</h3>
                                    <p>
                                        The easier your website is to use, the more people use it.
                                        An essential part of “easy to use” is intuitiveness. 
                                        When a user sees it, they know exactly what to do.</p>
                                </Auxilliary>
                            }
                            {/* <strong className={classes.Link}>Read More</strong> */}
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default ServicesSplash;