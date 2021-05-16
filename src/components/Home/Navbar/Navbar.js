import { NavLink } from "react-router-dom"
import ieeeBlack from '../../../images/ieee_black.png';
import PISB from '../../../images/PISB.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <div className="container-fluid">
        <a className="navbar-brand" href="#asda">
          <img src={PISB} alt="" className="pic" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto flex-nowrap">
            <li>
              <NavLink to='/instructions' className='nav-item  w-5 m-3 p-0'> Instructions </NavLink>
            </li>
            <li className='nav-item w-5'>
              <NavLink to='/team' className='m-3 p-0'> Our Team </NavLink>
            </li>
            <li className='nav-item w-5 ieee-black'>
              <img src={ieeeBlack}></img>
            </li>
          </ul>
        </div>
      </div>

    </nav>
  )
}

export default Navbar;
