import "./App.css";
import NavBar from  "./Components/Navbar/Navbar.jsx";
import Footer from  "./Components/Footer/Footer.jsx";
import HomePage from "./Components/Homepage/Homepage.jsx";

export default function app (){
  return(
  <>
  <NavBar />
  <HomePage />
  <Footer />
  </>
  );
}