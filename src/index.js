import React from 'react';
import ReactDOM from 'react-dom';

import AppMenu1 from './AppMenu1';
import AppMenu2 from './AppMenu2';
import AppMenu3 from './AppMenu3';
import headerstyle from './Header.module.css';

// Global menu var, using to choose the correct menu
var mode = 1;

// Header with buttons which change the global variable
class Header extends React.Component {
    // Bind the click
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        var id = event.target.id;
        if (id === "menu1") {
            mode = 1;
            // Render the app again with selected mode
            ChosenApp();
        } else if (id === "menu2") {
            mode = 2;
            ChosenApp();
        } else if (id === "menu3") {
            mode = 3;
            ChosenApp();
        }
    }
    // Return the header with the buttons
    render() {
        return (
            <div className={headerstyle.header}>
                <button id="menu1" className={headerstyle.button} onClick={this.handleClick}>Graph of the situation</button>
                <button id="menu2" className={headerstyle.button} onClick={this.handleClick}>Map of the situation</button>
                <button id="menu3" className={headerstyle.button} onClick={this.handleClick}>Information and Quiz</button>
            </div>
        )
    }
}

// Runs on startup too, sets the root html to chosen AppMenu, default is 1
function ChosenApp() {
    if (mode === 1) {
        ReactDOM.render(<AppMenu1 />, document.getElementById('root'));
    } else if (mode === 2) {
        ReactDOM.render(<AppMenu2 />, document.getElementById('root'));
    } else {
        ReactDOM.render(<AppMenu3 />, document.getElementById('root'));
    }
}

// Render the header to the header html and render chosenapp to root
ReactDOM.render(<Header />, document.getElementById('header'));
ChosenApp();

