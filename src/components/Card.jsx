import { Grid } from "@mui/material";
import React from "react";

export default function Card(props) {
  const { image, title, subTitle, cardData } = props;
  return (
    <div className="card">
      <div className="card-img-container">
        <img className="card-img" src={image} alt="Avatar" />
      </div>
      <div>
        <span style={{ fontWeight: "700" }}>{title}</span>
        <p>{subTitle}</p>
      </div>
      <div className="card-backdrop">
        {cardData.map((item, index) => {
          return (
            <a key={index} href={item?.uri} className="card-backdrop-main">
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
  );
}
