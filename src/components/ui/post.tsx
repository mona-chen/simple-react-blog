import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "./button";
import { useNavigate } from "react-router-dom";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  imageUrl: string;
}

const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  const truncateText = (text: string, wordLimit: number) => {
    const words = text;
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit) + "...";
    }
    return text;
  };

  const navigate = useNavigate();
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-1xl font-bold mb-2">
          {truncateText(post.title, 20)}
        </h2>
        <p className="text-gray-700">{truncateText(post.body, 50)}</p>
        <Button
          onClick={() => navigate(`/post/${post.id}`)}
          className="bg-orange-500 mt-5"
        >
          Read More
        </Button>
      </div>
    </div>
  );
};

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get<Post[]>(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const postsWithImages = response.data.map((post) => ({
          ...post,
          imageUrl: `https://picsum.photos/400/300?random=${post.id}`,
        }));
        setPosts(postsWithImages);
      } catch (err) {
        setError("Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto p-4 w-[80%] h-full">
      <h1 className="text-4xl font-bold text-center mb-8">Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
