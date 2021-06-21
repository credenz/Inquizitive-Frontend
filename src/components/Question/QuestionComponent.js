import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Redirect } from 'react-router';
import { Button, Col, Container, Form, FormGroup, Input, Label, Navbar, NavbarBrand, Row } from "reactstrap";
import ctdlogo from "../../images/ctd.png";
import Inq from "../../images/inquizitive.png";
import PISB from "../../images/PISB.png";
import DjangoServerUrl from '../../urls';
import './QuestionComponent.css';

function Question() {
    const [redirect, setRedirect] = useState(0);
    const [title, setTitle] = useState(0);
    const [description, setDescription] = useState(' ');
    const [ans, setAns] = useState("");

    useEffect(() => {
        console.log('Hi!')
        let token = localStorage.getItem('jwtToken');
        axios.get(DjangoServerUrl + 'quiz/question/', {
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
        let token = localStorage.getItem('jwtToken');
        axios.post(DjangoServerUrl + 'quiz/response/', { "answer": ans }, {
            headers: { "Authorization": "token " + token, "Content-Type": "application/json" }
        })
            .then((res) => {
                if (res.status == 200) {
                    if (res.data === 'logout') {
                        setRedirect(1);
                    } else {
                        setTitle(res.data.data.number_of_question_solved);
                        setDescription(res.data.data.description);
                        setAns("");
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
                <Navbar fixed='top' color='' dark className='MyNavs' >
                    <NavbarBrand href="/"><img alt='logo' src={ctdlogo} width='75px' ></img></NavbarBrand>
                    <div className='name' ><img src={Inq} className='inqzlogo' alt="" width='50px' height='50px' /><strong> INQUIZITIVE</strong></div>
                    <div><img src={PISB} alt='PISB Logo' width="100px" className="logo"></img></div>
                </Navbar>
                <Container className='content' >
                    <Row>
                        <Col xs='8' className='title'>
                            <h1 className='title' >Question {title}</h1>
                        </Col>
                        <Col xs='4'>
                            <div className='circletimer' >
                                <CountdownCircleTimer
                                    key={title ? title : 0}
                                    onComplete={() => { send(); }}
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
                                <p>{description}</p>
                            </div>
                        </Col>
                    </Row>

                    <Navbar fixed='bottom' color='black' dark expand="md" className='MyNavs'>
                        <Button onClick={() => {
                            send();
                            setRedirect(1);
                        }} color='danger' className='ml-auto'>End Test</Button>
                    </Navbar>
                </Container>
                <Container className='formcont position-fixed fixed-bottom' >
                    <Row>
                        <Col>
                            <Form onSubmit={send} >
                                <FormGroup>
                                    <Label htmlFor='ans'><b>Ans :</b></Label>
                                    <Input type='text' id='ans' autoComplete='off' placeholder='Your Answer' value={ans} onChange={e => setAns(e.target.value)}></Input>
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