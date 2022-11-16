import styled from "@emotion/styled";
import { Box, Grid, Modal } from "@mui/material";
import { motion } from "framer-motion";
import React, { useState } from "react";
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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
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
        </RootStyle>
      </MainLayout>
      <Modal
        open={isOpenModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {modalData?.map((item, index) => {
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
                    color={"#000"}
                  >
                    {item.title}
                  </Grid>
                </Grid>
              </a>
            );
          })}
        </Box>
      </Modal>
    </div>
  );
};

export default Home;
