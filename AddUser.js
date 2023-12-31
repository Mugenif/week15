import React from 'react';

import { Link } from 'react-router-dom';

import{
  Form,
  FormGroup,
  Label,
  Input,
  Button,

} from 'reactstrap';

export const AddUser = () => {
  return (
    <Form>
      <FormGroup>
        <Label>Name</Label>
        <Input type='text' placeholder='Enter Name'></Input>
      </FormGroup>
      <Button type='submit'>Submit</Button>
      <Link to="/Home" className='btn btn-danger m-2'>Cancel</Link>

    </Form>
  )
}

export default AddUser
