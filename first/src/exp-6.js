/*import React from "react";
import { Students } from "./StudentsList.js";
const StudentListFunction = () =>{
    return(<div>
        Students List:
        {Students.map((student)=>(
            <>
            <Studentitem
            key={student.id}
            name={student.name}
            id={student.id}
            favSubject={student.favSubject}
            />
            <br/>
            </>

        ))}
        </div>);
};
const Studentitem = ({id,name,favSubject }) => {
    return (
        <>
        <div>Id:{id}</div>
        <div>Name:{name}</div>
        <div>favorite Subject:{favSubject}</div>
        </>
    );
};
*/
import React from 'react';
import PropTypes from 'prop-types';
function MyComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>Your age: {props.age}</p>
    </div>
  );
}
MyComponent.propTypes = {
  name: PropTypes.string.isRequired, 
  age: PropTypes.number.isRequired,  
};
function App() {
  return (
    <div>
      <MyComponent name="Alice" age={30} /> 
      <MyComponent name={42} age="Bob" />   
    </div>
  );
}
export default App;
