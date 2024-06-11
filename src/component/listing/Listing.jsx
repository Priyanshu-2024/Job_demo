import React, {useEffect , useState} from 'react'
import { rawdata } from '../../assets/rawData'
import { useLocation, useSearchParams } from 'react-router-dom';
import Jobcard from './Jobcard';
import { useNavigate } from 'react-router-dom';

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";

function Listing() { 
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [datapass , setDatapass] = useState([])
  const filteredData = [];
  const navigate = useNavigate(); 

  useEffect(() => {
    const jobSearch = searchParams.get('jobSearch');
    const locationParam = searchParams.get('location');
    const experience = searchParams.get('experience');
  
   
  
    rawdata.forEach(job => {
      const matchesJobSearch = job.job_designation.toLowerCase().includes(jobSearch.toLowerCase());
  
      const matchesLocation = locationParam ? job.city.toLowerCase() === locationParam.toLowerCase() || job.state.toLowerCase() === locationParam.toLowerCase() : true;
  

      if (matchesJobSearch && matchesLocation) {
        filteredData.push(job);
      }
    });
  
    console.log('Job Search:', jobSearch);
    console.log('Location:', locationParam);
    console.log('Experience:', experience);
    console.log('Filtered Data:', filteredData);
    setDatapass(filteredData)
  
  }, [location, searchParams]);
  
  
  function navigateToDetails(job){
   
    const queryParams = new URLSearchParams({
      job
    }).toString();


    navigate(`/details?${queryParams}`);
  }
  return (
    <>
      <div className="container main d-flex">
      
        <div className="filters">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Filters</Card.Title>
              <Card.Text>Job Portal</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item className="lists">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Work Mode</Accordion.Header>
                    <Accordion.Body>
                      <Form.Check inline label="WFH" name="group1" />
                      <Form.Check inline label="WFO" name="group1" />
                      <Form.Check inline label="Hybrid" name="group1" />
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </ListGroup.Item>
              <ListGroup.Item className="lists">
              <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Company</Accordion.Header>
                    <Accordion.Body>
                      <Form.Check className="checks" inline label="Startup's" name="group2" />
                      <Form.Check inline label="Mid Level" name="group2" />
                      <Form.Check inline label="Intl. MNC's" name="group2" />
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </ListGroup.Item>
              <ListGroup.Item className="lists">
              <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Salary</Accordion.Header>
                    <Accordion.Body>
                      <Form.Check inline label="10-25LPA" name="group3" />
                      <Form.Check inline label="32-36LPA" name="group3" />
                      <Form.Check inline label="Above 50LPA" name="group3" />
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </ListGroup.Item>
              <ListGroup.Item className="lists">
              <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Education</Accordion.Header>
                    <Accordion.Body>
                      <Form.Check inline label="B.E/B.Tech" name="group4" />
                      <Form.Check inline label="Post Graduate" name="group4" />
                      <Form.Check inline label="B.C.A/M.Sc(I.T)" name="group4" />
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>

        <div className="listing">      
        {datapass.map((job)=>(
          <Jobcard key={job} data={job} onCardClick={() => navigateToDetails(job.id)}></Jobcard>
        ))}  
        </div>
      </div>
    </>
  );
}

export default Listing