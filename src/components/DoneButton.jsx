import React from 'react';

import '../assets/style/doneButton.css';

export default class DoneButton extends React.Component {
  constructor(props) {
    super(props);
  }

  taskDone() {
      this.props.doneTask(this.props.id);
  }


  render() {
    return(
      <div className = "doneButton" onClick = {this.taskDone.bind(this)}>
        &#10004;
      </div>
    );
  }
}
