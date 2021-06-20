import './CTDcopy.css';
import Inq from "../../../images/inquizitive.png";
const CTD = () => {
    return (
        <div className='ctdlogo'>
            <div className="brand-logo-container">
                <img src={Inq} className='brand-logo' alt="" />
            </div>
            <h1>InQuizitive</h1>
            <h6>A platform that feeds upon curiosity</h6>
        </div>
    )
}

export default CTD;