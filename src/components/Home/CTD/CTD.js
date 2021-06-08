import './CTD.css';
import Inq from "../../../images/inquizitive.png";
const CTD = () => {
    return (
        <div className='ctdlogo'>
            <img src={Inq} className="brand_logo brand_logo_container" alt="" srcset="" />
            <h1>InQuizitive</h1>
            <h8>A platform that feeds upon curiosity</h8>
        </div>
    )
}

export default CTD;