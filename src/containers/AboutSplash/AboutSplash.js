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

                    <h1 className={classes.Heading}>
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

export default ServicesSplash;