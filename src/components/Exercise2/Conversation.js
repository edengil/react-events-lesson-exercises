import React, { Component } from 'react';

class Conversation extends Component {
    back = () => {
    this.props.displayConvo(null);
  }
  //should recieve the prop "convo"
  render() {
    return (
        <div>
          {this.props.convo.map((t,i) => 
          
          <div key={i}>
            <span><h4>
              {t.sender === "self" ? "Me": this.props.sender}
            
            </h4></span>
            {t.text}
          </div>)}
          <button onClick={this.back}>Back</button>

        </div>
    );
  }
}

export default Conversation;
