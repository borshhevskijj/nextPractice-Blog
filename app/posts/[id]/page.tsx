import React from "react";
import { PostApi } from "@/services/postApi";
import cl from "./post.module.css";
import EditPost from "@/components/posts/editPost/EditPost";
const api = new PostApi();

export const fetchPost = async (id: string | number) => {
  let response = await api.getPost(+id);
  return response;
};

export default async function Post({ params }: { params: { id: string | number } }) {
  const post = await fetchPost(params.id);

  return (
    <div className={cl.container}>
      <h2>
        Post #{post.id}: {post.body}
      </h2>
      <EditPost post={post} />
    </div>
  );
}
