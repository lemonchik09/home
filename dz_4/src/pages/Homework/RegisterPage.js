import React, { useState } from "react";
import { Form, Button, Container, Spinner } from 'react-bootstrap';
import { registerNewAccountAction } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const RegistrationPage = () => {
    const { preloader } = useSelector(state => state.registrationReducer);
    const dispatch = useDispatch();
    const [data, setData] = useState({
        username: "",
        email: "",
        password: ""
    });
    const [Class, setClass] = useState({
        username: false,
        email: false,
        password: false
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({
            ...data,
            [name]: value
        });
        setClass({
            ...Class,
            [name]: value === ""
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = Object.values(data).every(val => val !== "");
        if (isValid) {
            dispatch(registerNewAccountAction(data));
        } else {
            setClass({
                username: data.username === "",
                email: data.email === "",
                password: data.password === ""
            });
        }
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        name="username"
                        value={data.username}
                        onChange={handleChange}
                        isInvalid={Class.username}
                        placeholder="Enter your username"
                    />
                    <Form.Control.Feedback type="invalid">
                        Username is required
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        isInvalid={Class.email}
                        placeholder="Enter email"
                    />
                    <Form.Control.Feedback type="invalid">
                        Email is required
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                        isInvalid={Class.password}
                        placeholder="Enter password"
                    />
                    <Form.Control.Feedback type="invalid">
                        Password is required
                    </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit">
                    {preloader ? (
                        <Spinner animation="border" size="sm" />
                    ) : (
                        "Register"
                    )}
                </Button>
            </Form>
        </Container>
    );
};

export default RegistrationPage;

