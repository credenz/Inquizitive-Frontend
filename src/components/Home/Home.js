import Login from './Login/Login';
import BackGround from './Background/Background';
import './Home.css';

// import "../App.css";
// import React,{useState, SyntheticEvent} from "react"
// import {Redirect} from 'react-router-dom';

// const Home = () => {
//   const [username, setUsername] = useState('Rohit');
//   const [password, setPassword] = useState('ronda');
//   const [redirect, setRedirect] = useState(false);

//   const submit = async (e: SyntheticEvent) => {
//     e.preventDefault();
//     await fetch('http://localhost:8000/api/users', {
//       method: 'POST',
//       headers: {'Content-Type': 'application/json'},
//       credentials: 'include',
//       body: JSON.stringify({
//         username,
//         password
//       })
//     });
//     setRedirect(true);
//   }

//   if (redirect) {
//     return <Redirect to="/instructions"/>
//   }

//   return (
//     <form onSubmit={submit}>
//       <label>Username</label>
//       <input
//       type="text"
//       placeholder="Username"
//       required
//       onChange={e => setUsername(e.target.value)}
//       />
//       <label>Password</label>
//       <input
//       type="password"
//       placeholder="Password"
//       required
//       onChange={e => setPassword(e.target.value)}
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

import Navbar from "./Navbar/Navbar";
import CTD from './CTD/CTD';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <BackGround />
      <div className="home-content row text-center">
        <div className="left col-lg-6">
          <CTD />
        </div>

        <div className="left col-lg-6 text-center">
          <Login />
        </div>
      </div>
      <footer className='' >PISB WEB TEAM</footer>
    </div>
  );
};

export default Home;
