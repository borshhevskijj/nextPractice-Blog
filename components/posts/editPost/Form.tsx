import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { InputMultiline } from "@/components/input/Input";
import { Post } from "./../../../services/postApi";
import type { Body } from "./EditPost";

interface props {
  post: Post;
  onclick: ({ body, title, userId }: Body) => void;
}
export default function Form({ post, onclick }: props) {
  const [titleValue, setTitleValue] = useState(post.title);
  const [bodyValue, setBodyValue] = useState(post.body);

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.stopPropagation();
    setTitleValue(e.currentTarget.value);
  };
  const handleChangeBody = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.stopPropagation();
    setBodyValue(e.currentTarget.value);
  };

  const onSubmit = () => {
    const body = { title: titleValue, body: bodyValue, userId: post.userId };
    onclick(body);
  };
  return (
    <FormControl sx={{ backgroundColor: "white", width: "70%", padding: "30px" }}>
      <FormLabel>title</FormLabel>
      <TextField onChange={handleChangeTitle} size="small" value={titleValue}>
        {post.title}
      </TextField>

      <FormLabel>body</FormLabel>
      <InputMultiline setValue={handleChangeBody} value={bodyValue} />

      <Button onSubmit={onSubmit} type="submit" size="medium" variant="text">
        Submit
      </Button>
    </FormControl>
  );
}
