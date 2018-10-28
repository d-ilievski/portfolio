import React from 'react';
//import Logo from '../Logo/Logo';
import classes from './Navigation.css';

const Navigation = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <li onClick={() => props.choiceHandler(2)}>SERVICES</li>
            <li onClick={() => props.choiceHandler(3)}>PROJECTS</li>
            <li onClick={() => props.choiceHandler(4)}>ABOUT</li>
            <li onClick={() => props.choiceHandler(5)}>CONTACT</li>
        </ul>
    );
};

export default Navigation;