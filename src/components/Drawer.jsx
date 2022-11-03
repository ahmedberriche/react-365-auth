import {
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { DrawerContext } from "../context/DrawerProvider";
import { isMobileDevice } from "../utils";

const drawerData = [
  { title: "RH", subTitle: "" },
  { title: "NUMERYX UNIV", subTitle: "", icon: "" },
  { title: "YAMMER", subTitle: "", icon: "" },
  { title: "RECLAMATION", subTitle: "", icon: "" },
];
export default function Drawer() {
  const { isOpen, setIsOpen } = React.useContext(DrawerContext);

  return (
    <div className={isOpen ? "drawer-main" : "drawer-d-none"}>
      <div className="drawer-header">
        NUMERYX
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={() => setIsOpen(false)}
          color="inherit"
          className="drawer-header-btn"
        >
          <CloseIcon />
        </IconButton>
      </div>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        className="drawer-content"
      >
        {drawerData.map((ele, index) => (
          <ListItemButton
            key={index}
            onClick={() => isMobileDevice && setIsOpen(false)}
          >
            {/* <ListItemIcon>
              <SendIcon />
            </ListItemIcon> */}
            <ListItemText primary={ele.title} className="drawer-list-item" />
          </ListItemButton>
        ))}
      </List>
    </div>
  );
}
