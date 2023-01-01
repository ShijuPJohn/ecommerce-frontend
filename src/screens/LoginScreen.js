import React, {useEffect, useState} from 'react';
import FormContainer from "../components/FormContainer";
import {Button, Col, Form, Row} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../actions/userActions";

function LoginScreen({location, history}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const userLogin = useSelector(state => state.user)
    const {error, loading, userInfo} = userLogin
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        if (userInfo) {
            console.log(userInfo)
            navigate('/')
        }
        console.log('login :', login(email, password))
    }, [userLogin])

    function formSubmitHandler(e) {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <FormContainer>
            <h1>Login</h1>
            <Form onSubmit={formSubmitHandler}>
                <Form.Group controlId={"username"}>
                    <Form.Label>Email Address:</Form.Label>
                    <Form.Control
                        type={"username"}
                        placeholder={"Enter email"}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId={"password"}>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type={"password"}
                        placeholder={"Enter password"}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    ></Form.Control>
                </Form.Group>
                <br/>
                <Button
                    type={"submit"}
                    onSubmit={formSubmitHandler}
                    variant={"primary"}
                >Sign In</Button>
            </Form>
            <Row className={"py-3"}>
                <Col>
                    New Customer?<Link to={"/register"}>Register</Link>
                </Col>

            </Row>
        </FormContainer>
    );
}

export default LoginScreen;