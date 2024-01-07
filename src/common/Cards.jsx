import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';


function Cards({ name, username, email, address, phone, website, company }) {

  let navigate=useNavigate();

  const handleCreateClick = () => {
    navigate('/create');
  };


  return (
    <div className='mx-auto'>
      <Card style={{ width: '18rem', margin: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <Card.Img variant="bottom" src="https://www.globalsign.com/application/files/1116/0389/9380/iStock-187186651.png" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2"><b>Username:</b> {username}</Card.Subtitle>
          <Card.Text><b>Email:</b> {email}</Card.Text>
          <Card.Text><b>Address:</b> {address}</Card.Text>
          <Card.Text><b>Phone:</b> {phone}</Card.Text>
          <Card.Text><b>Website:</b> {website}</Card.Text>
          <Card.Text><b>Company:</b> {company}</Card.Text>
          <Button variant="primary" onClick={handleCreateClick}>
  Create New One
  </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

Cards.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};

export default Cards;
