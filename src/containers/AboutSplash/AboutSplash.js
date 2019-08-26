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
            
                <div className={classes.AboutSplash}>

                    <h1 className={classes.Heading + ' wow ' + classes.Appear} data-wow-delay="0.5s"
                    data-type="section" data-id="2">
                        <span>ABOUT</span>
                    </h1>

                    <div className={classes.Content}>

                        <div className={`${classes.NameCard} wow ${classes.Appear}`}>
                            <img className={classes.Image} alt='slika na daniel hehe' src={daniel}/>
                            <h3>Who's this guy?</h3>
                            <p className={classes.CardParagraph}>I'm Daniel Ilievski from <a className={classes.Grow} rel="noopener noreferrer" target="_blank" href="https://www.google.com/maps/place/Skopje/@41.6809254,16.3102679,7z"><strong>Skopje</strong></a> and I'm a frontend developer at <a className={classes.Grow} rel="noopener noreferrer" target="_blank" href="https://www.emitknowledge.com/"><strong>EmitKnowledge</strong></a>.</p>
                                I love creating UI effects, intuitive UX and performant web apps. <span onClick={() => this.props.handleChoice(5)} className={classes.Grow} rel="noopener noreferrer" target="_blank" href=""><br/><br/><strong>Lets create something great!</strong></span>
                            </div>

                        <div className={classes.GraphContainer}>
                            <h2 style={{marginTop: '0'}}>SKILLS</h2>
                            <AboutGraph
                                choiceHandler={this.graphChoiceHandler}
                                active={this.state.activeGraph}/>
                        </div>

                    </div>

                </div>
            
        );
    }
};

export default AboutSplash;