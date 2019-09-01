import React, {Component} from 'react';
import classes from './AboutGraph.css';


class AboutGraph extends Component {



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
                    DESIGNER
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
                    flexDirection: 'row',
                    flexGrow: '1',
                }}>
                    <div className={classes.GraphVariables}>
                        <span className={classes.GraphVariable}>JavaScript</span>
                        <span className={classes.GraphVariable}>CSS</span>
                        <span className={classes.GraphVariable}>React</span>
                        <span className={classes.GraphVariable}>Vue.js</span>
                        <span className={classes.GraphVariable}>Knockout</span>
                        <span className={classes.GraphVariable}>Spring</span>
                    </div>
                    <div className={classes.GraphChart}>
                        <div
                            style={{
                            display: 'flex'
                        }}>
                            <div data-wow-delay="0s" className={['wow', classes.GraphChartItem, classes.Item100].join(' ')}></div>
                        </div>
                        <div
                            style={{
                            display: 'flex'
                        }}>
                            <div data-wow-delay=".1s" className={['wow', classes.GraphChartItem, classes.Item90].join(' ')}></div>
                        </div>
                        <div
                            style={{
                            display: 'flex'
                        }}>
                            <div data-wow-delay=".2s" className={['wow', classes.GraphChartItem, classes.Item80].join(' ')}></div>
                        </div>
                        <div
                            style={{
                            display: 'flex'
                        }}>
                            <div data-wow-delay=".3s" className={['wow', classes.GraphChartItem, classes.Item80].join(' ')}></div>
                        </div>
                        <div
                            style={{
                            display: 'flex'
                        }}>
                            <div data-wow-delay=".4s" className={['wow', classes.GraphChartItem, classes.Item70].join(' ')}></div>
                        </div>
                        <div
                            style={{
                            display: 'flex'
                        }}>
                            <div data-wow-delay=".5s" className={['wow', classes.GraphChartItem, classes.Item60].join(' ')}></div>
                        </div>

                    </div>
                </div>
            );
        } else if (this.props.active === 2) {
            return (
                <div
                    style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexGrow: '1',
                }}>
                    <div className={classes.GraphVariables}>
                        <span className={classes.GraphVariable}>Photoshop</span>
                        <span className={classes.GraphVariable}>Illustrator</span>
                        <span className={classes.GraphVariable}>Adobe Xd</span>
                        <span className={classes.GraphVariable}>UI/UX</span>
                        <span className={classes.GraphVariable}>Branding</span>
                        <span className={classes.GraphVariable}>Prototyping</span>
                    </div>
                    <div className={`${classes.GraphChart}`}>
                        <div
                            style={{
                            display: 'flex'
                            }}
                            
                            >
                            <div data-wow-delay="0s" className={['wow', classes.GraphChartItem, classes.Item70].join(' ')}></div>
                        </div>
                        <div
                            style={{
                            display: 'flex'
                        }}>
                            <div data-wow-delay=".1s" className={['wow', classes.GraphChartItem, classes.Item80].join(' ')}></div>
                        </div>
                        <div
                            style={{
                            display: 'flex'
                        }}>
                            <div data-wow-delay=".2s" className={['wow', classes.GraphChartItem, classes.Item70].join(' ')}></div>
                        </div>
                        <div
                            style={{
                            display: 'flex'
                        }}>
                            <div data-wow-delay=".3s" className={['wow', classes.GraphChartItem, classes.Item90].join(' ')}></div>
                        </div>
                        <div
                            style={{
                            display: 'flex'
                        }}>
                            <div data-wow-delay=".4s" className={['wow', classes.GraphChartItem, classes.Item80].join(' ')}></div>
                        </div>
                        <div
                            style={{
                            display: 'flex'
                        }}>
                            <div data-wow-delay=".5s" className={['wow', classes.GraphChartItem, classes.Item70].join(' ')}></div>
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