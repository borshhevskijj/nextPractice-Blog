"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Button from "@mui/material/Button";
function GoBackButton() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <Button sx={{ flex: "0 0 auto", height: "fit-content" }} variant="outlined" onClick={handleBack}>
      вернуться назад
    </Button>
  );
}

export default GoBackButton;
