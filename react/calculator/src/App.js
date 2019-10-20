import React, { Component } from "react"
// import Value from "./components/Value"
import Number from "./components/Number"
import Formula from "./components/Formula"
import "./assets/css/reset.css"
import "./assets/css/style.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startValue: 0,
      formValue: 0,
      formCheck: false,
      viewValue: "0",
      endValue: 0
    }
  }
  numberCallback = dataFromChild => {
    this.setState({
      viewValue:
        this.state.viewValue === "0" ? dataFromChild : this.state.viewValue + dataFromChild,
      formValue: this.state.viewValue * 1
    })
  }
  formCallback = dataFromChild => {
    if (dataFromChild === "=") {
    } else {
      this.setState({
        formCheck: true,
        viewValue: this.formCheck(dataFromChild)
      })
    }
  }
  formCheck = v => {
    if (this.state.formCheck === false) {
      return this.state.viewValue + v
    } else {
      alert("연산은 한개만 가능!!")
      return this.state.viewValue
    }
  }
  render() {
    return (
      <div className="calc-wrap">
        {/* <Value /> */}
        <div className="calc-header">
          <div className="value">{this.state.viewValue}</div>
        </div>
        <div className="calc-button">
          <Number callbackFromParent={this.numberCallback} />
          <Formula callbackFromParent={this.formCallback} />
        </div>
        formValue : {this.state.formValue}
      </div>
    )
  }
}

export default App
