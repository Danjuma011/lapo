import { useGetPosts } from "@/services/queries/posts/use-get-posts";
import React from "react";

const Page = () => {
  const { data, isLoading } = useGetPosts();
  console.log("posts", data);

  return <div></div>;
};

export default Page;
