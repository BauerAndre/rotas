import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>About the company</h1>
      <br />
      <br />
      <Link to="/">Homepage</Link>
      <br />
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default About;
