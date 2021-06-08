import Login from "./Login/Login";
import BackGround from "./Background/Background";
import "./Home.css";
import Navbar from "./Navbar/Navbar";
import CTD from "./CTD/CTD";
import pic from "../../images/pic.png";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <BackGround />
      {/* <div className="home-content row text-center">
        <div className="left col-lg-5 order-lg-1 order-2">
          <CTD />
        </div>
        <div className="left col-lg-2 order-lg-2 order-1">
          <div className="header-img">
            <img src={pic} className="img-fluid animated" alt="motion-img" />
          </div>
        </div>
        <div className="left col-lg-5 order-lg-2 order-3 text-center">
          <Login />
        </div>
      </div> */}
      <div className="home-content row text-center">
        <div className="col-lg-8 home_card">
          <div className="left col-lg-5"><CTD/></div>
          <div className="row-lg-3"><Login/></div>
        </div>
      </div>
      <footer className="">
        © PICT IEEE Student Branch | Developed by PISB Web Team
      </footer>
    </div>
  );
};

export default Home;
