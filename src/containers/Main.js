import React, {Component} from 'react';
import Auxilliary from '../hoc/Auxilliary';
import Splash from '../components/Splash/Splash';
import OpeningSplash from '../components/OpeningSplash/OpeningSplash';
import AboutSplash from './AboutSplash/AboutSplash';
import Sidebar from '../components/Sidebar/Sidebar';

class Main extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    }

    state = {
        sidebarOpen: false,
        initialState: true,
        mainSidebarOpen: false
    }

    onScroll = () => {

        if (window.scrollY > window.innerHeight / 2 && this.state.sidebarOpen === false) {
            this.setState({sidebarOpen: true, initialState: false, mainSidebarOpen: false});
        } else if (window.scrollY < window.innerHeight / 2 && this.state.sidebarOpen === true) {
            this.setState({sidebarOpen: false, mainSidebarOpen: true});
        }
    }

    handleChoice = (i) => {
        this["section-" + i].scrollIntoView({block: 'start', behavior: 'smooth'});
    }

    render() {
        return (
            <Auxilliary>

                <Sidebar open={this.state.sidebarOpen} initialState={this.state.initialState}/>

                <Splash>
                    <OpeningSplash initial={this.state.initialState} open={this.state.mainSidebarOpen} choiceHandler={this.handleChoice}/>
                </Splash>

                <div ref={el => this["section-2"] = el}>
                    <AboutSplash/>
                </div>

                <div ref={el => this["section-3"] = el}>
                    <Splash boja="white"></Splash>
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