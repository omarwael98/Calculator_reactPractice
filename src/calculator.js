import React,{Component} from "react";
import {create,all} from 'mathjs';
import './calculatorstyle.css';


class Calculator extends Component{

    constructor(props)
    {
        super(props);

        this.state = {
            result: 0,
            problem:'',
            oldResult: 0
        }
    }

    clearPressed = () =>{
        this.setState(
            {
                problem:'',
                result:0
            }
        );
    }

    onPressed = (str) => {
        this.setState((state) => ({problem:state.problem+str}));
    }

    deletePressed = () => {
        this.setState((state) => ({problem:state.problem.slice(0, -1)}));
    }


    AnsPressed = () => {
        this.setState((state) => ({problem:state.problem+state.oldResult.toString()}));
    }

    solveProblem = () => {
        const config = {
            epsilon: 1e-12,
            matrix: 'Matrix',
            number: 'number',
            precision: 64,
            predictable: false,
            randomSeed: null
          }
          const math = create(all, config)
          var x = math.evaluate(this.state.problem);
          this.setState({result:x, oldResult:x});
    }

    render(){
        return(
            <div id='container'>
                <div id='screen'>
                    <div id='probview'>{this.state.problem}</div>
                    <div id='resultview'>{this.state.result}</div>
                </div>
                <div id='btns'>
                    <table>
                        <tbody>
                            <tr>
                                <td><button id='ob' onClick={()=>this.onPressed('(')}>(</button></td>
                                <td><button id='cb' onClick={()=>this.onPressed(')')}>)</button></td>
                                <td><button id='sqrt' onClick={()=>this.onPressed('sqrt(')}>sqrt</button></td>
                                <td><button id='clear' onClick={()=>this.clearPressed()}>C</button></td>
                                <td><button id='delete' onClick={()=>this.deletePressed()}>del</button></td>
                            </tr>
                            <tr>
                                <td><button id='pow' onClick={()=>this.onPressed('^')}>^</button></td>
                                <td><button id='log' onClick={()=>this.onPressed('log(')}>Log</button></td>
                                <td><button id='Abs' onClick={()=>this.onPressed('abs(')}>Abs</button></td>
                                <td><button id='exp' onClick={()=>this.onPressed('e')}>e</button></td>
                                <td><button id='mod' onClick={()=>this.onPressed('%')}>mod</button></td>
                            </tr>
                            <tr>
                                <td><button id='seven' onClick={()=>this.onPressed('7')}>7</button></td>
                                <td><button id='eight' onClick={()=>this.onPressed('8')}>8</button></td>
                                <td><button id='nine' onClick={()=>this.onPressed('9')}>9</button></td>
                                <td><button id='minus' onClick={()=>this.onPressed('-')}>-</button></td>
                                <td><button id='divide' onClick={()=>this.onPressed('/')}>/</button></td>
                            </tr>
                            <tr>
                                <td><button id='four' onClick={()=>this.onPressed('4')}>4</button></td>
                                <td><button id='five' onClick={()=>this.onPressed('5')}>5</button></td>
                                <td><button id='six' onClick={()=>this.onPressed('6')}>6</button></td>
                                <td><button id='plus' onClick={()=>this.onPressed('+')}>+</button></td>
                                <td><button id='mul' onClick={()=>this.onPressed('*')}>x</button></td>
                            </tr>
                            <tr>
                                <td><button id='one' onClick={()=>this.onPressed('1')}>1</button></td>
                                <td><button id='two' onClick={()=>this.onPressed('2')}>2</button></td>
                                <td><button id='three' onClick={()=>this.onPressed('3')}>3</button></td>
                                <td><button id='Answer' onClick={()=>this.AnsPressed()}>Ans</button></td>
                                <td><button id='Pi' onClick={()=>this.onPressed('3.14')}>PI</button></td>
                            </tr>
                            <tr>
                                <td colSpan="3" id='zero' onClick={()=>this.onPressed('0')}><button>0</button></td>
                                <td><button id='dot' onClick={()=>this.onPressed('.')}>.</button></td>
                                <td><button id='result' onClick={()=>this.solveProblem()}>=</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Calculator;