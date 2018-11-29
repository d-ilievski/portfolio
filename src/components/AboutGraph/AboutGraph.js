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
                <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', margin: '0 20px 0 50px'}}>
                <span>React</span>
                <span>AWS</span>
                <span>R</span>
                <span>ReactReact</span>
                <span>React</span>
                <span>ReactReactReact</span>
                </div>
                <div className={classes.GraphChart}>
                    <div style={{
                        display: 'flex'
                    }}>
                        <div className={[classes.GraphChartItem, 'wow', classes.Item60].join(' ')}></div>
                    </div>
                    <div style={{
                        display: 'flex'
                    }}>
                        <div className={[classes.GraphChartItem, 'wow', classes.Item70].join(' ')}></div>
                    </div>
                    <div style={{
                        display: 'flex'
                    }}>
                        <div className={[classes.GraphChartItem, 'wow', classes.Item100].join(' ')}></div>
                    </div>
                    <div style={{
                        display: 'flex'
                    }}>
                        <div className={[classes.GraphChartItem, 'wow', classes.Item60].join(' ')}></div>
                    </div>
                    <div style={{
                        display: 'flex'
                    }}>
                        <div className={[classes.GraphChartItem, 'wow', classes.Item70].join(' ')}></div>
                    </div>
                    <div style={{
                        display: 'flex'
                    }}>
                        <div className={[classes.GraphChartItem, 'wow', classes.Item100].join(' ')}></div>
                    </div>

                </div>
                </div>
            );
        } else if (this.props.active === 2) {
            return (
                <div className={classes.GraphChart}></div>
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