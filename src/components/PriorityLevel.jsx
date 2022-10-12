import React from 'react';

import '../assets/style/priorityLevel.css';

import PriorityScale from './PriorityScale.jsx'


export default class PriorityLevel extends React.Component {
  constructor(props) {
    super(props);
  }

  taskChanged() {
    this.props.changeOfPriority(this.props.id, this.props.level);
  }


  render() {
    return(
      <div id = "level">
        <div className = {this.props.name} onClick = {() => this.taskChanged()}>
        </div>
      </div>
    );
  }
}
