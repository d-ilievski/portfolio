import React, {Component} from 'react';
import classes from './Sidebar.css';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Sidebar extends Component {

    state = {
        mobileSidebarOpen: false,
    }

    mobileToggleSidebar = () => {
        this.setState((prevState, nextState) => {
            return {
                mobileSidebarOpen: !prevState.mobileSidebarOpen,
            }
        } )
        
    }

    render() {

        const wowClasses = [classes.Sidebar];
        if (this.props.open) 
            wowClasses.push(classes.SidebarOpen);
        else if (!this.props.open && !this.props.initialState) {
            wowClasses.push(classes.SidebarClose);
        }

        return (
            <div className={`${classes.SidebarContainer} ${this.props.open ? classes.Hover : null} ${this.state.mobileSidebarOpen ? classes.Open : null}`}>
                <div data-wow-delay="2s" className={`wow ${classes.Appear} ${classes.Hamburger} ${ this.state.mobileSidebarOpen ? classes.Open : null}`} onClick={this.mobileToggleSidebar}>
                    <FontAwesomeIcon icon={this.state.mobileSidebarOpen ? faTimes : faBars}></FontAwesomeIcon>
                </div>
                <div onClick={this.mobileToggleSidebar} className={`${classes.MobileSidebarMask} ${this.state.mobileSidebarOpen ? classes.Open : null}`}></div>
                <div className={wowClasses.join(' ')}>
                    <div className={classes.Mask}></div>
                    <ul className={classes.Menu}>
                        <li onClick={() => this.props.choiceHandler(2)}>
                            ABOUT
                        </li>
                        <li onClick={() => this.props.choiceHandler(3)}>
                            SERVICES
                        </li>
                        <li onClick={() => this.props.choiceHandler(4)}>
                            PROJECTS
                        </li>
                        <li onClick={() => this.props.choiceHandler(5)}>
                            CONTACT
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
};

export default Sidebar;