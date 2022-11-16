import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import ChatBot from "../chatbot";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Drawer from "../components/Drawer";
import Header from "../components/Header";
import MainLayout from "../components/MainLayout";
import Player from "../components/Player";
import SectionTitle from "../components/SectionTitle";
import { cardsDataSet } from "../utils";
import { fadeInUp, translateY } from "../utils/animation";

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
