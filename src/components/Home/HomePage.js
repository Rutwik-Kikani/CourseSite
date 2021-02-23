import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="jumbotron">
      <h1>Courses Management Site</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
        ratione. !!!
      </p>
      <Link to="about" className="btn btn-primary btn-lg">
        Learn More
      </Link>
    </div>
  );
};

export default HomePage;
