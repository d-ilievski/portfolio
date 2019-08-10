import React, {Component} from 'react';
import aboutClasses from '../../containers/AboutSplash/AboutSplash.css';
import classes from './ContactSplash.css';

import WOW from 'wowjs';

class ContactSplash extends Component {

    state = {
        condition: true
    }

    componentDidMount() {
        new WOW
            .WOW()
            .init();
    }

    onSubmitForm = () => {
        window.open('about:blank', 'contact_me', 'width=800,height=600');
    }

    render() {
        return (
            <div className={classes.Container}>

                <h1
                    className={aboutClasses.Heading + ' wow ' + aboutClasses.Appear}
                    data-wow-delay="0.5s">
                    <span>CONTACT</span>
                </h1>

                <div className={classes.Content}>
                    <div className={classes.FormContainer}>
                        <form
                            className={classes.Form + ' wow ' + aboutClasses.Appear}
                            data-wow-delay="1s"
                            target="contact_me"
                            action="https://formspree.io/daniel.d.ilievski@gmail.com"
                            method="POST"
                            onSubmit={this.onSubmitForm}>
                            <input
                                placeholder="Your Name"
                                className={classes.Input}
                                type="text"
                                name="name"/>
                            <input
                                placeholder="Your Email"
                                className={classes.Input}
                                type="email"
                                name="_replyto"/>
                            <textarea
                                placeholder="What's on your mind?"
                                className={classes.TextArea}
                                type="text"
                                name="_body"/>
                            <input className={classes.SubmitBtn} type="submit" value="Send"/>
                        </form>
                    </div>
                </div>

                <div style={{fontFamily: "'Courier New', monospace", textAlign: 'center', marginTop: "50px"}}>
                    Made with <span style={{color: "#e25555"}}>&#9829;</span> in outer space.
                </div>
            </div>
        )
    }
}

export default ContactSplash;