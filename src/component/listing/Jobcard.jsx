import React from 'react'
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from 'react-router-dom';


function Jobcard({data , onCardClick}) {

  const handleCardClick = () => {
    onCardClick(data.id);
  };
  
  return (
    <div className="list mb-4" onClick={handleCardClick}>
     
          <Card style={{ width: "40rem" }}>
            <Card.Body className="card">
              <Card.Title>{data.job_designation}</Card.Title>
              <Card.Text>{data.company_info.name}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item className="lists">
                <b>Expirence : </b>{data.experience}
              </ListGroup.Item>
              <ListGroup.Item className="lists">
                <b>salary : </b>{data.salary}
              </ListGroup.Item>
              <ListGroup.Item className="lists">
                <b>loc : </b>{data.city},{data.state}
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Text className="me-5 foot2">
               {data.posted}
              </Card.Text>
              <Card.Text className="foot2">
                {" "}
                <b className="me-2">Save</b> <i className="fas fa-save"></i>
              </Card.Text>
            </Card.Body>
          </Card>
         
        </div>
  )
}

export default Jobcard