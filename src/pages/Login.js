import styled from "@emotion/styled";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import LoginForm from "../components/LoginForm";

const RootStyle = styled("div")({
  background: "rgb(249, 250, 251)",
  height: "100vh",
  display: "grid",
  placeItems: "center",
});

const HeadingStyle = styled(Box)({
  textAlign: "center",
});

const ContentStyle = styled("div")({
  maxWidth: 480,
  padding: 25,
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  background: "#fff",
});

let easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    y: 60,
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

const Login = ({ setAuth }) => {
  return (
    <RootStyle>
      <Container maxWidth="sm">
        <ContentStyle>
          <HeadingStyle component={motion.div} {...fadeInUp}>
            <Typography sx={{ color: "text.secondary", mb: 5 }}>
              Login to your account
            </Typography>
          </HeadingStyle>

          <LoginForm />
        </ContentStyle>
      </Container>
    </RootStyle>
  );
};

export default Login;
