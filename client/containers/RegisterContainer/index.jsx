// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { func } from 'prop-types';
// import axios from 'axios';

// import store from '../../redux/store';
// import { Register } from '../../components/';
// // import { userSignUpRequest } from '../../redux/actions/signUpActions';

// class RegisterContainer extends Component {
//     constructor ( props ) {
//         super( props );

//         this.state = {
//             credentials: {
//                 firstName: '',
//                 lastName: '',
//                 username: '',
//                 email: '',
//                 password: ''
//             },
//             errors: {}
//         }
//     }

//     static propTypes = {
//         userSignUpRequest: func.isRequired
//     }

//     onSubmit(e) {
//         e.preventDefault();
//         this.setState({
//             errors:{}
//         });
//         this.props.userSignUpRequest(this.state.credentials).then(
//             () => {},
//             ({data}) => {console.log(data)}
//         );
//     }

//     handleFirstNameChange(e) {
//         console.log(e.target.value);
//         let newCredentials = Object.assign({}, this.state.credentials);
//         newCredentials.firstName = e.target.value;
//         this.setState({credentials: newCredentials});
//     }

//     handleLastNameChange(e) {
//         let newCredentials = Object.assign({}, this.state.credentials);
//         newCredentials.lastName = e.target.value;
//         this.setState({credentials: newCredentials});
//     }

//     handleUsernameChange(e) {
//         let newCredentials = Object.assign({}, this.state.credentials);
//         newCredentials.username = e.target.value;
//         this.setState({credentials: newCredentials});
//     }
    
//     handleEmailChange(e) {
//         let newCredentials = Object.assign({}, this.state.credentials);
//         newCredentials.email = e.target.value;
//         this.setState({credentials: newCredentials});
//     }

//     handlePasswordChange(e) {
//         let newCredentials = Object.assign({}, this.state.credentials);
//         newCredentials.password = e.target.value;
//         this.setState({credentials: newCredentials});
//     }

//     render () {
//         let onSubmit = this.onSubmit.bind(this);
//         let handleFirstNameChange = this.handleFirstNameChange.bind(this);
//         let handleLastNameChange = this.handleLastNameChange.bind(this);
//         let handleUsernameChange = this.handleUsernameChange.bind(this);
//         let handleEmailChange = this.handleEmailChange.bind(this);
//         let handlePasswordChange = this.handlePasswordChange.bind(this);
//         return (
//             <Register
//                 credentials = {this.state.credentials}
//                 errors = {this.state.errors}
//                 onSubmit = {onSubmit}
//                 handleFirstNameChange = {handleFirstNameChange}
//                 handleLastNameChange = {handleLastNameChange}
//                 handleUsernameChange = {handleUsernameChange}
//                 handleEmailChange = {handleEmailChange}
//                 handlePasswordChange = {handlePasswordChange}
//             />
//         );
//     }
// }

// const mapStateToProps = store => {
//   return {};
// };

// export default connect(mapStateToProps, {userSignUpRequest})(RegisterContainer);