import React from "react";
import Button from "react-bootstrap/Button";
import education from "../images/education.jpeg";
import finance from "../images/finance.jpeg";
import marketing from "../images/education.jpeg";
import engneering from "../images/engeering.jpeg";
import health from "../images/helth.jpeg";
import software from "../images/software.jpeg";
import bg from "../images/bg.jpg";
import {Link} from 'react-router-dom'


function Home() {
  return (
    <>
      <div className="container-main" style={{ backgroundImage: `url(${bg})` }}>
        <div className="body container">
          <h1>
            Your job search ends here
            <h4>Discover 50 lakh+ career opportunities</h4>
          </h1>
          <Link to="/search">
          <Button className="w-25 explore" variant="success">
            Explore Jobs
          </Button>{" "}
          </Link>
        </div>
      </div>
      <div className="service-category">
        <span>FEATURED TOURS Packages</span>
        <h2>Browse Top Categories </h2>
      </div>

      <div class="container mt-5">
        <div class="row">
          <div class="col-md-4">
            <div class="card card-category">
              <img
                src={software}
                class="card-img-top mx-auto"
                alt="Software Development"
              ></img>
              <div class="card-body">
                <h5 class="card-title">Software Development</h5>
                <p class="card-text">
                  Jobs related to coding, programming, and software creation.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-category">
              <img
                src={marketing}
                class="card-img-top mx-auto"
                alt="Marketing"
              ></img>
              <div class="card-body">
                <h5 class="card-title">Marketing</h5>
                <p class="card-text">
                  Jobs related to advertising, branding, and sales strategies.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-category">
              <img
                src={health}
                class="card-img-top mx-auto"
                alt="Healthcare"
              ></img>
              <div class="card-body">
                <h5 class="card-title">Healthcare</h5>
                <p class="card-text">
                  Jobs in medical fields, including nursing, doctors, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-4">
            <div class="card card-category">
              <img
                src={education}
                class="card-img-top mx-auto"
                alt="Education"
              ></img>
              <div class="card-body">
                <h5 class="card-title">Education</h5>
                <p class="card-text">
                  Jobs in teaching, research, and academic administration.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-category">
              <img
                src={finance}
                class="card-img-top mx-auto"
                alt="Finance"
              ></img>
              <div class="card-body">
                <h5 class="card-title">Finance</h5>
                <p class="card-text">
                  Jobs in banking, investment, and financial management.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-category">
              <img
                src={engneering}
                class="card-img-top mx-auto"
                alt="Engineering"
              ></img>
              <div class="card-body">
                <h5 class="card-title">Engineering</h5>
                <p class="card-text">
                  Jobs in various engineering fields including civil,
                  mechanical, and electrical.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
