import React from "react";
import './fonts/font-awesome/css/font-awesome.css'

function Footer() {
    return (
    <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>Please fill out the form below to send us an email and we will get back to you as soon as possible.</p>
              </div>
              <form name="sentMessage" id="contactForm" novalidate>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" id="name" className="form-control" placeholder="Name" required="required"/>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="email" id="email" className="form-control" placeholder="Email" required="required"/>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea name="message" id="message" className="form-control" rows="4" placeholder="Message" required></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">Send Message</button>
              </form> 
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">

            <span className="contact-item">
              <h3>Contact Info</h3>
              <p><span><i className="fa fa-map-marker"></i> Address</span>Londan or wherever the FUCK I wan't <br/>
                11106</p>
            </span>

            <div className="contact-item">
              <p><span><i className="fa fa-phone"></i> Phone</span>631.355.2396</p>
            </div>
            <div className="contact-item">
              <p><span><i className="fa fa-envelope-o"></i> Email</span> daniel.ensanian@gmail.com</p>
            </div>
          </div>

          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li><a href="https://www.facebook.com/dannyensanian"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="https://www.linkedin.com/in/daniel-ensanian-a5056137/"><i className="fa fa-linkedin"></i></a></li>
                  <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

}

export default Footer