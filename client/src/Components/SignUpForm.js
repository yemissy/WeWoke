import React from 'react';
import { Form, Input, Button } from 'semantic-ui-react';



export default function SignUpForm(props){
  return(
    <div className='signup'>
      <h2>Become a member</h2>
      <Form onSubmit ={props.handleSignup}>
        <Form.Group inline>
          <Form.Field  required>
            <label>Firstname</label>
            <Input
              placeholder="Firstname"
              name = "firstName"
              onChange = {props.onChange}
              value = {props.values.firstName}

            />
          </Form.Field>
          <Form.Field   required>
            <label>Lastname</label>
            <Input
              placeholder="Lastname"
              name = "lastName"
              onChange = {props.onChange}
              value = {props.values.lastName}
            />
          </Form.Field>
        </Form.Group>
        <Form.Group inline>
          <Form.Field  required>
            <label>Email</label>
            <Input
              placeholder="Email"
              name = "email"
              onChange = {props.onChange}
              value = {props.values.email}
            />
          </Form.Field>
          <Form.Field  required>
            <label>Password</label>
            <Input
              placeholder="Password"
              name = "password"
              onChange = {props.onChange}
              value = {props.values.password}
            />
          </Form.Field>
        </Form.Group>
        <Form.Group inline>
          <Form.Field>
            <label>Number</label>
            <Input
              placeholder="Telephone"
              name = "number"
              onChange = {props.onChange}
              value = {props.values.number}
            />
          </Form.Field>
          <Form.Field>
            <label>organization</label>
            <Input
              placeholder="Enter your Organization Name"
              name = "organizationName"
              onChange = {props.onChange}
              value = {props.values.organizationName}
            />
          </Form.Field>
        </Form.Group>
        <Button type="submit" onClick={()=>props.handleSignup} className='signupbtn' color='blue'>SignUp</Button>
      </Form>
    </div>
  )
}
