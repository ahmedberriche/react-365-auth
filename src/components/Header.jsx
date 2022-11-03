import AccountCircle from "@mui/icons-material/AccountCircle";
import { Avatar, Menu, MenuItem } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";
import useDrawer, { DrawerContext } from "../context/DrawerProvider";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { setIsOpen, isOpen } = React.useContext(DrawerContext);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <div className="header-container">
            <div className="header-menu">
              <IconButton
                size="large"
                aria-label="header-menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => setIsOpen((old) => !old)}
                color="inherit"
                className={isOpen ? "d-none" : "d-block"}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div">
                MANS logged in
              </Typography>
            </div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Avatar
                alt="Cindy Baker"
                src="assets/images/microsoft-logo.png"
              />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
