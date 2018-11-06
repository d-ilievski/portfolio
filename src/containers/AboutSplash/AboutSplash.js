import React, {Component} from 'react';
import classes from './AboutSplash.css';
import WOW from 'wowjs';
import daniel from '../../images/daniel.JPG';
import AboutGraph from '../../components/AboutGraph/AboutGraph';

class ServicesSplash extends Component {

    state = {
        activeGraph: 1
    }

    componentDidMount() {
        new WOW
            .WOW()
            .init();
    }

    handleSidebarHover = () => {
        this.setState(prevState => {
            return {
                sidebarOpen: !prevState.sidebarOpen
            };
        });
    }

    graphChoiceHandler = (graph) => {
        this.setState({activeGraph: graph});
    }

    render() {

        return (
            <div className={classes.Container}>
                <div className={classes.ServicesSplash}>

                    <h1 className={classes.Heading}><span style={{borderBottom: '3px solid black'}}>ABOUT</span></h1>

                    <div className={classes.Content}>

                        <div
                            style={{
                            width: '230px',
                            margin: '30px 30px 0 50px',
                            border: '3px solid black',
                            padding: '20px',
                            maxHeight: 'min-content'
                        }}
                        
                        className={'wow slideInLeft'}>
                            <img className={classes.Image} alt='slika na daniel hehe' src={daniel}/>
                            <h3>Who dis?</h3>
                            <p>I'm Daniel Ilievski, developer and graphic designer from Skopje, Macedonia.</p>
                            <p>Многу сакам да какам.
                                <strong>Ајде да какаме заедно.</strong>
                            </p>
                        </div>

                        <div>
                            <h2>SKILLS</h2>
                            <AboutGraph choiceHandler={this.graphChoiceHandler} active={this.state.activeGraph}/>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
};

export default ServicesSplash;