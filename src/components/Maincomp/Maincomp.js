import React from 'react'
import './Maincomp.css';
import Instruction from '../Instruction/Instruction'
import Endpage from '../Endpage/Endpage'
import pisb from '../assets/pisb.png'
import ctd from '../assets/ctd.png'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
const Maincomp = () => {
    
    return (
        <div>
            <header>
                <nav>
                <div className="nav-wrapper grey darken-3">
                    <a href="" className="brand-logo right hide-on-med-and-down"><img className="img" src={pisb} alt=""/></a>
                    
                </div>
                </nav>
            </header>
            <main>
                <Router>
                    <Switch>
                        <Route exact path ="/instructions">
                            <Instruction/>
                        </Route>
                        <Route exact path = "/endpage">
                            <Endpage/>
                        </Route>
                    </Switch>
                </Router>
            </main>
            <footer className = "grey darken-3">    
                <p className = "center">@PICT IEEE Student Branch | Developed by PISB <a href="">Web Team</a></p>
            </footer>
            {/* <footer className = "page-footer">
                <div className="center">
                <div className="footer-copyright">
                        @PICT IEEE Student Branch | Developed by PISB 
                </div>
                </div>
                
            </footer> */}
        </div>
    )
}

export default Maincomp
