import React from 'react';

import '../assets/style/task.css'

import PriorityScale from './PriorityScale.jsx';
import DoneButton from './DoneButton.jsx'

export default class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className = "task">
        <div className = "description">
         {this.props.description} ({this.props.duration}mn)
        </div>
        <PriorityScale
          id = {this.props.id}
          priorityLevel = {this.props.priority}
          changeOfPriority = {this.props.changeOfPriority}
        />
        <DoneButton doneTask = {this.props.doneTask} id = {this.props.id}/>
      </div>
    );
  }
}
