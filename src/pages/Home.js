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

const RootStyle = styled("div")({
  background: "rgb(249, 250, 251)",
  height: "calc(100% - 64px)",
  placeItems: "center",
  display: "flex",
});

const ContentStyle = styled("div")({
  maxWidth: "90%",
  width: "90%",
  height: "100%",
  padding: 25,
  margin: "auto",
  background: "#fff",
  // display: "flex",
  // alignItems: "center",
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
  const dataSet = [
    { title: "RH", subTitle: "", image: "assets/images/numeryx-univ.jpg" },
    {
      title: "Numeryx université",
      subTitle: "",
      image: "assets/images/numeryx-univ.jpg",
    },
    {
      title: "Demandes et réclamations",
      subTitle: "",
      image: "assets/images/numeryx-univ.jpg",
    },
    {
      title: "Réseaux sociaux ",
      subTitle: "",
      image: "assets/images/numeryx-univ.jpg",
    },
  ];
  return (
    <div className="home">
      <Drawer />
      <MainLayout>
        <Header />
        <RootStyle>
          <ContentStyle>
            <Banner />
            <CardStyle component={motion.div} {...fadeInUp}>
              <div className="card-container">
                {dataSet.map((item, index) => (
                  <div key={index} className="card-content">
                    <Card {...item} />
                  </div>
                ))}
              </div>
            </CardStyle>
            <ChatBot />
          </ContentStyle>
        </RootStyle>
      </MainLayout>
    </div>
  );
};

export default Home;
