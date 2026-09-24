import React from "react";

import {
  Row,
  Col,  
  FormGroup,
  Button,
  Label,
  Input,  
  FormFeedback,
  Form,  
} from "reactstrap";
// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

const FormContact = () => {

  // Form validation
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      firstname: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("Please Enter Your  Name"),
      email: Yup.string()
        .matches(
          /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
          "Invalid email address"
        )
        .required("Please Enter Your Email"),
      subject: Yup.string().required("Please Enter Your Subject"),
      message: Yup.string().required("Please Enter Your message"),
    }),
    onSubmit: (values) => {
      console.log("values", values);
    },
  });

  return (
    <React.Fragment>
      <Form
        className="needs-validation"
        onSubmit={(e) => {
          e.preventDefault();
          validation.handleSubmit();
          return false;
        }}
      >
        <Row>
          <Col md={4}>
            <FormGroup className="mb-3">
              <Label htmlFor="validationCustom01">First name</Label>
              <Input
                name="firstname"
                placeholder="Your name*..."
                type="text"
                className="form-control"
                id="validationCustom01"
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
                value={validation.values.firstname || ""}
                invalid={
                  validation.touched.firstname && validation.errors.firstname
                    ? true
                    : false
                }
              />
              {validation.touched.firstname && validation.errors.firstname ? (
                <FormFeedback type="invalid">
                  {validation.errors.firstname}
                </FormFeedback>
              ) : null}
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup className="mb-3">
              <Label htmlFor="validationCustom02">Email</Label>
              <Input
                name="email"
                placeholder="Your email*..."
                type="text"
                className="form-control"
                id="validationCustom02"
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
                value={validation.values.email || ""}
                invalid={
                  validation.touched.email && validation.errors.email
                    ? true
                    : false
                }
              />
              {validation.touched.email && validation.errors.email ? (
                <FormFeedback type="invalid">
                  {validation.errors.email}
                </FormFeedback>
              ) : null}
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup className="mb-3">
              <Label htmlFor="validationCustom03">Subject</Label>
              <Input
                name="subject"
                placeholder="Your Subject*..."
                type="text"
                id="validationCustom03"
                className="form-control"
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
                value={validation.values.subject || ""}
                invalid={
                  validation.touched.subject && validation.errors.subject
                    ? true
                    : false
                }
              />
              {validation.touched.subject && validation.errors.subject ? (
                <FormFeedback type="invalid">
                  {validation.errors.subject}
                </FormFeedback>
              ) : null}
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <FormGroup className="mb-3">
              <Label htmlFor="validationCustom05">Message</Label>
              <Input
                name="message"
                placeholder="Your message*..."
                type="textarea"
                className="form-control"
                id="validationCustom05"
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
                value={validation.values.message || ""}
                rows={5}
                invalid={
                  validation.touched.message && validation.errors.message
                    ? true
                    : false
                }
              />
              {validation.touched.message && validation.errors.message ? (
                <FormFeedback type="invalid">
                  {validation.errors.message}
                </FormFeedback>
              ) : null}
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="text-end">
            <Button
              color="primary"
              className="submitBnt btn  btn-custom border-0"
              type="submit"
            >
              Send Message
            </Button>
          </Col>
        </Row>
      </Form>
    </React.Fragment>
  );
};

export default FormContact;
