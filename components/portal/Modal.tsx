import React from "react";
import { Modal as MuiModal, Button } from "@mui/material";
import cl from "../editButton/editButton.module.css";

interface props {
  isOpenModal: boolean;
  closeModal: (e: React.MouseEvent) => void;
  children: React.ReactElement;
}
function Modal({ closeModal, isOpenModal, children }: props) {
  return (
    <MuiModal
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      open={isOpenModal}
      onClose={closeModal}
    >
      {children}
    </MuiModal>
  );
}

export default Modal;
