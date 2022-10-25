import React from "react";

export default function Card(props) {
  const { image, title, subTitle } = props;
  return (
    <a href="https://www.w3schools.com">
      <div className="card">
        <img
          className="card-img"
          src="assets/images/numeryx-univ.jpg"
          alt="Avatar"
        />
        <h3>Card 1</h3>

        <p>some description</p>
      </div>
    </a>
  );
}
