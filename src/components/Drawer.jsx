import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";

import React from "react";
import useDrawer, { DrawerContext } from "../context/DrawerProvider";

export default function Drawer() {
  const { isOpen } = React.useContext(DrawerContext);

  return (
    <div className={isOpen ? "drawer-main" : "drawer-d-none"}>
      <div className="drawer-header">NUMERYX</div>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        className="drawer-content"
      >
        <ListItemButton>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Liste formation" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Liste formation" />
        </ListItemButton>
      </List>
    </div>
  );
}
