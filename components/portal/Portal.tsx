import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface props {
  children: React.ReactNode;
}

function Portal({ children }: props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? createPortal(children, document.body) : null;
}

export default Portal;
