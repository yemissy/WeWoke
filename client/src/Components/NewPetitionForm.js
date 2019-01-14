import React from 'react';
import { Form, Input, Button, Modal } from 'semantic-ui-react';


// import CreatePetitionBtn from './CreatePetitionBtn';
// import OtherLink from './OtherLink';

export default function PetitionForm(props){
  return(
    <div id='modal'>
      <Modal trigger={<Button>Create Petition</Button>} closeIcon>
        <Modal.Content>
          <p>
            Please fill in the required information
          </p>
          <Form onSubmit={props.newPetition}>
            <Form.Group inline>
              <Form.Field required>
                <label>Title</label>
                <Input  placeholder="Title"
                name= "title"
                value={props.data.title}
                onChange={props.onChange}/>
              </Form.Field>
              <Form.Field required>
                <label>category</label>
                <Input placeholder="Category"
                name= 'category'
                value= {props.data.category}
                onChange={props.onChange}/>
              </Form.Field>
            </Form.Group>
            <Form.Group inline>
              <Form.Field required>
                <label>Detail</label>
                <Input
                placeholder="Detail"
                name='detail'
                value= {props.data.detail}
                onChange={props.onChange}/>
              </Form.Field>
              <Form.Field >
                <label>Organizer</label>
                <Input
                placeholder="Organizer"
                name='Organizers_Name'
                value= {props.data.Organizers_Name}
                onChange={props.onChange}/>
              </Form.Field>
              <Form.Field required>
                <label>Summary</label>
                <Input  placeholder="Summary"
                name='summary'
                value= {props.data.summary}
                onChange={props.onChange}/>
              </Form.Field>
            </Form.Group>
            <Button type="submit" onClick={()=>props.newPetition}  color='blue'>Create</Button>
          </Form>
        </Modal.Content>
      </Modal>
    </div>
  )
}
