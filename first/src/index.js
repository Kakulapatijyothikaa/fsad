import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';

//import TextBox from './TextBox';
//import Class from './exp-1a';
//import Funtiona from './exp-1b';
//import Life from './exp-2';
//import State from './exp-3';
//import Stateful from './exp-4';
import StudentListClass from './StudentsList';
//import Logins from './exp-8.js';
//import StudentListFunction from './exp-6';
//import Cond1 from './exp-7';
//import Refs from './exp-10';
//import Profile from './exp-9a';
import reportWebVitals from './reportWebVitals';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StudentListClass/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
