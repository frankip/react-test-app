import React, { Component } from "react";
import uuid from 'uuid';
import $ from 'jquery';
import Projects from './components/projects';
import AddProjects from './components/addProject';
import Todos from './components/todo';

class App extends Component{

    constructor(){
        super();
        this.state = {
            projects: [],
            todos: []
        }
    }

    getTodos(){
        $.ajax({
          url: "https://jsonplaceholder.typicode.com/posts",
          dataType: "json",
          cache: false,
          success: function(data){
              this.setState({todos:data}, function(){
                  console.log(this.state);
              });            

          }.bind(this),
          error: function(xhr, status, err){
              console.log(err);
          }
        });
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

    componentDidMount(){
        this.getTodos();
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
            <hr/>
            <Todos todos={this.state.todos}/>
          </div>;
    }
}

export default App 