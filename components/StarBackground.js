"use client";
import { useCallback } from "react";
import { Particles } from "@tsparticles/react"; 
import { loadFull } from "@tsparticles/engine";

export const StarBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine); // Loads all available particle features
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // You can access the particle container here if you need
  }, []);

  return (
    <div className="w-full h-screen fixed inset-0 -z-10">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          particles: {
            number: {
              value: 500, // Number of particles
              density: {
                enable: true,
                value_area: 800, // Particle density area
              },
            },
            shape: {
              type: "star", // Set particle shape to star
            },
            size: {
              value: 3, // Size of particles
            },
            opacity: {
              value: 0.7, // Opacity of particles
              random: true,
              anim: {
                enable: true,
                speed: 0.5,
                opacity_min: 0.1,
              },
            },
            links: {
              enable: false, // Disable links between particles
            },
            move: {
              enable: true,
              speed: 0.1, // Movement speed of particles
              direction: "none", // No specific direction
              random: true,
              straight: false,
              out_mode: "out", // Particles go out of the canvas
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse", // Repulse particles on hover
              },
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 1,
              },
            },
          },
        }}
      />
    </div>
  );
};