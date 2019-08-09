import React, {Component} from 'react';
import aboutClasses from '../../containers/AboutSplash/AboutSplash.css';
import classes from './ContactSplash.css';

import menusano from '../../images/menusano-logo-sm.png';
import menusanoBg from '../../images/menusano-bg.jpg';
import oblecime from '../../images/oblecime.png';
import oblecimeBg from '../../images/oblecime-bg.jpg';
import trackado from '../../images/trackado.png';
import trackadoBg from '../../images/trackadoBg.png';
import WOW from 'wowjs';

class ContactSplash extends Component {

    state = {
        condition: true,
    }

    componentDidMount() {
        new WOW
            .WOW()
            .init();
    }

    render() {
        return (
            <div className={classes.Container}>

                <h1 className={aboutClasses.Heading + ' wow slideInUp'} data-wow-delay="1s" style={{visibility: 'hidden'}}>
                    <span>CONTACT</span>
                </h1>
                <div className={'title-mask'}></div>

            </div>
        );
    }
}

export default ContactSplash;