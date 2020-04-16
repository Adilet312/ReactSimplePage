// import 'bootstrap/dist/css/bootstrap.min.css';
// import React from 'react';
// import ReactDOM from 'react-dom';
//
// let Confirmation = (props) => props.isLogIn ? <h1>Login confirmed!</h1> : <h1>Invalid Login</h1> ;
// let LogInButtom = (props) => <button onClick={props.onClick}> Log In </button>;
// let LogOutButtom = (props) => <button onClick={props.onClick}> Log Out </button>;
//
// class LoginControl extends React.Component
// {
//    /*Constructor*/
//     constructor(){
//        super();
//         this.state = {isLogIn: false} }
//     /*Log in method*/
//     logIn = () => this.setState({isLogIn:true});
//     /*Log out method*/
//     logOut = () => this.setState({isLogIn:false});
//
//     render(){
//       const logInOut = this.state.islogIn;
//       let submit;
//       logInOut ? submit = <LogOutButtom onClick={this.logOut}/> : submit = <LogInButtom onClick={this.logIn}/>
//       return (<div>
//                 <Confirmation isLogIn = {logInOut} />
//                 {submit}
//              </div>);
//     }
// }
// 
// ReactDOM.render(
//   <LoginControl/>,
//   document.getElementById('root')
//
// );
