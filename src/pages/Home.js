import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import ChatBot from "../chatbot";
import Drawer from "../components/Drawer";
import MainLayout from "../components/MainLayout";
import Banner from "../components/Banner";
import Player from "../components/Player";
import SectionTitle from "../components/SectionTitle";
import { cardsDataSet } from "../utils";

const RootStyle = styled("div")({
  background: "rgb(249, 250, 251)",
  height: "100%",
  placeItems: "center",
  display: "flex",
});

const ContentStyle = styled("div")({
  maxWidth: "90%",
  width: "90%",
  height: "100%",
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
const translateY = {
  initial: {
    x: -1000,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.8,
      ease: easing,
    },
  },
};
const CardStyle = styled(Box)({
  textAlign: "center",
});

const Home = ({ _ }) => {
  const playerData = [
    { src: "http://techslides.com/demos/sample-videos/small.ogv" },
    { src: "http://techslides.com/demos/sample-videos/small.ogv" },
  ];

  return (
    <div className="home">
      <Drawer />
      <MainLayout>
        <Header />
        <RootStyle>
          <ContentStyle>
            <Banner {...translateY} />
            <SectionTitle title="ToolBox" />
            <CardStyle component={motion.div} {...fadeInUp}>
              <div className="card-container">
                {cardsDataSet.map((item, index) => (
                  <div key={index} className="card-content">
                    <Card {...item} />
                  </div>
                ))}
              </div>
            </CardStyle>
            <SectionTitle title="Nos témoins" />
            <motion.div className="player-container" {...fadeInUp}>
              {playerData.map((vid, index) => (
                <div key={index} className="player-content">
                  <Player {...vid} />
                </div>
              ))}
            </motion.div>
            <ChatBot />
          </ContentStyle>
        </RootStyle>
      </MainLayout>
    </div>
  );
};

export default Home;
