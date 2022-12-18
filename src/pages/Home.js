import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import ChatBot from "../chatbot";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainLayout from "../components/MainLayout";
import CustomModal from "../components/Modal";
import Player from "../components/Player";
import SectionTitle from "../components/SectionTitle";
import Snackbar from "../components/Snackbar";
import { cardsDataSet } from "../utils";
const RootStyle = styled("div")({
  background: "rgb(249, 250, 251)",
  placeItems: "center",
  height: "calc(100vh - 64px)",
  overflowY: "scroll",
});

const ContentStyle = {
  maxWidth: "90%",
  width: "90%",
  minHeight: "100%",
  margin: "auto",
  background: "#fff",
};

const CardStyle = styled(Box)({
  textAlign: "center",
});

const playerData = [
  { src: "./videos/Fête-10-ans.webm" },
  { src: "./videos/Team-building-2022.webm" },
];
const Home = ({ _ }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [isVisibleAlert, setIsVisibleAlert] = useState(false);
  const handleOpen = (data) => {
    setIsOpenModal(true);
    setModalData(data);
  };
  const handleClose = () => setIsOpenModal(false);

  useEffect(() => {
    let hiddenElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("active");
      });
    });
    if (hiddenElements) hiddenElements.forEach((ele) => observer.observe(ele));
    return () => {
      hiddenElements.forEach((ele) => observer.unobserve(ele));
    };
  }, []);
  return (
    <div className="home">
      <MainLayout>
        <Header />
        <RootStyle>
          <div className="" style={ContentStyle}>
            <Banner />
            <SectionTitle title="ToolBox" />
            <div className="reveal" style={{ textAlign: "center" }}>
              <div className="card-container">
                {cardsDataSet.map((item, index) => (
                  <div key={index} className="card-content">
                    <Card
                      {...item}
                      handleOpen={(item) => handleOpen(item)}
                      setError={setIsVisibleAlert}
                    />
                  </div>
                ))}
              </div>
            </div>
            <SectionTitle title="Nos témoins" />
            <div className="player-container reveal">
              {playerData.map((vid, index) => (
                <div key={index} className="player-content">
                  <Player
                    controls={true}
                    muted={true}
                    autoPlay={true}
                    loop={true}
                    {...vid}
                  />
                </div>
              ))}
            </div>
            <ChatBot />
          </div>
          <Footer />
        </RootStyle>
      </MainLayout>
      <CustomModal
        modalData={modalData}
        handleClose={handleClose}
        isOpenModal={isOpenModal}
        setError={setIsVisibleAlert}
      />
      <Snackbar
        className={isVisibleAlert ? "alert-dialog" : "d-none"}
        handleCloseAlert={() => setIsVisibleAlert(false)}
      >
        <div className="title">
          disponible uniquement pour numeryx france !
          <div>
            Si vous voulez procéder
            <a href="https://edocperso.fr/login">cliquez ici</a>
          </div>
        </div>
      </Snackbar>
    </div>
  );
};

export default Home;
