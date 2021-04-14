import { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Button, Col, Container, Form, FormGroup, Input, Label, Navbar, NavbarBrand, Row } from "reactstrap";

function Question() {
    const [ans, setAns] = useState(null);
    return (
        <>
            <Navbar fixed='top' color='dark' dark >
                <NavbarBrand href="/"><img src='../images/CTDlogo.png' width='75px' ></img></NavbarBrand>
                <h4 style={{ color: 'white' }}>INQUIZITIVE</h4>
                <div style={{ color: 'white' }}>Time: 0:47</div>
            </Navbar>
            <Container style={{ marginTop: '90px', marginBottom: '75px' }}>
                <Row>
                    <Col>
                        <h2>Question: 3</h2>
                    </Col>
                    <Col>
                        <div style={{ float: 'right' }}>
                            <CountdownCircleTimer
                                onComplete={(time) => { console.log(time) }}
                                isPlaying
                                duration={30}
                                size={50}
                                strokeWidth={6}
                                rotation='counterclockwise'
                                colors={[
                                    ['#004777', 0.33],
                                    ['#F7B801', 0.33],
                                    ['#A30000', 0.33],
                                ]}
                            >
                                {({ remainingTime }) => remainingTime}
                            </CountdownCircleTimer>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>
                            Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum?
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form onSubmit={(e) => { console.log('submit!', e) }}>
                            <FormGroup>
                                <Label htmlFor='ans'><b>Ans :</b></Label>
                                <Input type='textarea' id='ans' name='ans' placeholder='Your Answer' innerRef={(input) => setAns(input)}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Button className='float-right' type='submit' value='submit' color='primary'>SUBMIT</Button>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <Navbar fixed='bottom' color='dark' dark expand="md">
                    <Button color='danger' className='ml-auto'>End Test</Button>
                </Navbar>
            </Container>
        </>
    );
}

export default Question;