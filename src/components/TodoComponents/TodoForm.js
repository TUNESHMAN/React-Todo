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

  render() {
    return (
      <div>
        <form>
          <input type="text" value={this.state.formData} />
        </form>
      </div>
    );
  }
}

export default TodoForm;
