import React, {Component} from 'react';
import aboutClasses from '../../containers/AboutSplash/AboutSplash.css';
import classes from './ContactSplash.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-regular-svg-icons';
import {faInstagram, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';

import astro from '../../images/astro.svg';



class ContactSplash extends Component {

    state = {
        name: false,
        email: false,
        body: false
    }



    onSubmitForm = () => {
        window.open('about:blank', 'contact_me', 'width=800,height=600');
    }

    onClickToFocusContact = () => {
        this.nameInput.focus();
    }

    render() {
        return (
            <div className={classes.Container}>

                <h1
                    className={aboutClasses.Heading + ' wow ' + aboutClasses.Appear}
                    data-wow-offset="50">
                    <span>CONTACT</span>
                </h1>

                <div className={classes.Content}>
                    <div className={classes.PanelLeft}>
                        <p className={'wow ' + aboutClasses.Appear}>
                            If you would like to build something great or just say hi, <span onClick={this.onClickToFocusContact} className={classes.TextLink}>fill out the form</span> or email me on <a target="_top" href='mailto:daniel.d.ilievski@gmail.com' className={classes.TextLink}>daniel.d.ilievski@gmail.com</a>. 
                        </p>
                        
                        <p className={'wow ' + aboutClasses.Appear}>
                            Also you can find me on <span className={classes.TextLink}><a href="https://www.linkedin.com/in/daniel-ilievski/" rel="noopener noreferrer " target="_blank"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>&nbsp;LinkedIn</a></span>, see some of my projects on <span className={classes.TextLink}><a href="https://github.com/d-ilievski" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>&nbsp;GitHub</a></span> or check out my <span className={classes.TextLink}><a href="https://www.instagram.com/vo1d.mind/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>&nbsp;Instagram</a></span> where I post some pictures I take and edit.
                        </p>
                    </div>
                    <div className={classes.FormContainer}>
                        <form
                            className={classes.Form + ' wow ' + aboutClasses.Appear}
                            target="contact_me"
                            action="https://formspree.io/daniel.d.ilievski@gmail.com"
                            method="POST"
                            autoComplete="off"
                            onSubmit={this.onSubmitForm}>
                            <input
                                placeholder="Your Name"
                                className={classes.Input}
                                type="text"
                                name="name"
                                required
                                ref={(input) => { this.nameInput = input; }} 
                                />
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
                            <button className={classes.SubmitBtn} type="submit">
                                <FontAwesomeIcon icon={faPaperPlane}/>&nbsp;Send
                            </button>
                        </form>
                    </div>
                </div>

                <div className={' wow ' + aboutClasses.Appear}>
                    <img src={astro} alt="astro" className={classes.Astro}/>

                    <div
                        style={{
                        fontFamily: "'Courier New', monospace",
                        textAlign: 'center',
                        marginTop: "80px"
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