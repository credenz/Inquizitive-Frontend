import { Navbar as Navb, NavbarBrand } from "reactstrap";
import ctdlogo from "../../../images/ctd.png";

const Navbar = () => {
  return (
    <Navb color='dark' dark >
      <NavbarBrand href="/"><img src={ctdlogo} width='75px' ></img></NavbarBrand>
      <h4 className='name' >INQUIZITIVE</h4>
      <div className='name' >Time: 0:47</div>
    </Navb>
  )
}

export default Navbar;
