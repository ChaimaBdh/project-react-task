import React from 'react';

import '../assets/style/tasklist.css';

import Task from './Task.jsx';

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filterValue:'' }
  }

  filterValueChanged(event) {
    this.setState({filterValue : event.target.value});
  }

  totalTask() {
    return this.props.tasksToDo.length;
  }

  durationOfTask() {
    return this.props.tasksToDo.reduce ((acc, task) => acc+task.duration, 0);
  }


  render() {
    const tasksData = this.props.tasksToDo.filter(
      task => task.description.toLowerCase().includes(this.state.filterValue.toLowerCase())
    );

    const taskComponents = tasksData.sort(compare).map(
      elt =>
        <Task
          id = {elt.id}
          duration = {elt.duration}
          description = {elt.description}
          priority = {elt.priority}
          key = {elt.id}
          changeOfPriority = {this.props.changeOfPriority}
          doneTask = {this.props.doneTask}
        />
      );

    return(
      <div className = "tasklist">
        <h3> Tâches en cours </h3>
        <input
          type = "text"
          value = {this.state.filterValue}
          onChange = {this.filterValueChanged.bind(this) }
          placeholder = "filter"/>
        <div> Il y a {this.totalTask()} tâches en cours. Pour une durée de {this.durationOfTask()} min. </div>
        {taskComponents}
        </div>
      );
    }
}

/** function that compare two elements
 * @param elt1 the first element
 * @param elt2 the second element
 * @return 1 if the first element's priority is less than the second element,
 * returns -1 if not
 */
function compare(elt1, elt2) {
	if(elt1.priority < elt2.priority) {
		return 1;
	}
	if(elt1.priority > elt2.priority ) {
		return -1;
	}
	return 0;
}
