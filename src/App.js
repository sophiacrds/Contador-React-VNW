import React from "react";
import "./style.css";

export default class App extends React.Component{
  state = {
    num: 0
  }

  add = () => {
    this.state.num >= 5 ?
    document.body.style.background = "#e7e4da"
    : document.body.style.background = "#d8d2c0"

    this.setState({
      num: this.state.num + 1
    })
  }
  
  color = () => {
    return(
      this.state.num <= 5 ?
      document.body.style.background = "#d8d2c0"
      : null
    )
  }

  sub = () => {
    this.color()
    return(
      this.state.num > 0 ?
      this.setState({
        num: this.state.num - 1
      })
      : null
    )
  }


  render(){
    return(
      <section>
      <p>{this.state.num}</p>
      <div>
        <button className="balloon" onClick={this.sub}>-</button>
        <button className="balloon" onClick={this.add}>+</button>
      </div>
      </section>
    )
  }
}
