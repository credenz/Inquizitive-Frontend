import React from 'react'
import Tick from '../assets/tick.png'
import './Endpage.css'
const  Endpage = () => {
    return (
        <div className = "container endpage grey lighten-4">
            <main className = "container box">
                <div className="col">
                    <div className="row s4 ">
                        <img className = "tick center" src={Tick} />
                    </div>
                    <div className="row s4 offset-s4">
                        <h4 className = "center">Your Response was submitted successfully</h4>
                        <h4 className = "center">Thank You</h4>
                    </div>
                </div>
                
            </main>
        </div>
    )
}

export default Endpage;
