import React from 'react';
import { Form, Input, Button, Modal, Divider } from 'semantic-ui-react';

import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

export default function SignUpModal(props){
  return(
    <div id='Signupmodal'>
      <Modal trigger={<Button>Create Petition</Button>} closeIcon id="secondModal">
        <Modal.Content scrolling>
          <p>
            You need to sign up or log in to create a petition
          </p>
            <SignUpForm
              onChange={props.onChange}
              onLoginChange={props.onLoginChange}
              values={props.values}
              handleSignup={props.handleSignup}
              continue={props.continue}/>
            <LoginForm id="secLogin"
              handleLogin={props.handleLogin}
              value={props.value}
            />
            <Divider vertical> Or </Divider>
        </Modal.Content>
      </Modal>
    </div>
  )
}
