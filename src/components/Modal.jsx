import { Box, Grid, Modal } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";

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
export default function CustomModal({ isOpenModal, handleClose, modalData }) {
  return (
    <Modal
      open={isOpenModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {modalData?.map((item, index) => {
          return (
            <a
              key={index}
              href={item?.uri.includes("edocperso") ? "#" : item?.uri}
              className="card-backdrop-main"
            >
              <div
                className={
                  item?.uri.includes("edocperso") ? "asterix-error" : "d-none"
                }
              >
                <StarIcon style={{ fontSize: 10, color: "red" }} />
                disponible uniquement pour numeryx france
              </div>
              <Grid container spacing={2} alignItems={"center"}>
                <Grid item xs={4} md={3} textAlign="center">
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
  );
}
