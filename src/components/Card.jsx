import React from "react";
import { motion } from "framer-motion";
import { Grid } from "@mui/material";

export default function Card(props) {
  const { image, title, subTitle, cardData } = props;
  {
    /* <a href="#" className="card-backdrop-main">
                <img
                  className="card-backdrop-icons"
                  src={"assets/icons/" + item.iconSrc}
                  alt={index}
                />
                {item.title}
            </a>*/
  }
  return (
    <a href="https://www.w3schools.com">
      <div
        // whileHover={{
        //   transform: "translateY(-5px)",
        //   boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.4)",
        // }}
        className="card"
      >
        <div className="card-img-container">
          <img
            className="card-img"
            src="assets/images/numeryx-univ.jpg"
            alt="Avatar"
          />
        </div>
        <div>
          <h3>{title}</h3>
          <p>{subTitle}</p>
        </div>
        <div className="card-backdrop">
          {cardData.map((item, index) => {
            return (
              <a href="#" className="card-backdrop-main">
                <Grid container spacing={2} alignItems={"center"}>
                  <Grid item xs={4} md={3}>
                    <img
                      className="card-backdrop-icons"
                      src={"assets/icons/" + item.iconSrc}
                      alt={index}
                    />
                  </Grid>
                  <Grid
                    style={{ textAlign: "left" }}
                    item
                    xs={8}
                    md={9}
                    color={"#fff"}
                  >
                    {item.title}
                  </Grid>
                </Grid>
              </a>
            );
          })}
        </div>
      </div>
    </a>
  );
}
