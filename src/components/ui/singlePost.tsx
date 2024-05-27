import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  imageUrl: string;
}

const SinglePost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get<Post>(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        const postWithImage = {
          ...response.data,
          imageUrl: `https://picsum.photos/800/400?random=${response.data.id}`,
        };
        setPost(postWithImage);
      } catch (err) {
        setError("Failed to fetch post");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!post) return null;

  return (
    <div className="container mx-auto p-4">
      <div className="relative mb-8">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <h1 className="absolute bottom-4 left-4 text-4xl font-bold text-white">
          {post.title}
        </h1>
      </div>
      <div className="prose mx-auto">
        <p>{post.body}</p>
      </div>
    </div>
  );
};

export default SinglePost;
