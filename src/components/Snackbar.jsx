import * as React from "react";
import { Alert } from "@mui/material";

export default function Snackbar({ children, handleCloseAlert, ...rest }) {
  return (
    <Alert onClose={handleCloseAlert} severity="warning" {...rest}>
      {children}
    </Alert>
  );
}
