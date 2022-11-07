import React, { Component } from 'react';
import Contact from './Contact';



class List extends Component {
  //should recieve the prop "contact"
  render() {
    let t = this.props.contacts
    return (
      <div >
        <Contact name={t.with} displayConvo={this.props.displayConvo}/>
      </div>
    );
  }
}

export default List;
