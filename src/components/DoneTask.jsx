import React from 'react';

import '../assets/style/task.css'

import PriorityScale from './PriorityScale.jsx';
import DoneButton from './DoneButton.jsx'

export default class DoneTask extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <div className = "task"> {this.props.description} ({this.props.duration}min)
      (priorité : {this.props.priority})
      </div>
    );
  }
}
