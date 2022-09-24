import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <h2>Ops, this page does't exist</h2>

      <span>We found those pages:</span>
      <br />
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default Error;
