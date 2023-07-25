import React from 'react'
import { Link } from 'react-router-dom';
import {
    ListGroup,
    ListGroupItem,
    Button,
} from 'reactstrap';

export const UserList = () => {
  return (
   <ListGroup className="mt-4"> 
    <ListGroupItem className='d-flex'/>
     <strong>User one</strong>
    <div className="mb-auto">
        <Link className="btn btn-warning m-2 " to="/edit/1" >Edit</Link>
        <Button color='danger'>Delete</Button>

    </div>
    <ListGroupItem className='d-flex'/>
     <strong>User Two</strong>
    <div className="mb-auto">
        <Link className="btn btn-warning m-2 " to="/edit/1" >Edit</Link>
        <Button color='danger'>Delete</Button>

    </div>
    <ListGroupItem className='d-flex'/>
     <strong>User Three</strong>
    <div className="mb-auto">
        <Link className="btn btn-warning m-2 " to="/edit/1" >Edit</Link>
        <Button color='danger'>Delete</Button>

    </div>
   </ListGroup>
  )
}

export default UserList
