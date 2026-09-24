import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Animated } from "react-animated-css";
import FormContact from "./Form";

class GetInTouch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      email: "",
      subject: "",
      comments: "",
      msgSendSuccess: false,
    };
  }

  handleSubmit = () => {
    let emailPattern = new RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);

    if (
      this.state.firstname !== "" &&
      this.state.email !== "" &&
      emailPattern.test(this.state.email) &&
      this.state.subject !== "" &&
      this.state.comments !== ""
    ) {
      this.setState({ msgSendSuccess: true });
      this.myFormRef.reset();

      setTimeout(() => {
        this.setState({ firstname: "" });
        this.setState({ email: "" });
        this.setState({ subject: "" });
        this.setState({ comments: "" });
        this.setState({ msgSendSuccess: false });
      }, 5000);
    }
  };

  onInputChangeHandlar = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <React.Fragment>
        <section className="section" id="contact">
          <Container>
            <Row>
              <Col sm="12">
                <div className="title-box text-center">
                  <h2>Have any questions?</h2>
                </div>
              </Col>
            </Row>

            <Row className="contact-footer">
              <Col sm="4">
                <div className="contact-footer-box text-center">
                  <i className="ti-mobile"></i>
                  <h5>123-456-789-0</h5>
                </div>
              </Col>

              <Col sm="4">
                <div className="contact-footer-box text-center">
                  <i className="ti-map-alt"></i>
                  <h5>New York City, USA</h5>
                </div>
              </Col>

              <Col sm="4">
                <div className="contact-footer-box text-center">
                  <i className="ti-email"></i>
                  <h5>emailaddress@domain.com</h5>
                </div>
              </Col>
            </Row>

            <Row>
              <Col sm="12">
                <h4>Send us a message!</h4>
                <div id="message">
                  {this.state.msgSendSuccess ? (
                    <Animated
                      animationIn="bounceInLeft"
                      animationOut="zoomOutDown"
                      animationInDuration={1000}
                      animationOutDuration={1000}
                      isVisible={true}
                    >
                      <fieldset>
                        <div id="success_page">
                          <h3>Email Sent Successfully.</h3>
                          <p>
                            Thank you <strong>{this.state.firstname}</strong>,
                            your message has been submitted to us.
                          </p>
                        </div>
                      </fieldset>
                    </Animated>
                  ) : null}
                </div>
                <FormContact />
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default GetInTouch;
