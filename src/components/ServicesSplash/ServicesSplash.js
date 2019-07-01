import React, {Component} from 'react';
import aboutClasses from '../../containers/AboutSplash/AboutSplash.css';
import classes from './ServicesSplash.css';

class ServicesSplash extends Component {

    state = {
        designerMode : false
    }

    componentDidMount() {
        this.updateRatio();
        window.addEventListener("resize", this.updateRatio);
    }

    updateRatio = () => {
        const cHeight = this.container.clientHeight;
        const cWidth = this.container.clientWidth;
        const eHeight = this.fill.clientHeight;
        const eWidth = this.fill.clientWidth;
        this.ratioX = (cWidth + 100) / eWidth;
        this.ratioY = (cHeight + 100) / eHeight;
    }

    handleChange = () => {

        this.setState((prevState, props) => ({
            designerMode: !prevState.designerMode
        }));
        
        if(this.state.designerMode) {

            this.fill.style.transform = 'scaleX('+this.ratioX+') scaleY('+this.ratioY+')';
            this.fill.style.background = 'white';

            this.container.style.transitionDelay = '.5s';
            this.container.style.backgroundColor = 'white';
            
            setTimeout(() => {
                this.fill.style.transform = 'scaleX(0) scaleY(0)';                
            }, 500);

        }
        else {
            
            this.fill.style.transform = 'scaleX('+this.ratioX+') scaleY('+this.ratioY+')';
            this.fill.style.background = 'black';

            this.container.style.transitionDelay = '.5s';
            this.container.style.backgroundColor = 'black';
            
            setTimeout(() => {
                this.fill.style.transform = 'scaleX(0) scaleY(0)';                
            }, 500);
            

        }
    }

    render() {
        return (
            <div className={classes.Container} ref={container => this.container = container}>

                <div className={classes.FloatingButton} onClick={this.handleChange} ref={servicesFloatingBtn => this.servicesFloatingBtn = servicesFloatingBtn}>
                </div>
                
                <div className={classes.Background} ref={fill => this.fill = fill}></div>

                <h1 className={aboutClasses.Heading}>
                    <span>SERVICES</span>
                </h1>

            </div>
        );
    }
}

export default ServicesSplash;