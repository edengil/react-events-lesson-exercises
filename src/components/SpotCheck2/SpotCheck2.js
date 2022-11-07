import React, { Component } from 'react';

export const Home = function () {
  return <div>Welcome to our page</div>
  // Should return some JSX with a div that has a class "home" and the text "Welcome to our page"
}

export const About = function () {
  return <div>It's great here</div>
  // Should return some JSX with a div that has a class "about" and the text "It's great here"
}

export class SpotCheck2 extends Component {
  
  
  // Your SpotCheck2 should render the Home Component, the About Component, and a Toggle Button
  // Either the Home or About component should be rendered when you press the toggle button
  // You should have a state with the property "showHome", with a value of true or false
  // You must use state and setState, to change the value of showHome
  constructor() {
    super()
    this.state ={
      showHome: true
    }
  }
  updateShowHome = () => {
    this.setState({
      showHome: !this.state.showHome
    })
  }

  render() {
    return (
      <div >
            <button id="logger" onClick={this.updateShowHome}>Toggle</button>
            {this.state.showHome ? <Home/> : <About/>}
      </div>
    );
  }
}


// class Bank extends React.Component{
//   constructor(){
//     super();
//     this.state = {
//       availableCash: 100000,
//       vipClients: ["Trisha", "Kareem", "Melanie", "Anish"]
//     }
//   }

//   doubleMoney = () =>{
//     //Here it's okay to access state directly as we modify it
//       //This is *not* the same as modifying state directly
//       //i.e. it's not this.state.availableCash = this.state.availableCash * 2
//     this.setState({
//       availableCash: this.state.availableCash * 2
//     })
//   }
  
//   removeVIP = () =>{
//     //Here we must use the spread operator
//     //If we don't, then currentVIPs will just be a reference to this.state.vipClients
//     //And since currentVIPs.pop() is the same as this.state.vipClients.pop() - it's not allowed
//     let currentVIPs = [...this.state.vipClients]
//     currentVIPs.pop()
//     this.setState({
//       vipClients: currentVIPs
//     })
//   }
  
//   showStatus = () => {
//     console.log(this.state.availableCash)
//     console.log(this.state.vipClients)
//   }
  
//   render(){
//     return(<div>
//       <button onClick={this.doubleMoney}>Add Money</button>
//       <button onClick={this.removeVIP}>Remove VIP</button>
//       <button onClick={this.showStatus}>Show</button>
//     </div>)
//   }
// }

// ReactDOM.render(<Bank />, document.getElementById("container"));
