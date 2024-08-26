"use client";
import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import { Modal as MuiModal, Button } from "@mui/material";
import cl from "./editButton.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface props {
  onClick: (e: React.MouseEvent) => void;
}
export default function EditButton({ onClick }: props) {
  return (
    <Fab onClick={onClick} color="default" size="small" aria-label="edit">
      <EditIcon />
    </Fab>
  );
}
