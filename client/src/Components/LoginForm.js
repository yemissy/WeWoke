import React from 'react';
import { Form, Input, Button } from 'semantic-ui-react';


export default function LoginForm(props){
  return(
    <div id='login'>
      <h2>Already a member ? log in</h2>
      <Form onSubmit={props.handleLogin}>
        <Form.Group widths='equal'>
          <Form.Field inline required>
            <label>Email</label>
            <Input
              placeholder="Please Enter Email "
              name ="email"
              onChange ={props.onLoginChange}
              value ={props.value.email}
            />
          </Form.Field>
          <Form.Field  inline required>
            <label>Password</label>
            <Input
              placeholder="Enter Password"
              name ="password"
              onChange ={props.onLoginChange}
              value ={props.value.password}
            />
          </Form.Field>
        </Form.Group>
        <Button type="submit" color='blue'>Login</Button>
        <h4>Click continue to continue as a guest user</h4>
      </Form>
    </div>
  )
}
