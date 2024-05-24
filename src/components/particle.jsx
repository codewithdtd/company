import { useCallback } from "react";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles";
import { loadSlim } from "tsparticles-slim"; 

import React from 'react'

export const Particle = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <div>
            <Particles 
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fullScreen: false,
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                // mode: "repulse",
                                mode: "grab",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                            grab: {
                                distance: 300,
                                link_linked: {
                                    opacity: 0.5,
                                }
                            }
                        },
                    },
                    particles: {
                        color: {
                            value: "#2a6dff",
                        },
                        links: {
                            color: "#fff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 2,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 1500,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 4 },
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );
}
