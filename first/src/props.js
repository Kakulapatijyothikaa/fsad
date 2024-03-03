import React from "react";
const studentItem=(props)=>{
// const sname=props.name;
// const sid=props.id;
// const favour=props.sub;
 const {sid,sname,favour}=props
 return(
 <tr>
 <td>{sid}</td>
 <td>{sname}</td>
 <td>{favour}</td>
 </tr>
 )
}
export default studentItem;