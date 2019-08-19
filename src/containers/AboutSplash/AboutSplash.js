import React, {Component} from 'react';
import classes from './AboutSplash.css';
import daniel from '../../images/daniel.JPG';
import AboutGraph from '../../components/AboutGraph/AboutGraph';

class AboutSplash extends Component {

    state = {
        activeGraph: 1
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
            <div className={`${classes.Container} scrollSnapChild`}>
                <div className={classes.ServicesSplash}>

                    <h1 className={classes.Heading + ' wow ' + classes.Appear} data-wow-delay="0.5s"
                    data-type="section" data-id="2">
                        <span>ABOUT</span>
                    </h1>

                    <div className={classes.Content}>

                        <div className={[classes.NameCard, 'wow'].join(" ")}>
                            <img className={classes.Image} alt='slika na daniel hehe' src={daniel}/>
                            <h3>Who dis?</h3>
                            <p>I'm Daniel Ilievski, developer and graphic designer from Skopje, Macedonia.</p>
                            <p>Многу сакам да какам.
                                <strong>Ајде да какаме заедно.</strong>
                            </p>
                        </div>

                        <div>
                            <h2 style={{marginTop: '0'}}>SKILLS</h2>
                            <AboutGraph
                                choiceHandler={this.graphChoiceHandler}
                                active={this.state.activeGraph}/>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
};

export default AboutSplash;