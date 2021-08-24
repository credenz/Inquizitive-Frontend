import React, { useEffect, useState } from 'react';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Redirect } from 'react-router';
import { Button, Col, Container, Form, FormGroup, Input, Label, Navbar, Row, Spinner } from "reactstrap";
import ctdlogo from "../../images/ctd.png";
import Inq from "../../images/inquizitive.png";
import PISB from "../../images/PISB.png";
import DjangoServer from '../../urls';
import BackGround from '../Home/Background/Background';
import './QuestionComponent.css';

function Question() {
    const [redirect, setRedirect] = useState(0);
    const [title, setTitle] = useState(0);
    const [description, setDescription] = useState(' ');
    const [ans, setAns] = useState("");
    const [sending, setSending] = useState(true);
    const [time, setTime] = useState(30);

    useEffect(() => {
        setSending(true);
        let token = localStorage.getItem('jwtToken');
        DjangoServer.get('quiz/question/', {
            headers: { 'Authorization': 'token ' + token }
        })
            .then((res) => {
                if (res.status === 200) {
                    if (res.data === 'logout') {
                        setRedirect(1);
                    } else {
                        setTime(res.data.data.time_rem);
                        setTitle(res.data.data.number_of_question_solved);
                        setDescription(res.data.data.description);
                        setSending(false);
                    }
                } else {
                    alert(res.statusText, res.status);
                }
            })
            .catch((res) => alert(res));
    }, []);

    const send = (e = null, End = false) => {
        if (e) e.preventDefault();
        let token = localStorage.getItem('jwtToken');
        setSending(true);
        DjangoServer.post('quiz/response/', { "answer": ans }, {
            headers: { "Authorization": "token " + token }
        })
            .then((res) => {
                if (res.status === 200) {
                    if (res.data === 'logout' || End) {
                        setRedirect(1);
                        DjangoServer.post('api/logout/', {}, {
                            headers: { "Authorization": "token " + token }
                        }).then().catch(e => alert(e));
                    } else {
                        setTime(res.data.data.time_rem);
                        setTitle(res.data.data.number_of_question_solved);
                        setDescription(res.data.data.description);
                        setAns("");
                        setSending(false);
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
                <BackGround />
                <Navbar fixed='top' color='' dark className='MyNavs' >
                    <div className='d-none d-md-block'><img alt='logo' src={ctdlogo} width='75px' ></img></div>
                    <div className='name' ><img src={Inq} className='inqzlogo' alt="" width='50px' height='50px' /><strong> INQUIZITIVE</strong></div>
                    <div className='d-none d-sm-block'><img src={PISB} alt='PISB Logo' width="100px" className="logo"></img></div>
                </Navbar>
                <Container className='content' >
                    <Row>
                        <Col xs='8' className='title'>
                            Question {title}
                        </Col>
                        <Col xs='4'>
                            <div className='circletimer' >
                                <CountdownCircleTimer
                                    key={title ? title : 0}
                                    onComplete={() => { send(); }}
                                    isPlaying
                                    duration={30}
                                    initialRemainingTime={time}
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
                                    {({ remainingTime }) => sending ? <h2>--</h2> : <h2>{remainingTime}</h2>}
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

                    <Navbar fixed='bottom' color='black' dark expand="md" className='MyNavs botnav'>
                        <div className='align-text-center'>© PICT IEEE Student Branch | Developed by PISB Web Team</div>
                        <Button onClick={() => { send(false, true); }} color='danger' className='ml-auto'>End Test</Button>
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
                                <Button className='float-right' type='submit' value='submit' color='primary'><div className='subbutt'>{sending ? <Spinner className='quespin' /> : 'SUBMIT'}</div></Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Question;