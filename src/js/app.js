import React, { Component } from "react";
import Projects from './components/projects';

class App extends Component{

    constructor(){
        this.state = {
            projects: [
                {
                "title": "Web development",
                "category": "web Design"
            },
            {
                "title": "Web development",
                "category": "web Design"
            },
            {
                "title": "Web development",
                "category": "web Design"
            },
            ]
        }
    }
    render(){
        return (
            <div className='app'>
            <h2>Hi there,</h2>
           <div >Hello from {this.props.name} </div>
           <Projects/>
            </div>
        );
    }
}

export default App 