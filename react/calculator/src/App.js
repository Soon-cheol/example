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
      formValue1: 0,
      formValue2: 0,
      formula: '',
      formCheck: false,
      viewValue: "0",
      endValue: 0
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
      if(this.state.formula === ''){
        alert('연산식을 입력하세요.')
      }else{
        let fNum = this.state.viewValue.indexOf(this.state.formula);
        this.state.formValue1 = this.state.viewValue.substring(0, fNum) * 1;
        this.state.formValue2  = this.state.viewValue.substring(fNum + 1) * 1;
        if(this.state.formula === '+'){
          this.setState({
            viewValue : this.state.formValue1 + this.state.formValue2
          })
        }else if(this.state.formula === '-'){
          this.setState({
            viewValue : this.state.formValue1 - this.state.formValue2
          })
        }else if(this.state.formula === 'x'){
          this.setState({
            viewValue : this.state.formValue1 * this.state.formValue2
          })
        }else if(this.state.formula === '/'){
          this.setState({
            viewValue : this.state.formValue1 / this.state.formValue2
          })
        }
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
      formValue1: 0,
      formValue2: 0,
      formula: '',
      formCheck: false,
      viewValue: "0",
      endValue: 0
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
