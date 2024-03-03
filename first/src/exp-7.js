import React, {Component} from 'react';
export default class Cond1 extends Component {
    f1(e){
        return document.getElementById('p').innerHTML="you click 1 button"

    }
    f2(e){
        return document.getElementById('p').innerHTML="you click 2 button"
    }
    render(){
        return(
            <div>
                <p id='p'></p>
                <button onClick={this.f1}>First</button>
                <button onClick={this.f2}>Second</button>
            </div>
        )
    }
}