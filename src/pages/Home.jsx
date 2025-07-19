import React, { useEffect } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setError, setLoading, setPosts } from "../store/postSlice";
import Homepage from "./Homepage";

const Home = () => {
  const posts = useSelector((state) => state.posts.posts);
  const error = useSelector((state) => state.posts.error);
  const loading = useSelector((state) => state.posts.loading);
  const loginStatus = useSelector((state) => state.auth.status);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPosts = async () => {
      dispatch(setError(null));
      dispatch(setLoading(true));
      try {
        const posts = await appwriteService.getAllPost();
        if (posts) {
          dispatch(setPosts(posts.documents));
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
        dispatch(
          setError(
            error.message || "Something went wrong while fetching posts."
          )
        );
      } finally {
        dispatch(setLoading(false));
      }
    };

    if (loginStatus) {
      fetchPosts(); // Fetch only if logged in
    } else {
      dispatch(setPosts([])); // Clear if logged out
    }
  }, [loginStatus, dispatch]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p className="text-xl animate-pulse">Loading posts...</p>
      </div>
    );
  }

  if (!loginStatus) {
    return <Homepage />;
  }

  if (posts.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
        <Container>
          <h1 className="text-2xl sm:text-3xl font-semibold text-center hover:text-gray-400 transition-all">
            No posts yet. Be the first to create one!
          </h1>
        </Container>
      </div>
    );
  }


  return (
    <div className="min-h-screen w-full bg-transparent text-white py-10 px-4">
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {posts.map((post) => (
            <PostCard key={post.$id} {...post} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
