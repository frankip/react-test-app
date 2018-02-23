import React, { Component } from "react";
import Projects from './components/projects';

class App extends Component{

    constructor(){
        super();
        this.state = {
            projects: []
        }
    }
    componentWillMount(){
        this.setState({
            projects :[

                {
                    title: "Web development",
                    category: "web Design"
                },
                {
                    title: "Social App",
                    category: "Mobile Dev"
                },
                {
                    title: "Shopping cart",
                    category: "web Development"
                },
            ]
        });

    }

    render(){
        return (
            <div className='app'>
            <h2>Hi there,</h2>
           <div >Hello from {this.props.name} </div>
           <Projects projects={this.state.projects}/>
            </div>
        );
    }
}

export default App 