import React from 'react'
import { Router, Link } from 'react-router-dom'
const Instruction = () => {
    const handleChecked = (e) => {
        console.log(e);
    }
    return (
        <div className="container">
            <header>
                <h3 className="center">Instructions</h3>
                <div className="divider"></div>
            </header>
            <main>
                <div className="">
                    <p className="flow-text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe et ipsum blanditiis culpa iure odit nihil alias vero nesciunt quisquam a neque corporis doloremque quasi natus, sit dolorum reiciendis laborum laboriosam fugit? Ipsam, vel ipsum? Esse, reiciendis, facilis suscipit doloremque praesentium officia fugiat placeat repellendus dignissimos repellat eveniet sed. Minima.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At repudiandae quod consectetur magnam repellat aliquam! Perspiciatis libero est facere, unde quas ipsum beatae repellat praesentium eligendi ratione delectus sequi corrupti.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptas quas unde illo aliquam, ullam provident a aperiam adipisci quis ut voluptate. Repellendus sunt hic ex, error quam vero optio recusandae illo debitis ad molestias, harum nostrum saepe, soluta aperiam?
                    </p>
                </div>
                <div className="divider"></div>
                <p className="center" >
                    <label >
                        <input type="checkbox" id="mycheck" onClick={handleChecked} />
                        <span> I have read all instructions carefully
                    </span>
                    </label>
                </p>
                <div className="center">
                    <Link to="/endpage">
                        <button className="btn waves-effect waves-light" disabled={false}>
                            Proceed
                    </button>
                    </Link>
                </div>

            </main>
            <footer>

            </footer>
        </div>
    )
}

export default Instruction;