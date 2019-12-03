import React, { Component } from "react";

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        task: "",
        completed: false
      }
    };
  }

  handleFormDataChange = event => {
    const { name, value } = event.target;
    this.setState({
      formData: {...this.state.formData,
      [name]: value
    }});
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state);
  };
  render() {
    const { task } = this.state.formData;
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            name="task"
            placeholder="...todo"
            value={task}
            onChange={this.handleFormDataChange}
          />
            <button type="submit">ADD TODO</button>
        </form>
        {/* <button>CLEAR COMPLETED</button> */}
      </div>
    );
  }
}

export default TodoForm;
