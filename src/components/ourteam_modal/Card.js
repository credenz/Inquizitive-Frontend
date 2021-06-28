import React, { Component } from 'react';
import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {FaGithub,FaLinkedinIn, FaEnvelope} from 'react-icons/fa';


const Card = props =>{
    return(
    <div class="card h-60 .mx-auto">
        <div class="card-body">
            <img class="img-fouild w-100 card-img-top rounded mb-4"
                src={props.imgsrc}
                alt="Sophie"></img>
            <h3>{props.name}</h3>
            {/* <p style={{'font-size': '2.5vh'}}>{props.team}</p> */}
            {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, recusandae.</p> */}
            <div class="d-flex flex-row justify-content-center">
                <div class="p-2">
                    <a target="_blank" style={{cursor : 'Pointer'}}  className="github" href={props.github}>
                        <i ><FaGithub/></i>
                    </a>
                </div>
                <div class="p-2">
                    <a target="_blank" style={{cursor : 'Pointer'}} className="linkedin" href={props.linkedin}>
                        <FontAwesomeIcon icon={["fab", "github"]} />
                        <i ><FaLinkedinIn/></i>
                    </a>
                </div>
                <div class="p-2">
                    <a target="_blank" style={{cursor : 'Pointer'}} className="linkedin" href={props.mail}>
                        <FontAwesomeIcon icon={["fab", "email"]} />
                        <i><FaEnvelope/></i>
                    </a>
                </div>
            </div>
        </div>
    </div>);

}
 
export default Card;
