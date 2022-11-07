import React, { Component } from 'react';



class Exercise1 extends Component {
  constructor() {
    super()
    this.state = {
      images: [
        "http://www.agr.gc.ca/resources/prod/img/discover-decouvrez/potatoes300x210.jpg",
        "http://www.agr.gc.ca/resources/prod/img/discover-decouvrez/potatoes300x210.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/220px-PerfectStrawberry.jpg"],
      currentImg: 0
    }
  }
  shiftImageBack = () => {
    let currentImg = this.state.currentImg
    if (currentImg < 2 && currentImg >= 0){
      currentImg++
    }else if(currentImg === 2){
      currentImg = 0
    }

    this.setState({
      currentImg:currentImg
    })  
  }
  shiftImageForward = () => {
    let currentImg = this.state.currentImg
    if (currentImg <= 2 && currentImg > 0){
      currentImg--
    }else if(currentImg === 0){
      currentImg = 2
    }
    this.setState({
      currentImg:currentImg
    })  
    // shiftImageForward - this should increase currentImg by 1
  }

  render() {
    return (
      <div>
        {/* {this.state.images.map(i => <ImagDiv image={i} shiftImageBack={this.shiftImageBack} shiftImageForward={this.shiftImageForward} />)} */}
        <button onClick={this.shiftImageBack}>Previous</button>
        <img 
      src= {this.state.images[this.state.currentImg]}
      alt="new"/>
        <button onClick={this.shiftImageForward}>Next</button>
      </div>
    );
  }
}

export default Exercise1;
