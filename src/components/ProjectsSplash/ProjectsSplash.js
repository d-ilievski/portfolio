import React, {Component} from 'react';
import aboutClasses from '../../containers/AboutSplash/AboutSplash.css';
import classes from './ProjectsSplash.css';
import Tile from '../Tile/Tile';

import menusano from '../../images/menusano-logo-sm.png';
import menusanoBg from '../../images/menusano-bg.jpg';
import oblecime from '../../images/oblecime.png';
import oblecimeBg from '../../images/oblecime-bg.jpg';

class ProjectsSplash extends Component {

    state = {}

    tileMouseEnterHook = () => {
        
    }

    render() {
        return (
            <div className={classes.Container}>

                <h1 className={aboutClasses.Heading}>
                    <span>PROJECTS</span>
                </h1>

                <div className={classes.TilesContainer}>
                    <div className={classes.TilesRow}>
                        <Tile logo={menusano} background={menusanoBg} description="An easy-to-use nutrition analysis software for the Foodservice Industry" />
                        <Tile logo={oblecime} background={oblecimeBg} description="A charity service for helping homeless people and people in need. Graduate thesis project." />
                        <Tile logo={menusano} background={menusanoBg} description="An easy-to-use nutrition analysis software for the Foodservice Industry" />
                        <Tile logo={menusano} background={menusanoBg} description="An easy-to-use nutrition analysis software for the Foodservice Industry" />
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default ProjectsSplash;