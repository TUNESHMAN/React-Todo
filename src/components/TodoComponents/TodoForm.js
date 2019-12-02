import React, { Component } from "react";

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        task: "",
        id: "",
        completed: false
      }
    };
  }

  handleFormDataChange = event => {
    const { name, value } = event.target;
    this.setState({
      ...this.state.formData,
      [name]: value
    });
  };

handleFormSubmit= event =>{
    event.preventDefault();
}
  render() {
    const { duty } = this.state.formData;
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            value={duty}
            onChange={this.handleFormDataChange}
            placeholder="What next?"
          />
        </form>
        <button>ADD TODO</button>
        <button>CLEAR COMPLETED</button>
      </div>
    );
  }
}

export default TodoForm;
