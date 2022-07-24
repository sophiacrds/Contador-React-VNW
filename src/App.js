import React from "react";
import "./style.css";

export default class App extends React.Component{
  state = {
    num: 0
  }

  colorAdd = () => (this.state.num >= 5 ? document.body.style.background = "#e7e4da" : null)
  colorSub = () => (this.state.num <= 5 ? document.body.style.background = "#d8d2c0" : null)

  // criei duas funções para possibilitar a ativação da mudança de cor sempre no número 5

  add = () => {
    this.colorAdd()
    this.setState({
      num: this.state.num + 1
    })
  }

  sub = () => {
    this.colorSub()
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
