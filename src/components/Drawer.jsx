import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";

import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import useDrawer, { DrawerContext } from "../context/DrawerProvider";

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
      <div className="drawer-header">NUMERYX</div>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        className="drawer-content"
      >
        {drawerData.map((ele, index) => (
          <ListItemButton onClick={() => setIsOpen(false)}>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary={ele.title} />
          </ListItemButton>
        ))}
      </List>
    </div>
  );
}
