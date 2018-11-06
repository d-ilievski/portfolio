import React, {Component} from 'react';
import classes from './Sidebar.css';
import WOW from 'wowjs';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserCog, faAddressCard} from '@fortawesome/free-solid-svg-icons'

class Sidebar extends Component {

    componentDidMount() {
        new WOW
            .WOW()
            .init();
    }

    render() {

        const wowClasses = [classes.Sidebar];
        if (this.props.open) 
            wowClasses.push(classes.SidebarOpen);
        else if (!this.props.open && !this.props.initialState) {
            wowClasses.push(classes.SidebarClose);
        }

        return (
            <div className={classes.SidebarContainer}>
                <div className={wowClasses.join(' ')}>
                    <ul className={classes.Menu}>
                        <li>
                            <FontAwesomeIcon icon={faUserCog} size='2x'></FontAwesomeIcon>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faAddressCard} size='2x'></FontAwesomeIcon>
                        </li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        );
    }
};

export default Sidebar;