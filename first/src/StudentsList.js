/*import React,{Component} from "react";
import { Students } from "./student";
class StudentListClass extends Component{
    render(){
        return(
            <div>
                Students List:
                {Students.map((student)=>(
                    <>
                    <StudentItem
                    key={student.id}
                    name={student.name}
                    id={student.id}
                    favSubject={student.favSubject}/>
                    <br/>
                    </>
                ))}
            </div>
        );
    }
}
class StudentItem extends Component{
    render(){
        return(
            <>
            <div>Id:{this.props.id}</div>
            <div>Name:{this.props.name}</div>
            <div>Favourite Subject:{this.props.favSubject}</div>
            </>
        )
    }
}
export default StudentListClass;*/
import React from 'react';
import StudentItem from './props'; 
const StudentList = () => {
 const studentList = [
 { sid: 1, sname: 'jyothika', favour: 'C' },
 { sid: 2, sname: 'lasya', favour: 'Python' },
 { sid: 3, sname: 'vara', favour: 'Java' },
 ];
 return (
 <div>
 <h2>Student List</h2>
 <table border="1">
 <thead>
 <tr>
 <th>Student ID</th>
 <th>Student Name</th>
 <th>Favorite Subject</th>
 </tr>
 </thead>
 <tbody>
 {studentList.map((student) => (
 <StudentItem
 key={student.sid}
 sid={student.sid}
 sname={student.sname}
 favour={student.favour}
 />
 ))}
 </tbody>
 </table>
 </div>
 );
};
export default StudentList;