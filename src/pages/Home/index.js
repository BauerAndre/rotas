import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Wellcome to the homepage</h1>
      <br />
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/contact">Contact</Link>

      <hr />

      <Link to="/product/123"> Acecess product 123</Link>
    </div>
  );
}

export default Home;
