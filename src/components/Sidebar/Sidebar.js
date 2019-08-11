import React, {Component} from 'react';
import classes from './Sidebar.css';
import WOW from 'wowjs';

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