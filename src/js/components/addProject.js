import React, { Component } from "react";

class AddProject extends Component {
    constructor(){
        super();
        this.state = {
            newProject:{}
        }
    }
    // static defaultProps = {
    //     categories : ['Web design', 'Web Development', 'Mobile Development']
    // }
    handleSubmit(e){
        if (this.refs.title.value === ''){
            alert('Title is required');
        } else{
             this.setState({newProject:{
                 title: this.refs.title.value,
                 category: this.refs.category.value
             }}, function () {
                //  console.log(this.state);
                this.props.AddProject(this.state.newProject)
             });
        }
        e.preventDefault();
    }

  render() {
    //   let categoryOption = this.props.categories.map(category => {
    //       return <option key={category} value="category">{category} </option>
    //   })
    return <div>
        <h3>Add Projects</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label>
            <br />
            <input type="text" ref="title" />
          </div>
          <div>
            <label>category</label>
            <br />
            <select ref="category">
              {/* {categoryOption} */}
              <option key="Web Design" value="Web Design">
                Web design
              </option>
              <option key="Web Development" value="Web Development">
                Web Development
              </option>
              <option key="Mobile Development" value="Mobile Development">
                Mobile Development
              </option>
            </select>
          </div>
          <br/>
          <input type="submit" value="submit" />
        </form>
      </div>;
  }
}

export default AddProject;
