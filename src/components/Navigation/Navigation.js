import React from 'react';
//import Logo from '../Logo/Logo';
import classes from './Navigation.css';

const Navigation = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <li onClick={() => props.choiceHandler(2)}>ABOUT</li>
            <li onClick={() => props.choiceHandler(3)}>SERVICES</li>
            <li onClick={() => props.choiceHandler(4)}>PROJECTS</li>
            <li onClick={() => props.choiceHandler(5)}>CONTACT</li>
        </ul>
    );
};

export default Navigation;