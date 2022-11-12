import "./App.css";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>My Website</h1>
      <nav className="mainNav">
      <Link to="/contact" className="navBotton">Contact</Link>
      <Link to="/about" className="navBotton">About</Link>
      </nav>
    </div>
  );
}

export function About() {
  return (
    <div>           
      <h1>About Us</h1>
      <nav className="mainNav">
      <Link to="/home"  className="navBotton">Home</Link>
      <Link to="/contact" className="navBotton">Contact</Link>
      </nav>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <nav className="mainNav">
      <Link to="/home" className="navBotton">Home</Link>
      <Link to="/about" className="navBotton">About</Link>
      </nav>
    </div>
  );
}

