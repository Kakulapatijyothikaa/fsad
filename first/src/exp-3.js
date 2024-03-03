import React,{Component} from 'react';
class State extends Component{

    constructor(props){
        super(props);
        this.state={count:0};
    }
    render(){
        return (
            <>
            <h1>Button clicked:{this.state.count}</h1>
            <button 
            onClick={(e)=>{
                e.stopPropagation();
                e.preventDefault();
                this.setState({count:this.state.count+1});
            }}
            >click to update 
            </button>
            </>
        );
    }
}
export default State;