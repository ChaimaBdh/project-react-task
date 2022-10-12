import React, {createRef} from 'react';

import '../assets/style/addtask.css';

export default class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.refDescription = React.createRef();
    this.refDuration = React.createRef();
  }

  addNewTask() {
    const description = this.refDescription.current.value;
    const duration = this.refDuration.current.value;
    this.props.addTask(description, duration);
  }


  render() {
    return(
      <div className = "addTask">
        <input type = "text" placeholder = "description" ref = {this.refDescription}/>
        <input type = "number" min = "1" ref = {this.refDuration}/>mn
        <button onClick = {this.addNewTask.bind(this)}>
          Add
        </button>
      </div>
    );
  }
}
