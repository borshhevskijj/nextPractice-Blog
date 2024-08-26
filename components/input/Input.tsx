"use client";
import { useState, forwardRef } from "react";
import { Input as BaseInput, InputProps } from "@mui/base/Input";
import { styled } from "@mui/system";

const Input = forwardRef(function CustomInput(props: InputProps, ref: React.ForwardedRef<HTMLDivElement>) {
  return (
    <BaseInput
      slots={{
        root: RootDiv,
        input: "input",
        textarea: TextareaElement,
      }}
      {...props}
      ref={ref}
    />
  );
});

interface props {
  value: string;
  setValue: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
export function InputMultiline({ value, setValue }: props) {
  return <Input aria-label="Demo input" onChange={setValue} value={value} multiline placeholder="Type something…" />;
}

const blue = {
  100: "#DAECFF",
  200: "#80BFFF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const RootDiv = styled("div")`
  display: flex;
  max-width: 100%;
`;

const TextareaElement = styled("textarea", {
  shouldForwardProp: (prop) => !["ownerState", "minRows", "maxRows"].includes(prop.toString()),
})(
  ({ theme }) => `
  min-width: 100%;
  min-height: 150px;
  resize:none;
  overflow: auto;
  font:inherit;
  padding: 8.5px 14px;
  border-radius:4px;
  &:hover {
     border-color: rgba(0, 0, 0, 0.87);;
  }

  &:focus {
    border-width: 1px;
    border-color: transparent;
    box-shadow: 0 0 0 2px #1976d2;
    outline:none
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
);
