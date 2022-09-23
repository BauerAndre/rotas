import { Link } from "react-router-dom";

function Contato() {
  return (
    <div>
      <h1>Contact Page</h1>
      <span>Company contact (dd)XXX-XXX-XXX</span> <br />
      <br />
      <br />
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
    </div>
  );
}

export default Contato;
