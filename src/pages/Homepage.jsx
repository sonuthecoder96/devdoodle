import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../components";
import  "./help.css"
const features = [
  {
    title: "✨ Write Freely",
    description:
      "Share your technical thoughts, devlogs, or stories without limits.",
  },
  {
    title: "🚀 Instant Publishing",
    description:
      "Create, edit, and publish posts in real time with zero delay.",
  },
  {
    title: "🔐 Private & Secure",
    description: "Your data is protected. Only you control what to publish.",
  },
  {
    title: "📊 Track Engagement",
    description: "View your post performance and interaction insights easily.",
  },
];

const Homepage = () => {
  return (
    <div className="min-h-screen w-full  text-white px-4 py-12">
      <Container>
        <div className="text-center mb-16 px-4 md:gap-100">
          <h1 className="text-4xl sm:text-8xl mt-20 font-bold leading-tight mb-4">
            Welcome to <span className="gradient-text">DevDoodle</span>
          </h1>
          <p className="text-md sm:text-3xl mt-20 text-blue-200 max-w-3xl mx-auto">
            A creative playground for developers to express, explore, and engage
            through powerful blogging.
          </p>
          <Link
            to="/login"
            className="mt-20 mb-10 inline-block px-8 py-3 text-white  glow-on-hover"
          >
            Get Started
          </Link>

          <p className="text-md sm:text-3xl mt-20 text-blue-200 max-w-3xl mx-auto">
            <span className="gradient-text">Everything</span> you need to create for 
            <span className="gradient-text"> amazing</span> content
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#01081a] rounded-2xl p-6 border border-blue-700 shadow-md hover:shadow-blue-500 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-300 mb-2">
                {feature.title}
              </h3>
              <p className="text-blue-100">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Homepage;
