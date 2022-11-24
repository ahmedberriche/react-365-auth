import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import React, { useState } from "react";
import ChatBot from "../chatbot";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainLayout from "../components/MainLayout";
import Player from "../components/Player";
import SectionTitle from "../components/SectionTitle";
import { cardsDataSet } from "../utils";
import { fadeInUp, translateY } from "../utils/animation";
import CustomModal from "../components/Modal";

const RootStyle = styled("div")({
  background: "rgb(249, 250, 251)",
  placeItems: "center",
  height: "calc(100vh - 64px)",
  overflowY: "scroll",
});

const ContentStyle = styled("div")({
  maxWidth: "90%",
  width: "90%",
  minHeight: "100%",
  margin: "auto",
  background: "#fff",
});

const CardStyle = styled(Box)({
  textAlign: "center",
});

const playerData = [
  { src: "http://techslides.com/demos/sample-videos/small.ogv" },
  { src: "http://techslides.com/demos/sample-videos/small.ogv" },
];
const Home = ({ _ }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleOpen = (data) => {
    setIsOpenModal(true);
    setModalData(data);
  };
  const handleClose = () => setIsOpenModal(false);
  return (
    <div className="home">
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
                    <Card {...item} handleOpen={(item) => handleOpen(item)} />
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
          <Footer />
        </RootStyle>
      </MainLayout>
      <CustomModal
        modalData={modalData}
        handleClose={handleClose}
        isOpenModal={isOpenModal}
      />
    </div>
  );
};

export default Home;
