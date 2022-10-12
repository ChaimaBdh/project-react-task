import React from 'react';

import '../assets/style/priorityScale.css';

import PriorityLevel from './PriorityLevel.jsx'
import DoneButton from './DoneButton.jsx';


export default class priorityScale extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const levelComponents = [];
    for(let i = 1; i <= 6; i++) {
      let name = '';
      if (i <= this.props.priorityLevel){
        name = 'level on';
      } else {
        name = 'level off';
      }
      levelComponents.push(
        <PriorityLevel
          key = {i}
          id = {this.props.id}
          name = {name}
          level = {i}
          changeOfPriority = {this.props.changeOfPriority}
        />
      );
    }
    return(
      <div className = "scale">
        {levelComponents}
      </div>
    );
  }
}
