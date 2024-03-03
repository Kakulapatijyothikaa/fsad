import React from "react";

class Refs extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    this.textInput.current.focus();
  }

  render() {
    return (
      <div>
        <br></br>
        <input type="text" ref={this.textInput} /><br></br><br></br>
        <button onClick={this.focusTextInput}>Submit</button>
      </div>
    );
  }
}

export default Refs;