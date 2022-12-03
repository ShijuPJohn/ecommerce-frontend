import React, {useState} from 'react';
import FormContainer from "../components/FormContainer";

function LoginScreen(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <>
            <h1>Login Screen</h1>
            <FormContainer/>
        </>
    );
}

export default LoginScreen;