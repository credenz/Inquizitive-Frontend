import { Navbar as Navb, NavbarBrand } from "reactstrap";
import { NavLink } from "react-router-dom";
import ctdlogo from "../../../images/ctd.png";
import PISB from "../../../images/PISB.png";
import "./Navbar.css";
import "jquery";
import "bootstrap/dist/js/bootstrap";

const Nav = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#000000" }}
    >
      <NavbarBrand href="/">
        <img src={ctdlogo} className="main-logo" width="75px"></img>
      </NavbarBrand>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNavDropdown"
      >
        <div className="navbar-nav">
          <NavLink
            to="/ins"
            className="nav-item  w-5 m-3 p-0"
            style={{ color: "#ffffff" }, {textDecoration: "none"}}
          >
            Instructions
          </NavLink>
          <NavLink
            to="/team"
            className="nav-item m-3 p-0"
            style={{ color: "#ffffff" }, {textDecoration: "none"}}
          >
            Our Team
          </NavLink>
          <NavbarBrand>
            <img src={PISB} width="100px" className="logo" style={{ color: "#ffffff"}}></img>
          </NavbarBrand>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
