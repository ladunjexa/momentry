import { useQuery } from "@tanstack/react-query";

type Post = {
  id: number;
  title: string;
  body: string;
};

const fetchPosts = async (limit = 10): Promise<Array<Post>> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
};

const usePosts = (limit: number = 10) => {
  return useQuery({
    queryKey: ["posts", limit],
    queryFn: () => fetchPosts(limit),
  });
};

export { usePosts, fetchPosts };
