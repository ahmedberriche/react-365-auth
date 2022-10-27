import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import Card from "../components/Card";
import Header from "../components/Header";

const RootStyle = styled("div")({
  background: "rgb(249, 250, 251)",
  height: "100vh",
  placeItems: "center",
});

const ContentStyle = styled("div")({
  maxWidth: "90%",
  width: "90%",
  height: "100%",
  padding: 25,
  margin: "auto",
  background: "#fff",
});

let easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    y: 100,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};
const CardStyle = styled(Box)({
  textAlign: "center",
});

const Home = ({ _ }) => {
  return (
    <>
      <Header />
      <RootStyle>
        <ContentStyle>
          <CardStyle component={motion.div} {...fadeInUp}>
            <div className="card-container">
              {new Array(5).fill(null).map((card) => (
                <div className="card-content">
                  <Card />
                </div>
              ))}
            </div>
          </CardStyle>
        </ContentStyle>
      </RootStyle>
    </>
  );
};

export default Home;
