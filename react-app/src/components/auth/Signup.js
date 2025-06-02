// SignupPage.js
import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  InputGroup,
} from 'react-bootstrap';
import { Eye, EyeSlash } from 'react-bootstrap-icons';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Send data to backend API here
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100">
        <Col md={{ span: 6, offset: 3 }}>
          <Card className="shadow p-4 rounded-4">
            <Card.Title className="text-center mb-4">Sign Up</Card.Title>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <InputGroup>
                  <Form.Control
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <Button
                    variant="outline-secondary"
                    onClick={togglePassword}
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeSlash /> : <Eye />}
                  </Button>
                </InputGroup>
              </Form.Group>

              <Button variant="success" type="submit" className="w-100">
                Register
              </Button>
              <div className="text-center mt-3">
                <span>Already have an account? <a href="/">Login</a></span>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
