import React from 'react'
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap'

class LoginForm extends React.Component {
    render() {
        return (
            <Container className="App">
                <Form className="form">
                    <FormGroup>
                        <Label for="id_number">ID Number</Label>
                        <Input
                            type="text"
                            name="id_number"
                            id="id_number"
                            placeholder="Your ID Number"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="********"
                        />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </Container>
        )
    }
}

export default LoginForm