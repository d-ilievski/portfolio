import React, {Component} from 'react';
import classes from './AboutGraph.css';
import WOW from 'wowjs';

class AboutGraph extends Component {

    componentDidMount() {
        new WOW
            .WOW()
            .init();
    }

    generateGraphOptions = () => {
        return (
            <div className={[classes.GraphOptions, 'wow'].join(' ')}>
                <span
                    className={[
                    classes.GraphOption, this.props.active === 1
                        ? classes.GraphOptionActive
                        : {}
                ].join(' ')}
                    onClick={() => this.props.choiceHandler(1)}>
                    DEVELOPER
                </span>

                <span className={classes.VerticalLine}>|</span>

                <span
                    className={[
                    classes.GraphOption, this.props.active === 2
                        ? classes.GraphOptionActive
                        : {}
                ].join(' ')}
                    onClick={() => this.props.choiceHandler(2)}>
                    GRAPHIC DESIGNER
                </span>
            </div>
        );
    }

    generateGraph = () => {
        if (this.props.active === 1) {
            return (
                <div
                    style={{
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    <div className={classes.GraphVariables}>
                        <span className={classes.GraphVariable}>JavaScript</span>
                        <span className={classes.GraphVariable}>CSS3</span>
                        <span className={classes.GraphVariable}>React</span>
                        <span className={classes.GraphVariable}>Vue.js</span>
                        <span className={classes.GraphVariable}>Spring Boot</span>
                        <span className={classes.GraphVariable}>Java EE</span>
                    </div>
                    <div className={classes.GraphChart}>
                        <div
                            style={{
                            display: 'flex'
                        }}>
                            <div className={[classes.GraphChartItem, 'wow', classes.Item90].join(' ')}></div>
                        </div>
                        <div
                            style={{
                            display: 'flex'
                        }}>
                            <div className={[classes.GraphChartItem, 'wow', classes.Item80].join(' ')}></div>
                        </div>
                        <div
                            style={{
                            display: 'flex'
                        }}>
                            <div className={[classes.GraphChartItem, 'wow', classes.Item80].join(' ')}></div>
                        </div>
                        <div
                            style={{
                            display: 'flex'
                        }}>
                            <div className={[classes.GraphChartItem, 'wow', classes.Item60].join(' ')}></div>
                        </div>
                        <div
                            style={{
                            display: 'flex'
                        }}>
                            <div className={[classes.GraphChartItem, 'wow', classes.Item70].join(' ')}></div>
                        </div>
                        <div
                            style={{
                            display: 'flex'
                        }}>
                            <div className={[classes.GraphChartItem, 'wow', classes.Item80].join(' ')}></div>
                        </div>

                    </div>
                </div>
            );
        } else if (this.props.active === 2) {
            return (
                <div
                    style={{
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    <div className={classes.GraphVariables}>
                        <span className={classes.GraphVariable}>Adobe Photoshop</span>
                        <span className={classes.GraphVariable}>Adobe Illustrator</span>
                        <span className={classes.GraphVariable}>Adobe InDesign</span>
                        <span className={classes.GraphVariable}>Print Design</span>
                        <span className={classes.GraphVariable}>Branding</span>
                        <span className={classes.GraphVariable}>UI/UX</span>
                    </div>
                    <div className={classes.GraphChart}>
                        <div
                            style={{
                            display: 'flex'
                        }}>
                            <div className={[classes.GraphChartItem, 'wow', classes.Item80].join(' ')}></div>
                        </div>
                        <div
                            style={{
                            display: 'flex'
                        }}>
                            <div className={[classes.GraphChartItem, 'wow', classes.Item90].join(' ')}></div>
                        </div>
                        <div
                            style={{
                            display: 'flex'
                        }}>
                            <div className={[classes.GraphChartItem, 'wow', classes.Item60].join(' ')}></div>
                        </div>
                        <div
                            style={{
                            display: 'flex'
                        }}>
                            <div className={[classes.GraphChartItem, 'wow', classes.Item100].join(' ')}></div>
                        </div>
                        <div
                            style={{
                            display: 'flex'
                        }}>
                            <div className={[classes.GraphChartItem, 'wow', classes.Item80].join(' ')}></div>
                        </div>
                        <div
                            style={{
                            display: 'flex'
                        }}>
                            <div className={[classes.GraphChartItem, 'wow', classes.Item70].join(' ')}></div>
                        </div>
                    </div>
                </div>
            );
        } else 
            return 'Error';
        }
    
    render() {
        return (
            <div className={classes.Graph}>
                {this.generateGraphOptions()}
                {this.generateGraph()}
            </div>
        );
    }
};

export default AboutGraph;