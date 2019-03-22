import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Contact extends Component {
  render () {
    return (
        <section class="section pb-5">
            <h2 class="section-heading h1 pt-4">Contact us</h2>
            <p class="section-description pb-4">We'd love to hear from you, please drop us a line if you've any query or question.</p>
            <div class="row">
                <div class="col-lg-5 mb-4">
                    <div class="card">
                        <div class="card-body">
                            <div class="form-header blue accent-1">
                                <h3><i class="fas fa-envelope"></i> Write to us:</h3>
                            </div>
                            <p>We'll write rarely, but only the best content.</p>
                            <div class="md-form">
                                <i class="fas fa-user prefix grey-text"></i>
                                <input type="text" id="form-name" class="form-control"/>
                                <label for="form-name">Your name</label>
                            </div>
                            <div class="md-form">
                                <i class="fas fa-envelope prefix grey-text"></i>
                                <input type="text" id="form-email" class="form-control"/>
                                <label for="form-email">Your email</label>
                            </div>
                            <div class="md-form">
                                <i class="fas fa-tag prefix grey-text"></i>
                                <input type="text" id="form-Subject" class="form-control"/>
                                <label for="form-Subject">Subject</label>
                            </div>
                            <div class="md-form">
                                <i class="fas fa-pencil-alt prefix grey-text"></i>
                                <textarea type="text" id="form-text" class="form-control md-textarea" rows="3"></textarea>
                                <label for="form-text">Your Message</label>
                            </div>
                            <div class="text-center mt-4">
                                <button class="btn btn-light-blue">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div id="map-container-google-11" class="z-depth-1-half map-container-6" style="height: 400px">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.813145596989!2d-118.40013994968724!3d34.074301423920495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc014dedd763%3A0x826175330076842e!2s9346+Civic+Center+Dr%2C+Beverly+Hills%2C+CA+90210%2C+Verenigde+Staten!5e0!3m2!1snl!2sbe!4v1550222331165"
                        frameborder="0" style="border:0" allowfullscreen></iframe>
                    </div>
                    <div class="row text-center">
                    <div class="col-md-4">
                        <a class="btn-floating blue accent-1"><i class="fas fa-map-marker-alt"></i></a>
                        <p>Beverly Hills, CA 90210</p>
                        <p>United States</p>
                    </div>
                    <div class="col-md-4">
                        <a class="btn-floating blue accent-1"><i class="fas fa-phone"></i></a>
                        <p>+ 32 269 42 42</p>
                        <p>Mon - Fri, 8:00-22:00</p>
                    </div>
                    <div class="col-md-4">
                        <a class="btn-floating blue accent-1"><i class="fas fa-envelope"></i></a>
                        <p>info@dreamStart.com</p>
                        <p>bestCeo@dreamStart.com</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    )
  }
}

export default Contact
