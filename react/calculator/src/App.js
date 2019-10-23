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
      formula: "",
      formCheck: false,
      viewValue: "0"
    }
  }
  numberCallback = dataFromChild => {
    this.setState({
      viewValue: this.state.viewValue === "0" ? dataFromChild : this.state.viewValue + dataFromChild
    })
  }
  formCallback = dataFromChild => {
    if (dataFromChild === "=") {
      console.log(this.state.viewValue)
      if (this.state.formula === "") {
        alert("연산식을 입력하세요.")
      } else {
        const fNum = this.state.viewValue.indexOf(this.state.formula)
        let formValue1 = this.state.viewValue.substring(0, fNum) * 1
        let formValue2 = this.state.viewValue.substring(fNum + 1) * 1
        // if (formValue1.indexOf(["."]) === -1) {
        //   formValue1 = (formValue1 + ".0") * 1
        //   console.log(formValue1)
        // }
        // if (formValue2.indexOf(["."]) === -1) {
        //   formValue2 = (formValue2 + ".0") * 1
        //   console.log(formValue2)
        // }
        switch (this.state.formula) {
          case "+":
            this.setState({
              viewValue: formValue1 + formValue2
            })
            break
          case "-":
            this.setState({
              viewValue: formValue1 - formValue2
            })
            break
          case "x":
            this.setState({
              viewValue: formValue1 * formValue2
            })
            break
          case "/":
            this.setState({
              viewValue: formValue1 / formValue2
            })
            break
          default:
        }
        this.reset()
      }
    } else {
      this.setState({
        formCheck: true,
        formula: dataFromChild,
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
  reset = () => {
    this.setState({
      startValue: 0,
      formula: "",
      formCheck: false
    })
  }
  render() {
    return (
      <div className="calc-wrap">
        <div className="calc-header">
          <div className="value">{this.state.viewValue}</div>
        </div>
        <div className="calc-button">
          <Number callbackFromParent={this.numberCallback} />
          <Formula callbackFromParent={this.formCallback} />
        </div>
        <button onClick={this.reset}>초기화 버튼</button>
      </div>
    )
  }
}

export default App
