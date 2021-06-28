import React, { Component } from 'react';
import './Team.css';
import Card from './Card.js';
import rick from '../../images/rick.png';

const Ourteam = ()=>{
    return(
    <div id= "contain">
      <section id="team">
        <div class="container py-2 text-center">
            <div class="row pb-5">
                <div class="col-lg-3 col-md-4 pl-4 pr-4 py-5">
                    <Card imgsrc={require('../../images/suyash.jpeg').default}
                    team = 'Front-end developer' 
                    name='Suyash Joshi' 
                    github='https://github.com/SuyashJoshi179' 
                    linkedin='https://www.linkedin.com/in/suyash-joshi/' 
                    mail='mailto:suyash.joshi179@gmail.com'/>
                </div>

                <div class="col-lg-3 col-md-4 pl-4 pr-4 py-5">
                    <Card imgsrc={require('../../images/pushkar.jpeg').default} 
                    team = 'Front-end developer' 
                    name='Pushkar Lonkar' 
                    github='https://github.com/Pushkarlonkar' 
                    linkedin='https://www.linkedin.com/in/pushkarlonkar' 
                    mail='mailto:pushkar.lonkar21@gmail.com'
                    />
                </div>

                <div class="col-lg-3 col-md-4 pl-4 pr-4 py-5">
                    <Card imgsrc={require('../../images/rohit.jpeg').default} 
                    team = 'Front-end developer' 
                    name='Rohit James' 
                    github='https://github.com/rohit-james12' 
                    linkedin='https://www.linkedin.com/in/rohit-james-6b93b4195/' 
                    mail='mailto:rohitjames89@gmail.com'
                    />
                </div>
                
                <div class="col-lg-3 col-md-4 pl-4 pr-4 py-5">
                    <Card imgsrc={require('../../images/ashwaq.png').default} 
                    team = 'Front-end developer' 
                    name='Ashwaq Khazi' 
                    github='https://github.com/khaziashwaq' 
                    linkedin='https://www.linkedin.com/in/ashwaq-khazi-20a8811a7/' 
                    mail='mailto:ashwaqkhazi1729@gmail.com'
                    />
                </div>
            </div>
            <div class="row pb-5">
                <div class="col-lg-3 col-md-4 pl-4 pr-4 py-5">
                    <Card imgsrc={rick} name='Rick Sanchez'/>
                </div>

                <div class="col-lg-3 col-md-4 pl-4 pr-4 py-5">
                    <Card imgsrc={rick} name='Rick Sanchez'/>
                </div>

                <div class="col-lg-3 col-md-4 pl-4 pr-4 py-5">
                    <Card imgsrc={rick} name='Rick Sanchez'/>
                </div>
                
                <div class="col-lg-3 col-md-4 pl-4 pr-4 py-5">
                    <Card imgsrc={rick} name='Rick Sanchez'/>
                </div>
            </div>
        </div>
    </section>
    </div>
    )
}

export default Ourteam;

