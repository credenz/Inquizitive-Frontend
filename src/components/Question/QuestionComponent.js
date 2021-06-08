import React, { useState } from 'react';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Button, Col, Container, Form, FormGroup, Input, Label, Navbar, NavbarBrand, Row } from "reactstrap";
import './QuestionComponent.css';
import ctdlogo from "../../images/ctd.png";
import { useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

function Question() {
    const [redirect, setRedirect] = useState(0);
    const [title, setTitle] = useState(0);
    const [description, setDescription] = useState(' ');
    const [ans, setAns] = useState(" ");

    let token = 'b6c6700def6c372914267ddf6fae233caee84c375ace8cff3bdf522f742ea589';

    useEffect(() => {
        console.log('Hi!')
        axios.get('http://127.0.0.1:8000/quiz/question/', {
            headers: { 'Authorization': 'token ' + token, 'Content-Type': 'application/json' }
        })
            .then((res) => {
                if (res.status == 200) {
                    if (res.data === 'logout') {
                        setRedirect(1);
                    } else {
                        setTitle(res.data.data.number_of_question_solved);
                        setDescription(res.data.data.description);
                    }
                } else {
                    alert(res.statusText, res.status);
                }
            })
            .catch((res) => alert(res));
    }, []);

    const send = (e) => {
        if (e) e.preventDefault();
        var bodyFormData = new FormData();
        bodyFormData.append('answer', ans);
        axios.post('http://127.0.0.1:8000/quiz/response/', { "answer": ans.toString() }, {
            headers: { "Authorization": "token " + token, "Content-Type": "application/json" }
        })
            .then((res) => {
                if (res.status == 200) {
                    if (res.data === 'logout') {
                        setRedirect(1);
                    } else {
                        setTitle(res.data.data.number_of_question_solved);
                        setDescription(res.data.data.description);
                    }
                } else {
                    alert(res.statusText, res.status);
                }
            })
            .catch((res) => alert(res));
    }

    if (redirect === 1) {
        return (<Redirect to='endpage' />);
    } else {
        return (
            <div className='backgd'>
                <Navbar fixed='top' color='dark' dark >
                    <NavbarBrand href="/"><img src={ctdlogo} width='75px' ></img></NavbarBrand>
                    <h4 className='name' >INQUIZITIVE</h4>
                    <div className='name' >Time: 0:47</div>
                </Navbar>
                <Container className='content' >
                    <Row>
                        <Col xs='8' className='title'>
                            <h1 className='title' >Question {title + 1}</h1>
                        </Col>
                        <Col xs='4'>
                            <div className='circletimer' >
                                <CountdownCircleTimer
                                    key={title ? title : 0}
                                    onComplete={() => { }}
                                    isPlaying
                                    duration={30}
                                    size={75}
                                    strokeWidth={8}
                                    trailColor={'rgba(255,255,255,0.3)'}
                                    rotation='counterclockwise'
                                    colors={[
                                        ['#004777', 0.33],
                                        ['#F7B801', 0.33],
                                        ['#A30000', 0.33],
                                    ]}
                                >
                                    {({ remainingTime }) => <h2>{remainingTime}</h2>}
                                </CountdownCircleTimer>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className='descp overflow-auto'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula id urna in egestas. Sed sed mollis massa, eu euismod nibh. Aenean nec feugiat purus, faucibus ornare mauris. Duis placerat maximus tristique. Suspendisse lobortis lectus eget fermentum accumsan. Donec ullamcorper hendrerit enim, vitae malesuada enim vulputate eget. Phasellus nec ullamcorper quam, vel feugiat augue. Nulla mattis nibh eu ullamcorper efficitur. Quisque sit amet vulputate nisi, ac dignissim purus. Nulla interdum, est ut tincidunt hendrerit, quam eros congue nunc, id commodo ex leo quis metus. Fusce tincidunt semper rutrum. Nunc aliquam ultrices turpis eu luctus. Proin eros lorem, mollis id lectus non, volutpat rhoncus turpis.</p>
                            </div>
                        </Col>
                    </Row>

                    <Navbar fixed='bottom' color='dark' dark expand="md">
                        <Button color='danger' className='ml-auto'>End Test</Button>
                    </Navbar>
                </Container>
                <Container className='formcont position-fixed fixed-bottom' >
                    <Row>
                        <Col>
                            <Form onSubmit={send} >
                                <FormGroup>
                                    <Label htmlFor='ans'><b>Ans :</b></Label>
                                    <Input type='text' id='ans' autoComplete='off' placeholder='Your Answer' innerRef={(input) => setAns(input)}></Input>
                                </FormGroup>
                                <Button className='float-right' type='submit' value='submit' color='primary'>SUBMIT</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Question;