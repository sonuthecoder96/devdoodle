import React from "react";
import appwriteServices from "../appwrite/config.js";
import { Link } from "react-router-dom";

const PostCard = ({ $id, title, featuredImage }) => {
  return (
    <Link
      to={`/post/${$id}`}
      className="w-full sm:w-[90%] md:w-[80%] lg:w-[300px]"
    >
      <div className="w-full backdrop-blur-lg bg-white/5 border border-white/10 shadow-xl rounded-2xl p-4 transition-transform transform hover:scale-105 hover:shadow-gray-500/30">
        <div className="w-full h-48 overflow-hidden rounded-xl mb-4">
          <img
            src={appwriteServices.getImage(featuredImage)}
            alt={title}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <h2 className=" text-center text-lg font-semibold text-white line-clamp-2">
          {title}
        </h2>
      </div>
    </Link>
  );
};

export default PostCard;
