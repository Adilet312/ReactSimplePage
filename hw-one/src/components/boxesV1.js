// import React from 'react';
// import ReactDOM from 'react-dom';
//
//
// /*container for all boxes*/
// let mainBoxStyle = {
//   width:"615px",
//   height:"100px",
//   border: "2px solid #bfbcbc54",
//   backgroundColor:"#d3d3d32e",
//   paddingLeft: "15px",
//   paddingTop: "15px",
//   margin: "100px auto"
//
// }
// /*text style*/
// let textStyle = {
//   position:"absolute",
//   top:"40%",
//   left:"20%"
// }
// /*General Box*/
//
// let box = {
//   width:"200px",
//   height:"80px",
//   fontSize: "15px",
//   textAlign: "center",
//   float: "left",
//   position: "relative"
// }
//
// /*Black box style*/
// let blackBoxStyle = {
//   backgroundColor: "black",
//   color: "yellow"
// }
// /*Red box style*/
// let redBoxStyle = {
//   backgroundColor: "red",
//   color: "blue",
//   marginLeft: "5px"
// }
// /*Green Box style*/
// let greenBoxStyle = {
//   backgroundColor: "green",
//   color: "white",
//   marginLeft: "5px"
// }
//
//
//
// let BlackBox = (props) => <div style = {{...blackBoxStyle,...box}}> <span style = {textStyle}>{props.title}</span></div>;
// let RedBox   = (props) => <div style = {{...redBoxStyle,...box}}>   <span style = {textStyle}>{props.title}</span></div>;
// let GreenBox = (props) => <div style = {{...greenBoxStyle,...box}}> <span style = {textStyle}>{props.title}</span></div>;
// let App = () => (
//                 <div style={mainBoxStyle}>
//                   <BlackBox title = "Yellow In Black"/>
//                   <RedBox title = "Blue In Red"/>
//                   <GreenBox title = "White In Green"/>
//                 </div>
//               );
//
//
// ReactDOM.render(
//   <App/>,
//   document.getElementById('root')
//
// );

//<LifeCycles language={this.state.language} />
// componentDidMount = () => {
//   fetch('https://jsonplaceholder.typicode.com/albums')
//  .then(response => response.json())
//  .then(json => console.log(json))
// }
