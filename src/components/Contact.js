import React from 'react'

function Contact() {
  return (
    <div>
            <header className="masthead" style={{backgroundImage: `url('assets/img/contact-bg.jpg')`}}>
            <div className="container position-relative px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="page-heading">
                            <h1>Contact Me</h1>
                            <span className="subheading">Have questions? I have answers.</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        {/* <!-- Main Content--> */}
          <main classNameName="mb-4">
            <div classNameName="container px-4 px-lg-5">
                <div classNameName="row gx-4 gx-lg-5 justify-content-center">
                    <div classNameName="col-md-10 col-lg-8 col-xl-7">
                        <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
                        <div classNameName="my-5">
                            {/* <!-- * * * * * * * * * * * * * * *-->
                            <!-- * * SB Forms Contact Form * *-->
                            <!-- * * * * * * * * * * * * * * *-->
                            <!-- This form is pre-integrated with SB Forms.-->
                            <!-- To make this form functional, sign up at-->
                            <!-- https://startbootstrap.com/solution/contact-forms-->
                            <!-- to get an API token!--> */}
                            <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                                <div classNameName="form-floating">
                                    <input classNameName="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                    <label for="name">Name</label>
                                    <div classNameName="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                </div>
                                <div classNameName="form-floating">
                                    <input classNameName="form-control" id="email" type="email" placeholder="Enter your email..." data-sb-validations="required,email" />
                                    <label for="email">Email address</label>
                                    <div classNameName="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                    <div classNameName="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                </div>
                                <div classNameName="form-floating">
                                    <input classNameName="form-control" id="phone" type="tel" placeholder="Enter your phone number..." data-sb-validations="required" />
                                    <label for="phone">Phone Number</label>
                                    <div classNameName="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                                </div>
                                <div classNameName="form-floating">
                                    <textarea classNameName="form-control" id="message" placeholder="Enter your message here..." style="height: 12rem" data-sb-validations="required"></textarea>
                                    <label for="message">Message</label>
                                    <div classNameName="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                </div>
                                <br />
                                {/* <!-- Submit success message-->
                                <!---->
                                <!-- This is what your users will see when the form-->
                                <!-- has successfully submitted--> */}
                                <div classNameName="d-none" id="submitSuccessMessage">
                                    <div classNameName="text-center mb-3">
                                        <div classNameName="fw-bolder">Form submission successful!</div>
                                        To activate this form, sign up at
                                        <br />
                                        <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                    </div>
                                </div>
                                {/* <!-- Submit error message-->
                                <!---->
                                <!-- This is what your users will see when there is-->
                                <!-- an error submitting the form--> */}
                                <div classNameName="d-none" id="submitErrorMessage"><div classNameName="text-center text-danger mb-3">Error sending message!</div></div>
                                {/* <!-- Submit Button--> */}
                                <button classNameName="btn btn-primary text-uppercase disabled" id="submitButton" type="submit">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Contact