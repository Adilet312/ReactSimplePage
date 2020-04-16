// import React, { Component } from "react";
// import "./styles.css";
// class Dynamic extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [
//         { color: "black", text: "Yellow in Black" },
//         { color: "red", text: "Blue in Red" },
//         { color: "green", text: "White in Green" },
//         { color: "yellow", text: "Yellow in White" }
//       ]
//     };
//   }
//   render() {
//     const data = this.state.data;
//     return (
//       <div className="container">
//         <Box data={data} />
//       </div>
//     );
//   }
// }
// const Box = props => {
//   return (
//     <>
//       {props.data.map(el => {
//         return <div id={el.color}> {el.text}</div>;
//       })}
//     </>
//   );
// };
// export default Dynamic;
//
//
//
//
// /*  Styling
//
// body {
//   font-family: sans-serif;
//   text-align: center;
//   padding: 90px 20px;
// }
// .container {
//   box-shadow: 0 0 10px gray;
//   border-radius: 8px;
//   padding: 10px 2px;
//   width: 600px;
// }
// .container > div {
//   display: inline-block;
//   width: 25%;
//   padding: 1.6em 1em;
//   font-weight: 800;
//   font-size: 1.2rem;
// }
// #black {
//   background: black;
//   color: yellow;
// }
// #red {
//   background: red;
//   color: blue;
//   margin: 0 5px 0 5px;
// }
// #green {
//   background: green;
//   color: white;
// }
// */
