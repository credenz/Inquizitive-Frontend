import Login from "./Login/Login";
import BackGround from "./Background/Background";
import "./Newhome.css";
import Navbar from "./Navbar/Navbar";
import CTD from "./CTD/CTD";
import Footer from "./Footer/Footer"

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <BackGround />
      <div className="container dialogue-container">
        <div className="home-dialogue col-lg-9">
          <div className="row">
            <div className="col-lg-6 top"><CTD/></div>
            <div className="col-lg-6 bottom"><Login/></div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
