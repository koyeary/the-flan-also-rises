import React from "react";
import { Form, Button } from 'react-bootstrap';

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <Form.Group>
      <Form.Control {...props} />
    </Form.Group>
  );
}

export function TextArea(props) {
  return (
    <Form.Group>
      <Form.Control as='textarea' rows="20" {...props} />
    </Form.Group>
  );
}

export function FormBtn(props) {
  return (
    <Button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </Button>
  );
}

export default Form;