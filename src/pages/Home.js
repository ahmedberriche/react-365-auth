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
    {
      title: "RH",
      subTitle: "",
      image: "assets/images/numeryx-univ.jpg",
      cardData: [
        {
          iconSrc: "CRA.jpg",
          title: "CRA",
          uri: "https://ui.boondmanager.com/dashboard",
        },
        {
          iconSrc: "DocAdm.png",
          title: "document administratifs",
          uri: "https://apps.powerapps.com/play/e/default-f050ee11-8c72-4be6-80ce-5238fb70166a/a/1f6aa88e-2697-4767-a43e-75f98b96f2b2?source=teamsopenwebsite&screenColor=rgba(0,+176,+240,+1)&hint=0492cae0-3b41-4a01-811f-e1ff760ac293",
        },
        {
          iconSrc: "coffre-fort.png",
          title: "Coffre-fort numérique",
          uri: "https://edocperso.fr/login",
        },
      ],
    },
    {
      title: "Numeryx université",
      subTitle: "",
      image: "assets/images/numeryx-univ.jpg",
      cardData: [
        {
          iconSrc: "LMS.png",
          title: "LMS",
          uri: "https://tech.numeryx.fr:6500/moodle/",
        },
        {
          iconSrc: "catalogue-formation.png",
          title: "Catalogue de formation",
          uri: "https://university.numeryx.fr/fr/nos-formations-professionnelles",
        },
        {
          iconSrc: "demande-formation.jpg",
          title: "Demande de formation",
          uri: "https://apps.powerapps.com/play/e/default-f050ee11-8c72-4be6-80ce-5238fb70166a/a/c03cacde-4399-4440-934b-d4808dd04de5?tenantId=f050ee11-8c72-4be6-80ce-5238fb70166a",
        },
      ],
    },
    {
      title: "Demandes et réclamations",
      subTitle: "",
      image: "assets/images/numeryx-univ.jpg",
      cardData: [
        {
          iconSrc: "problem-claim.png",
          title: "Porblem Claim",
          uri: "https://apps.powerapps.com/play/0cc9e371-c2fd-4054-bccc-3c11017bd9f4?tenantId=f050ee11-8c72-4be6-80ce-5238fb70166a",
        },
        {
          iconSrc: "GLPI.png",
          title: "GLPI",
          uri: "http://support.numeryx.fr/Glpi-Numeryx/index.php?redirect=%2Ffront%2Ftracking.injector.php&error=3",
        },
      ],
    },
    {
      title: "Réseaux sociaux ",
      subTitle: "",
      image: "assets/images/numeryx-univ.jpg",
      cardData: [
        {
          iconSrc: "yammer.jpg",
          title: "Yammer",
          uri: "https://www.yammer.com/login",
        },
        {
          iconSrc: "linkedin.png",
          title: "LINKEDIN",
          uri: "https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Aorganization%3A18574742&keywords=numeryx&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=6e3e7c2a-d776-402e-8da1-070d3a255a7c&sid=5_i",
        },
      ],
    },
  ];
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
            <Banner {...fadeInUp} />
            <SectionTitle title="Section 1 " />
            <CardStyle component={motion.div} {...fadeInUp}>
              <div className="card-container">
                {dataSet.map((item, index) => (
                  <div key={index} className="card-content">
                    <Card {...item} />
                  </div>
                ))}
              </div>
            </CardStyle>
            <SectionTitle title="Section 2 " />
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
