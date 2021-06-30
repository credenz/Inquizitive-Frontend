import './CTDcopy.css';
import Inq from "../../../images/inquizitive.png";
const CTD = () => {
    return (
        <div className='ctdlogo'>
            <div className="brand-logo-container">
                <img src={Inq} className='brand-logo' alt="" />
            </div>
            <div className='Head' >InQuizitive</div>
            <div className='SubHead' >A platform that feeds upon curiosity</div>
        </div>
    )
}

export default CTD;