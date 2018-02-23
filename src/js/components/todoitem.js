import React, { Component } from "react";

class TodoItems extends Component {
//   deleteProject(id) {
//     // console.log(id);
//     this.props.onDelete(id);
//   }
  render() {
    return <li className="todo">{this.props.todo.title}</li>;
  }
}

export default TodoItems;
