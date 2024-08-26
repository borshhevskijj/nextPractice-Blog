"use client";
import React, { useState } from "react";
import EditButton from "@/components/editButton/EditButton";
import Modal from "@/components/portal/Modal";
import { Post, PostApi } from "@/services/postApi";
import Form from "./Form";
const api = new PostApi();

interface props {
  post: Post;
}
export interface Body {
  title: string;
  body: string;
  userId: number;
}

const updatePost = async (id: string | number, formBody: Body) => {
  let response = await api.updatePost(+id, formBody);
  return response;
};

export default function EditPost({ post }: props) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const closeModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpenModal(false);
  };

  const openModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpenModal(true);
  };

  const handleSubmit = (body: Body) => {
    updatePost(post.id, body);
    setIsOpenModal(false);
  };

  return (
    <>
      <EditButton onClick={openModal} />
      <Modal closeModal={closeModal} isOpenModal={isOpenModal}>
        <Form post={post} onclick={handleSubmit} />
      </Modal>
    </>
  );
}
