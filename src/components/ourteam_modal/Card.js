import React, { Component } from 'react';
import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {FaGithub,FaLinkedinIn} from 'react-icons/fa';


const Card = props =>{
    return(
    <div class="card h-60 .mx-auto">
        <div class="card-body">
            <img class="img-fouild rounded w-75 mb-3"
                src={props.imgsrc}
                alt="Sophie"></img>
            <h3>{props.name}</h3>
            <h5>Software Engineer</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, recusandae.</p>
            <div class="d-flex flex-row justify-content-center">
                <div class="p-2">
                    <a style={{cursor : 'Pointer'}}  className="github" href={props.github}>
                        <i><FaGithub/></i>
                    </a>
                </div>
                <div class="p-2">
                    <a style={{cursor : 'Pointer'}} className="linkedin" href={props.linkedin}>
                        <FontAwesomeIcon icon={["fab", "github"]} />
                        <i ><FaLinkedinIn/></i>
                    </a>
                </div>
            </div>
        </div>
    </div>);

}
 
export default Card;
