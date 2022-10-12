import React from 'react';

import '../assets/style/taskApp.css';
import tasks from '../data/tasksData.js';

import Todo from './Todo.jsx';
import Done from './Done.jsx';
import Task from './Task.jsx';
import AddTask from './addTask.jsx';


/*
 define root component
*/
export default class TaskApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasksToDo : [],
                   tasksDone : [] };
  }

  componentDidMount() {
    tasks.forEach(
      elt => elt.priority = '1'
    );
    this.setState({tasksToDo : tasks});
  }


  addTask(description, duration) {
    const newTask = this.state.tasksToDo;
    newTask.push(
      {
        id : 'T' + (newTask.length + 1),
        description : description,
        duration : parseInt(duration),
        priority : 1
      });

      this.setState({tasksToDo : newTask});
    }


  doneTask(id) {
    const copyTasks = [...this.state.tasksToDo];
    const copyDoneTasks = [...this.state.tasksDone];

    const doneTaskIndex = copyTasks.findIndex(task => task.id === id);
    const doneTask = copyTasks[doneTaskIndex];
    copyTasks.splice(doneTaskIndex, 1);
    this.setState({tasksToDo : copyTasks, tasksDone : [...copyDoneTasks, doneTask]});
  }


  changeOfPriority(id, newPrority) {
    const index = (element) => element.id === id;
    const tasks2 = this.state.tasksToDo;
    tasks2[tasks2.findIndex(index)].priority = newPrority;

    this.setState({tasksToDo : tasks2});
  }


  render() {
    return(
      <div className = "taskApp">
        <AddTask
         addTask = {this.addTask.bind(this)}
        />
        <Todo
          tasksToDo = {this.state.tasksToDo}
          changeOfPriority = {this.changeOfPriority.bind(this)}
          doneTask = {this.doneTask.bind(this)}
        />
        <Done
          doneTask = {this.doneTask.bind(this)}
          tasksDone = {this.state.tasksDone}
        />
      </div>
    );
  }
}
