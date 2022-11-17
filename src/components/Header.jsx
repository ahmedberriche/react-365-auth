import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";

export default function Header() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <div className="header-container">
            <div className="header-menu">
              <img
                style={{ width: 50 }}
                src={"/logo1024.png"}
                alt={"numeryx-logo"}
              />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
