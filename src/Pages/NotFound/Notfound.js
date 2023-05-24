import React from "react";
import { Link } from "react-router-dom";

function Notfound(props) {
  return (
    <div className="pt-[80px]">
      <h1>Page not found</h1>
      <p>
        Go to <Link to="/"> Home</Link>
      </p>
    </div>
  );
}

export default Notfound;
