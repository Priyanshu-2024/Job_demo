import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer class="footer mt-5">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h5>About Us</h5>
                    <p>We are a leading job portal helping job seekers find their dream jobs and employers find the best talent.</p>
                </div>
                <div class="col-md-2">
                    <h5>Quick Links</h5>
                    <ul class="list-unstyled">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div class="col-md-2">
                    <h5>Support</h5>
                    <ul class="list-unstyled">
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h5>Contact Us</h5>
                    <ul class="list-unstyled">
                        <li>Email: support@jobportal.com</li>
                        <li>Phone: +1 234 567 890</li>
                        <li>Address: 123 Job Street, Employment City, Jobland</li>
                    </ul>
                    <div class="social-icons">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col text-center">
                    <p>&copy; 2024 Job Portal. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer