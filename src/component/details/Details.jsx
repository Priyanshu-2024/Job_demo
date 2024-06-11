import React ,{useEffect , useState}from 'react'
import { rawdata } from '../../assets/rawData'
import { useLocation, useSearchParams } from 'react-router-dom';


import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from 'react-bootstrap/Button';

function Details() {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [data, setJobDetails] = useState({});

  useEffect(()=>{
    const id = searchParams.get('job');
    if (id) {
      const foundJob = rawdata.find(job => job.id === parseInt(id));
      console.log("bhiye",foundJob);
      setJobDetails(foundJob);
    }
  },[searchParams])


  return (
   <>
   <div className="container mt-5">
        <Card style={{ width: "50rem" }}>
          <Card.Body className="card">
            <Card.Title>{data?.job_designation}</Card.Title>
            <Card.Text>{data?.company_info?.name}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item className="lists">
              <b>Exp : </b>{data?.experience}
            </ListGroup.Item>
            <ListGroup.Item className="lists">
              <b>salary : </b>{data?.salary}
            </ListGroup.Item>
            <ListGroup.Item className="lists">
              <b>location : </b>{data?.company_info?.address}
            </ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link className="me-5 foot2" href="#">
            <b>Posted : </b>{data?.posted}
              <b className="ms-4">Openings : </b>{data?.openings}
              <b className="ms-4">Applicants : </b>{data?.applicants}
            </Card.Link>
            <Card.Link className="foot2 ms-3 " href="#">
            <Button  className='mt-3'  variant="success">Register To Apply</Button>
            <Button className='button ms-3 mt-3' variant="success">Login To Apply</Button>
            </Card.Link>
          </Card.Body>
        </Card>

        <Card className="mt-2" style={{ width: "50rem" }}>
          <Card.Body>
            <Card.Title>{data?.job_designation}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Job Description
            </Card.Subtitle>
            <Card.Text>
            {data?.job_description}
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted">
              Roles & Responsibilities
            </Card.Subtitle>
            <Card.Text>
           {data.role_responsibilities}
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted">
              Required Qualifications
            </Card.Subtitle>
            <Card.Text>
           {data.preferred_candidate_profile}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
   </>
  )
}

export default Details