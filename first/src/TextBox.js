import React ,{Component} from 'react';
class TextBox extends  Component{
   // constructor(){
        //super{
           // f2(e) => {
             //   alert("hello")
               // alert('${this.state.name}'
                //event.preventDefault())
              
          //  } 
        //}
    //}
    render() {
        return (
            <form onSubmit={this.f2}>
                <div>
            
            Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="myTextBox" value={this.name} /> 
            <br></br>
             Password:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="password" placeholder="atlest 6 characters"/>
             <br></br>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<option>IT</option>
                <option>CSE</option>
                <option>MECH</option>
                <option>ECE</option>
             </select>
             <br></br>
             
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>Submit </button>
          </div></form>
         
        );
      
      };
      
}

export default TextBox;