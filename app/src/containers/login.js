import React from 'react'
import { firebase } from './../firebase'
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  signInSuccessUrl: '/home',
  callbacks: {
    signInSuccessWithAuthResult: () => true
  }
};
class Login extends React.Component {
  componentWillMount() {
    console.log('here')
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
      (user) => {
        console.log('here2')
        this.props.signIn(user)}
    );
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    console.log('here3333')
    return (
      <div>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
      </div>
    )
  }
}
export default Login
