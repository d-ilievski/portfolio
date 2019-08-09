import React, {Component} from 'react';
import aboutClasses from '../../containers/AboutSplash/AboutSplash.css';
import classes from './ProjectsSplash.css';
import Tile from '../Tile/Tile';

import menusano from '../../images/menusano-logo-sm.png';
import menusanoBg from '../../images/menusano-bg.jpg';
import oblecime from '../../images/oblecime.png';
import oblecimeBg from '../../images/oblecime-bg.jpg';
import trackado from '../../images/trackado.png';
import trackadoBg from '../../images/trackadoBg.png';
import WOW from 'wowjs';

class ProjectsSplash extends Component {

    state = {
        condition: true,
    }

    componentDidMount() {
        new WOW
            .WOW()
            .init();
    }

    render() {
        return (
            <div className={classes.Container}>

                <h1 className={aboutClasses.Heading + ' wow slideInUp'} data-wow-delay="1s" style={{visibility: 'hidden'}}>
                    <span>PROJECTS</span>
                </h1>
                <div className={'title-mask'}></div>

                <div className={classes.TilesContainer + ' wow ' + classes.Appear}>
                    <div className={classes.TilesRow}>
                        <Tile link="http://app.menusano.com" linkText="Visit Website" logo={menusano} background={menusanoBg} description="An easy-to-use nutrition analysis software for the Foodservice Industry" />
                        <Tile link="https://github.com/d-ilievski/obleci.me-frontend/blob/master/131176_sistem_za_pomos_na_bezdomnici.docx?raw=true" linkText="Download thesis (MK)" logo={oblecime} background={oblecimeBg} description="A charity service for helping homeless people and people in need." />
                        <Tile link="https://www.trackado.com/" linkText="Visit Website" logo={trackado} background={trackadoBg} description="An easy-to-use nutrition analysis software for the Foodservice Industry" />
                        <Tile logo={menusano} background={menusanoBg} description="An easy-to-use nutrition analysis software for the Foodservice Industry" />
                    </div>
                    <div className={classes.TilesRow}>
                        <Tile link="http://app.menusano.com" linkText="Visit Website" logo={menusano} background={menusanoBg} description="An easy-to-use nutrition analysis software for the Foodservice Industry" />
                        <Tile link="https://github.com/d-ilievski/obleci.me-frontend/blob/master/131176_sistem_za_pomos_na_bezdomnici.docx?raw=true" linkText="Download thesis (MK)" logo={oblecime} background={oblecimeBg} description="A charity service for helping homeless people and people in need." />
                        <Tile link="https://www.trackado.com/" linkText="Visit Website" logo={trackado} background={trackadoBg} description="An easy-to-use nutrition analysis software for the Foodservice Industry" />
                        <Tile logo={menusano} background={menusanoBg} description="An easy-to-use nutrition analysis software for the Foodservice Industry" />
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default ProjectsSplash;