import React, { useEffect } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setError, setLoading, setPosts } from "../store/postSlice";

const AllPosts = () => {
  const posts = useSelector((state) => state.posts.posts);
  const error = useSelector((state) => state.posts.error);
  const loading = useSelector((state) => state.posts.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    const allPosts = async () => {
      dispatch(setError(null));
      dispatch(setLoading(true));
      try {
        const allPosts = await appwriteService.getAllPost();
        if (allPosts) {
          dispatch(setPosts(allPosts.documents));
        }
      } catch (error) {
        dispatch(
          setError(
            error?.message || "Something went wrong while fetching posts."
          )
        );
        console.error("Error fetching posts:", error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    allPosts();
  }, [dispatch]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p className="text-xl animate-pulse">Loading posts...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full text-white py-10 px-4">
      {error && (
        <p className="text-center text-red-500 text-lg mb-6">{error}</p>
      )}
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

export default AllPosts;
