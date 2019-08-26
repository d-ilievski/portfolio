import React, {Component} from 'react';
import Auxilliary from '../hoc/Auxilliary';
import Splash from '../components/Splash/Splash';
import OpeningSplash from '../components/OpeningSplash/OpeningSplash';
import AboutSplash from './AboutSplash/AboutSplash';
import Sidebar from '../components/Sidebar/Sidebar';
import ServicesSplash from '../components/ServicesSplash/ServicesSplash';
import ProjectsSplash from '../components/ProjectsSplash/ProjectsSplash';
import ContactSplash from '../components/ContactSplash/ContactSplash';

class Main extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false);
        // window.addEventListener('wheel', this.onMousewheel, false);
        // this.handleChoice(1);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
        // window.removeEventListener('wheel', this.onMousewheel, false);
    }

    state = {
        sidebarOpen: false,
        initialState: true,
        mainSidebarOpen: false,
        activeSection: 1
    }

    // onMousewheel = (event) => {     if (event.wheelDelta >= 0) {
    // this.setState((prevState, props) => ({             activeSection:
    // prevState.activeSection > 1 ? prevState.activeSection -1 : 1         }));
    // }     else {         this.setState((prevState, props) => (             {
    //        activeSection: prevState.activeSection < 5 ? prevState.activeSection
    // + 1 : 5         }));     }     setTimeout(() => {
    // this.handleChoice(this.state.activeSection);     }, 300) }

    onScroll = (event) => {

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

                <Sidebar choiceHandler={this.handleChoice} open={this.state.sidebarOpen} initialState={this.state.initialState}/>

                <div ref={el => this["section-1"] = el}>

                    <Splash>
                        <OpeningSplash
                            initial={this.state.initialState}
                            open={this.state.mainSidebarOpen}
                            choiceHandler={this.handleChoice}/>
                    </Splash>

                </div>

                <div ref={el => this["section-2"] = el}>

                    <AboutSplash handleChoice={this.handleChoice}/>

                </div>

                <div ref={el => this["section-3"] = el}>
                    <Splash>
                        <ServicesSplash handleChoice={this.handleChoice}/>
                    </Splash>
                </div>

                <div ref={el => this["section-4"] = el}>
                    <ProjectsSplash/>
                </div>

                <div ref={el => this["section-5"] = el}>
                    <ContactSplash/>
                </div>

            </Auxilliary>
        );
    }
}

export default Main;