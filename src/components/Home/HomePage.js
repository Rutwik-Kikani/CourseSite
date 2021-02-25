import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Courses</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime est
      commodi earum ipsa similique dolorem odit hic ullam nihil! Dolore deserunt
      officia nemo omnis quos aperiam doloremque odio veritatis ducimus?
    </p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

export default HomePage;
