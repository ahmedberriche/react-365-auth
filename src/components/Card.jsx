import { Grid } from "@mui/material";
import React, { useState } from "react";
import { isMobileDevice } from "../utils";
import StarIcon from "@mui/icons-material/Star";
import Alerts from "./Snackbar";
export default function Card(props) {
  const { image, title, subTitle, cardData, handleOpen, setError } = props;
  const handleRedirect = () => {
    setError(true);
  };
  return (
    <div
      className="card"
      onClick={() => {
        isMobileDevice && handleOpen(cardData);
      }}
    >
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
            <a
              key={index}
              href={item?.uri.includes("edocperso") ? "#" : item?.uri}
              className="card-backdrop-main"
              onClick={() =>
                item?.uri.includes("edocperso") && handleRedirect()
              }
            >
              <div
                className={
                  item?.uri.includes("edocperso") ? "asterix-error" : "d-none"
                }
              >
                <StarIcon style={{ fontSize: 10, color: "red" }}></StarIcon>
                disponible uniquement pour numeryx france
              </div>
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
