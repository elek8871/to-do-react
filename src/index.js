import React from "react"
import  ReactDOM  from "react-dom"
import MyList from "./MyList"
import "./index.css"

const toDos = ["sleep", "code", "relax"]

ReactDOM.render(
  <MyList theList={toDos} />,
  document.getElementById("root")
)

//  ------ should have changed App to MyList---------
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
