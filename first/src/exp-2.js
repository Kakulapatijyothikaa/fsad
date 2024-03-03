import React,{Component} from 'react';
class Life extends Component{
    constructor(props){
        super(props);
        this.state={hello:"world!"};
    }
    componentWillMount(){
        console.log("componentWillMount()");
    }
    componentDidMount(){
        console.log("componentDidMount()");
    }
    changeState(){
        this.setState({hello:"User!"});
    }
    render(){
        return(
            <div>
                <h2>Hello{this.state.hello}</h2>
                <h2>
                    <a onClick={this.changeState.bind(this)}>press Here!!!!</a>
                </h2>
            </div>
        );
            
        }
        shouldComponentUpdate(nextProps,nextState){
            console.log("Inside componentUpdate()");
            return true;

        }
        componentWillUpdate(){
            console.log("Inside componentWillUPdate()");
        }
        componentDidUpdate(){
            console.log("Inside componentDidUpdate()");
        }
}
export default Life;
