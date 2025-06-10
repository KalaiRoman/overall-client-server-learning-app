// LoginPage.js
import React, { useReducer, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  InputGroup,
} from "react-bootstrap";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import HigherOrderComponent from "../../hoc/HigherOrderComponent";

function UseLoginPage(state, action) {
  switch (action.type) {
    case "Increment":
      return { ...state, count: state.count + 1 };
    case "Decrement":
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
}

const Login = (props) => {
  const initialState = {
    count: 0,
    loading: true,
  };

  const [state, dispatch] = useReducer(UseLoginPage, initialState);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password) {
      }
    } catch (error) {}
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">

      <Row className="w-100">
        <Col md={{ span: 6, offset: 3 }}>
          <Card className="shadow p-4 rounded-4">
            <Card.Title className="text-center mb-4">Login</Card.Title>
            <div>
              <Form.Group controlId="formBasicEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                  value={email}
                  name="email"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <InputGroup>
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    onChange={handleChange}
                    value={password}
                    name="password"
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

              <div onClick={() => dispatch({ type: "Increment" })}>
                {props?.buttons(
                  props.functionNames.capitalLetterChange("welcome")
                )}
                {state.count}
              </div>

              <Button
                variant="primary"
                type="submit"
                className="w-100"
                onClick={handleSubmit}
              >
                Login
              </Button>

              <div className="text-center mt-3">
                <a href="#">Forgot password?</a>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HigherOrderComponent(Login);
