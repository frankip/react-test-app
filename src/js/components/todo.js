import React, { Component } from "react";
import TodoItems from "./todoitem";


class Todos extends Component {
//   deleteProject(id) {
//     this.props.onDelete(id);
//   }
  render() {
    let todoItems;
    if (this.props.todos) {
      todoItems = this.props.todos.map(todo => {
        //   console.log(project);
        return (
            <TodoItems key={todo.title} todo={todo} />
        );
      });
    }
    return (
      <div className="todos">
        <h3> Todo List </h3>
        {todoItems}
      </div>
    );
  }
}

export default Todos;
