import styled from "@emotion/styled";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import * as msal from "@azure/msal-browser";
import { config } from "../config";

const RootStyle = styled("div")({
  background: "rgb(249, 250, 251)",
  height: "100vh",
  display: "grid",
  placeItems: "center",
});

const HeadingStyle = styled(Box)({
  textAlign: "center",
});

const FooterStyle = styled(Box)({
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

const Login = ({ _ }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const msalConfig = {
    auth: {
      clientId: config.clientId,
      //authority: config.authority,
      redirectUri: config.redirectUri,
    },
  };

  const msalInstance = new msal.PublicClientApplication(msalConfig);

  const handleLogin = async () => {
    try {
      console.log("testing...");
      await msalInstance.loginPopup({
        scopes: config.scopes,
      });
      setIsAuthenticated(true);
    } catch (err) {
      console.log(err);
      setIsAuthenticated(false);
    }
  };
  return (
    <RootStyle>
      <Container maxWidth="sm">
        <ContentStyle>
          <HeadingStyle component={motion.div} {...fadeInUp}>
            <div>
              <img
                style={{ width: "30%" }}
                src="assets/images/numeryx-logo.png"
                alt="logo"
              />
            </div>
            <Typography sx={{ color: "text.secondary", mb: 5 }}>
              Login to your account
            </Typography>
          </HeadingStyle>

          <LoginForm />
          <FooterStyle
            onClick={handleLogin}
            component={motion.div}
            {...fadeInUp}
          >
            <img
              className="login-footer-logo"
              src="assets/images/microsoft-logo.png"
              alt="logo"
            />
          </FooterStyle>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
};

export default Login;
