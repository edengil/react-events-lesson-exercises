import React, { Component } from 'react';
import Task from './Task';

class SpotCheck5 extends Component {

  // Each task should be desplayed with a Task component.
  // Each Task should display the task's text, and a Complete button with the class "complete"
  // However, SpotCheck5 should filter out the tasks whose complete is true
  // Clicking the Complete button should change that task's complete to true in App's state

  constructor() {
    super()
    this.state = {
      tasks: [
        { text: "Take out trash", complete: false },
        { text: "Trash talk Carrie", complete: true },
        { text: "Carry boxes upstairs", complete: false }
      ]
    }
  }

  markComplete = text => {
    let currentTasks = [...this.state.tasks]
    currentTasks.find(t => t.text === text && t.complete == false).complete = true

    this.setState({
      tasks:currentTasks
    })
  }

  render() {
    return (
      <div>
        <div>
          {this.state.tasks.filter(t =>!t.complete).map(t => 
          <Task task={t} markComplete={this.markComplete}/>)}
        </div>
         <h1>Trash</h1>
        <div>
              {this.state.tasks.filter(t =>t.complete).map(t => 
              <Task task={t} markComplete={this.markComplete}/>)}
        </div>
      </div>
    )
  }
}

export default SpotCheck5;
