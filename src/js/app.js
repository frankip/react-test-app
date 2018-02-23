import React, { Component } from "react";
import uuid from 'uuid';
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
          projects: [
            {
              id: uuid.v4(),
              title: "Web development",
              category: "web Design"
            },
            {
              id: uuid.v4(),
              title: "Social App",
              category: "Mobile Dev"
            },
            {
              id: uuid.v4(),
              title: "Shopping cart",
              category: "web Development"
            }
          ]
        });

    }

    handleAddProject(project){
        // console.log(projects)
        let projects = this.state.projects;
        projects.push(project);
        this.setState({projects:projects});

    }

    handleDeleteProject(id){
        let projects = this.state.projects;
        let index = projects.findIndex(x => x.id === id);
        projects.splice(index, 1);
        this.setState({ projects: projects });
    }

    render(){
        return <div className="app">
            <h2>Hi there,</h2>
            <div>Hello from {this.props.name} </div>
            <AddProjects AddProject={this.handleAddProject.bind(this)}/>
            <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
          </div>;
    }
}

export default App 