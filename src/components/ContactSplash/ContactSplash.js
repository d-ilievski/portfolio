import React, {Component} from 'react';
import aboutClasses from '../../containers/AboutSplash/AboutSplash.css';
import classes from './ContactSplash.css';

import astro from '../../images/astro.svg';

import WOW from 'wowjs';

class ContactSplash extends Component {

    state = {
        name: false,
        email: false,
        body: false
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
                                name="name"
                                required/>
                            <input
                                placeholder="Your Email"
                                className={classes.Input}
                                type="email"
                                name="_replyto"
                                required/>
                            <textarea
                                placeholder="What's on your mind?"
                                className={classes.TextArea}
                                type="text"
                                name="_body"
                                required/>
                            <input className={classes.SubmitBtn} type="submit" value="Send"/>
                        </form>
                    </div>
                </div>

                <div className={' wow ' + aboutClasses.Appear}>
                    <img src={astro} alt="astro" className={classes.Astro}/>

                    <div
                        style={{
                        fontFamily: "'Courier New', monospace",
                        textAlign: 'center',
                        marginTop: "150px"
                    }}>
                        Crafted with&nbsp;
                        <span
                            style={{
                            color: "#e25555",
                            fontSize: "1.4em"
                        }}>&#9829;</span>&nbsp;in outer space.
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactSplash;