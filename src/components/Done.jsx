import React from 'react';

import '../assets/style/doneButton.css';

import DoneTask from './DoneTask.jsx';

export default class Done extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hidden : true};
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((prevState, props) => ({hidden : !prevState.hidden}))
  }


  render() {
    const doneTasks = this.state.hidden ? [] : this.props.tasksDone.map(
      task => <DoneTask {...task} key = {task.id} />
    );

    const buttonTxtContent = this.state.hidden ? "+(" + this.props.tasksDone.length + ")" : "-";
    return(
      <div className = "tasklist">
        <h3> Tâches terminées
          <button onClick = {this.toggle}>
            {buttonTxtContent}
          </button>
        </h3>
        {doneTasks}
    </div>
    );
  }
}
