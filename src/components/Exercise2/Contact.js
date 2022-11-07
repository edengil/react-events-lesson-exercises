import React, { Component } from 'react';

class Contact extends Component {
  complete = () => {
    this.props.displayConvo(this.props.name)
  }
  render() {
    return (
      <div >
        
        <span className="add" onClick={this.complete}> {this.props.name} </span>

        {/* should render a "name" recieved in props */}
        {/* Should also reieve the displayConvo prop, and call the function onClick */}
      </div>
    );
  }
}

export default Contact;
