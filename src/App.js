import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Dashboard";
import Explore from "./pages/explore";
import Services from "./pages/Service";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import SignUp from "./pages/sign-up";


// const Page = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   width: 100%;
//   height: 100%;
//   min-height: 100vh;
//   min-height: -webkit-fill-available; /* mobile viewport bug fix */
//   overflow-x: auto;
//   scroll-behavior: smooth;
// `;


// const Grid = styled.div`
//   display: flex;
//   flex-wrap: nowrap;
//   padding-left: calc(50vw - 160px);

//   /* Fake padding-right */
//   &::after {
//     content: '';
//     position: relative;
//     display: block;
//     flex-shrink: 0;
//     width: calc(50vw - 160px);
//     height: 1px;
//   }

//   > button {
//     margin-right: 40px;
//   }

//   /* Hide the others cards */
//   > button:not(:first-child) {
//     visibility: visible; /* switch to 'visible' */
//   }
//
// `;

function App() { 
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/explore" element={<Explore />} />
        <Route exact path="/Services" element={<Services />} />
        <Route exact path="/Team" element={<Team />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/sign-up" element={<SignUp />} />

      </Routes>
    </Router>
  );
}

export default App;

