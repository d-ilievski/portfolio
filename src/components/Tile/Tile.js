import React, {Component} from 'react';
import classes from './Tile.css';

class Tile extends Component {

    state = {}

    tileMouseEnterHook = () => {
        this.background.classList.add(classes.Focus);
        this.description.classList.add(classes.Show);
        this.logo.classList.add(classes.Elevate);
    }

    tileMouseLeaveHook = () => {
        this.background.classList.remove(classes.Focus);
        this.description.classList.remove(classes.Show);
        this.logo.classList.remove(classes.Elevate);
    }

    render() {

        return (
            <div className={classes.Tile} onMouseEnter={this.tileMouseEnterHook} onMouseLeave={this.tileMouseLeaveHook}>
                <img className={classes.Logo} src={this.props.logo} alt="logo" ref={logo => this.logo = logo}/>
                <div className={classes.Description} ref={description => this.description = description}>
                    {this.props.description}
                </div>
                <img
                    className={classes.Background}
                    src={this.props.background}
                    ref={background => this.background = background}
                    alt="menusanoBg"/>
            </div>

        );
    }
}

export default Tile;