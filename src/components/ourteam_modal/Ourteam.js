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
                    <Card imgsrc={rick} name='Rick Sanchez' github='' linkedin='' />
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

