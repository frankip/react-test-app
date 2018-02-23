import React, { Component } from "react";
import Projects from './components/projects';
import AddProjects from './components/addProject';

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

    handleAddProject(project){
        // console.log(projects)
        let projects = this.state.projects;
        projects.push(project);
        this.setState({projects:projects});

    }

    render(){
        return <div className="app">
            <h2>Hi there,</h2>
            <div>Hello from {this.props.name} </div>
            <AddProjects AddProject={this.handleAddProject.bind(this)}/>
            <Projects projects={this.state.projects} />
          </div>;
    }
}

export default App 