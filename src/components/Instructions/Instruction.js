import React from 'react'
import { Router, Link } from 'react-router-dom'
import './ins.css'
import ctd from '../../images/ctd.png'
import ieee from '../../images/IEEE White.png'
import inquzi from '../../images/inquizitive.png';
const Instruction = () => {
    const handleChecked = (e) => {
        console.log(e);
    }
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        />
        <div className="ins">
          {/* <nav>
              <div className="nav-wrapper grey darken-3 ">
                <div className="containe">
                  <a href="" className="brand-logo ">
                    <img src={ctd} className="pisb" />
                  </a>
                  <div className="center hide-on-med-and-down">
                    <h2 className="inqui">INQUIZITIVE</h2>
                  </div>

                  {/* <div className="row">
                <div className="col s3 l3">
                  <a href="" className="brand-logo ">
                    <img src={ctd} className="pisb" />
                  </a>
                </div>
                <div className="col s3 l3 ">
                  <a href="" className="right pull-s1">
                    <img src={ieee} className="ieee" />
                  </a>
                </div>
                <div className="col s3 l3 ">
                  <a href="" className="">
                    <img src={ieee} className="ieee" />
                  </a>
                </div>
                <div className="col s3 l3 ">
                  
                </div>
              </div> 
                </div>
              </div>
            </nav> */}
          <nav className="grey darken-4">
              <div className="nav-wrapper">
                <a href="" className="brand-logo center">
                  {/* <h4>Inquizitive</h4> */}
                  <img src={inquzi} className="inqu" />
                  INQUIZITIVE
                </a>
                <ul className="right hide-on-med-and-down">
                  <li>
                    <a href="">
                      <img src={ieee} className="ieee" />
                    </a>
                  </li>
                    <li>
                      <a className="grey-text text-darken-4">c</a>
                    </li>
                </ul>
                <ul className="left hide-on-med-and-down">
                  <li>
                    <div>
                      <img src={ctd} className="pisb" />
                    </div>
                  </li>
                </ul>
              </div>
            
          </nav>
          <div className="container cont white-text">
            <header className="main-int">
              <h3 className="center ">Instructions</h3>
              <div className="divider"></div>
            </header>
            <main>
              <div className="">
                <p className="text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe et ipsum blanditiis culpa iure odit nihil alias vero
                  nesciunt quisquam a neque corporis doloremque quasi natus, sit
                  dolorum reiciendis laborum laboriosam fugit? Ipsam, vel ipsum?
                  Esse, reiciendis, facilis suscipit doloremque praesentium
                  officia fugiat placeat repellendus dignissimos repellat
                  eveniet sed. Minima. Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. At repudiandae quod consectetur magnam
                  repellat aliquam! Perspiciatis libero est facere, unde quas
                  ipsum beatae repellat praesentium eligendi ratione delectus
                  sequi corrupti. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Veritatis voluptas quas unde illo aliquam,
                  ullam provident a aperiam adipisci quis ut voluptate.
                  Repellendus sunt hic ex, error quam vero optio recusandae illo
                  debitis ad molestias, harum nostrum saepe, soluta aperiam?
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe et ipsum blanditiis culpa iure odit nihil alias vero
                  nesciunt quisquam a neque corporis doloremque quasi natus, sit
                  dolorum reiciendis laborum laboriosam fugit? Ipsam, vel ipsum?
                  Esse, reiciendis, facilis suscipit doloremque praesentium
                  officia fugiat placeat repellendus dignissimos repellat
                  eveniet sed. Minima. Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. At repudiandae quod consectetur magnam
                  repellat aliquam! Perspiciatis libero est facere, unde quas
                  ipsum beatae repellat praesentium eligendi ratione delectus
                  sequi corrupti. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Veritatis voluptas quas unde illo aliquam,
                  ullam provident a aperiam adipisci quis ut voluptate.
                  Repellendus sunt hic ex, error quam vero optio recusandae illo
                  debitis ad molestias, harum nostrum saepe, soluta aperiam?
                </p>
              </div>
              <div className="divider"></div>
              <p className="center checkbox">
                <label>
                  <input type="checkbox" id="mycheck" onClick={handleChecked} />
                  <span> I have read all instructions carefully</span>
                </label>
              </p>
              <div className="center buttn ">
                <Link to="/endpage">
                  <button
                    className="btn waves-effect waves-light cyan "
                    disabled={false}
                  >
                    Proceed
                  </button>
                </Link>
              </div>
            </main>
          </div>
          <footer className="page-footer grey darken-4 hide-on-med-and-down"></footer>
          {/* <footer className="page-footer grey darken-4 hide-on-mid-and-down"></footer> */}
        </div>
      </div>
    );
}

export default Instruction;