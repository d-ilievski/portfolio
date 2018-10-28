import React, { Component } from 'react';
import Auxilliary from '../hoc/Auxilliary';
import Splash from '../components/Splash/Splash';
//import Navigation from '../components/Navigation/Navigation';
import OpeningSplash from '../components/OpeningSplash/OpeningSplash';

class Main extends Component {

    handleChoice = (i) => {
        this["section-"+i].scrollIntoView({block: 'end', behavior: 'smooth'});
    }


    render() {
        return (
            <Auxilliary>
                <Splash>
                    <OpeningSplash choiceHandler={this.handleChoice}/>
                </Splash>
                <div ref={el => this["section-2"] = el}>
                    <Splash boja="black"/>
                </div>
                <div ref={el => this["section-3"] = el}>
                    <Splash boja="white"/>
                </div>
                <div ref={el => this["section-4"] = el}>
                    <Splash boja="black"/>
                </div>
                <div ref={el => this["section-5"] = el}>
                    <Splash boja="white"/>
                </div>
            </Auxilliary>
        );
    }
}

export default Main;