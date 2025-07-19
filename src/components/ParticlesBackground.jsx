import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true },
        background: {
          color: "#000000",
        },
        particles: {
          number: {
            value: 100,
          },
          color: {
            value: "#ffffff",
          },
          links: {
            enable: true,
            color: "#ffffff",
            distance: 150,
            opacity: 0.5,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            outModes: {
              default: "bounce",
            },
          },
          size: {
            value: 3,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse", // Try: "grab", "bubble", or ["grab", "repulse"]
            },
            onClick: {
              enable: true,
              mode: "push", // adds particles on click
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.1,
            },
            grab: {
              distance: 150,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 200,
              size: 6,
              duration: 2,
              opacity: 0.8,
              speed: 3,
            },
            push: {
              quantity: 4,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
