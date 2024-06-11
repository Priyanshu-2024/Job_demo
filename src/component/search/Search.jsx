import React, { useState } from 'react';
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


function Search() {
  const [jobSearch, setJobSearch] = useState('');
  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
    event.preventDefault();
    

    const queryParams = new URLSearchParams({
      jobSearch,
      location,
      experience
    }).toString();

    navigate(`/list?${queryParams}`);
  };

  return (
    <Container style={{ marginTop: '70px' }} className="d-flex flex-column align-items-center vh-100">
      <Row className="text-center mb-4">
        <Col>
          <h1>Find your dream job now</h1>
          <p>5 lakh+ jobs for you to explore</p>
        </Col>
      </Row>
      <Row className="w-100 justify-content-center">
        <Col md={10}>
          <Form onSubmit={handleSubmit} className="d-flex align-items-center border p-3 rounded-pill">
            <InputGroup className="flex-grow-2 mr-2" style={{ flexBasis: '50%' }}>
              <InputGroup.Text className="bg-white border-0">
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Enter skills / designations / companies"
                aria-label="Job search"
                value={jobSearch}
                onChange={(e) => setJobSearch(e.target.value)}
                className="border-0"
                style={{ boxShadow: 'none' }}
              />
            </InputGroup>
            <span className="mx-2">|</span>
            <InputGroup className="flex-grow-1 mr-2" style={{ flexBasis: '20%' }}>
              <InputGroup.Text className="bg-white border-0">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Location"
                aria-label="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="border-0"
                style={{ boxShadow: 'none' }}
              />
            </InputGroup>
            <span className="mx-2">|</span>
            <InputGroup className="flex-grow-1" style={{ flexBasis: '20%' }}>
              <Form.Control
                as="select"
                aria-label="Experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="border-0"
                style={{ boxShadow: 'none' }}
              >
                <option value="">Experience</option>
                <option value="fresher">Fresher(less than or equal to 1 year)</option>
                <option value="2">2 years</option>
                <option value="3">2 years</option>
                <option value="4">4 years</option>
                <option value="5">5+ years</option>
              </Form.Control>
            </InputGroup>
            <Button
              variant="success"
              type="submit"
              className="px-6 ml-3 rounded-pill"
              style={{ whiteSpace: 'nowrap' }}
            >
              Find Jobs
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Search;
