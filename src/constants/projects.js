import bodegalimbo from "/assets/projects/bodegalimbo.jpg?url";
import bestfriend from "/assets/projects/bestfriend.png?url";
import soundbit from "/assets/projects/soundbit.png?url";
import portfolio from "/assets/projects/portfolio.png?url";
import flownba from "/assets/projects/flownba.png?url";
import hotelperlablanca from "/assets/projects/hotelperlablanca.png?url";

const projects = [
    {
        name: "Bodega Limbo",
        description: "Website for Bodega Limbo featuring a wine e-commerce platform, significantly boosting its product sales. Functional, visually appealing and optimized to ensure an excellent user experience.",
        image: bodegalimbo,
        tech: [
            {
                name: "html",
                color: "linear-gradient(90deg, orange, red)",
            },
            {
                name: "css",
                color: "linear-gradient(90deg, blue, white)"
            },
            {
                name: "javascript",
                color: "linear-gradient(90deg, yellow, orange)"
            },
            {
                name: "react",
                color: "linear-gradient(90deg, cyan, purple)"
            },
            {
                name: "uxui",
                color: "linear-gradient(90deg, pink, red)"
            },
            {
                name: "emailjs",
                color: "linear-gradient(90deg, purple, pink)"
            },
            {
                name: "materialui",
                color: "linear-gradient(90deg, lightgreen, cyan)"
            },
            {
                name: "reactbootstrap",
                color: "linear-gradient(90deg, red, purple)"
            }
        ],
        link: "https://bodegalimbo.com.ar",
        repository: "https://github.com/chriscoronab/BodegaLimbo"
    },
    {
        name: "Best Friend",
        description: "Project developed during the first stage of the No Country work simulation. A platform that facilitates pet adoption by connecting people with animals in need of a home. It includes a form with key questions to assess the adopter's suitability, promoting a responsible adoption process and ensuring pets' well-being.",
        image: bestfriend,
        tech: [
            {
                name: "html",
                color: "linear-gradient(90deg, orange, red)",
            },
            {
                name: "css",
                color: "linear-gradient(90deg, blue, white)"
            },
            {
                name: "javascript",
                color: "linear-gradient(90deg, yellow, orange)"
            },
            {
                name: "react",
                color: "linear-gradient(90deg, cyan, purple)"
            },
            {
                name: "vite",
                color: "linear-gradient(90deg, pink, red)"
            },
            {
                name: "nodejs",
                color: "linear-gradient(90deg, lightgreen, brown)"
            },
            {
                name: "express",
                color: "linear-gradient(90deg, white, gray)"
            },
            {
                name: "sequelize",
                color: "linear-gradient(90deg, yellow, whitesmoke)"
            },
            {
                name: "emailjs",
                color: "linear-gradient(90deg, purple, pink)"
            },
            {
                name: "bootstrap",
                color: "linear-gradient(90deg, red, purple)"
            }
        ],
        link: "https://findyourbestfriend.vercel.app",
        repository: "https://github.com/No-Country-simulation/c21-22-m-react-agregarback"
    },
    {
        name: "Soundbit",
        description: "Project developed during the second stage of the No Country work simulation. Soundbit is a music player that offers an immersive and unique listening experience. Its main feature is its exclusive focus on 8D music, which includes surround audio effects that create the sensation of being enveloped by sound in constant motion, transporting you to a dynamic and captivating auditory universe.",
        image: soundbit,
        tech: [
            {
                name: "typescript",
                color: "linear-gradient(90deg, blue, cyan)"
            },
            {
                name: "react",
                color: "linear-gradient(90deg, cyan, purple)"
            },
            {
                name: "nextjs",
                color: "linear-gradient(90deg, white, gray)"
            },
            {
                name: "java",
                color: "linear-gradient(90deg, lightgreen, brown)"
            },
            {
                name: "springboot",
                color: "linear-gradient(90deg, red, orange)"
            },
            {
                name: "mysql",
                color: "linear-gradient(90deg, yellow, whitesmoke)"
            },
            {
                name: "swagger",
                color: "linear-gradient(90deg, purple, pink)"
            },
            {
                name: "tailwindcss",
                color: "linear-gradient(90deg, red, purple)"
            },
            {
                name: "shadcn",
                color: "linear-gradient(90deg, blue, white)"
            },
            {
                name: "figma",
                color: "linear-gradient(90deg, purple, lightgreen)"
            }
        ],
        link: "https://soundbitmusic.vercel.app",
        repository: "https://github.com/No-Country-simulation/equipo-s19-06-m-webapp"
    },
    {
        name: "Portfolio",
        description: "Personal portfolio showcasing my projects, technical skills and contact links.",
        image: portfolio,
        tech: [
            {
                name: "html",
                color: "linear-gradient(90deg, orange, red)",
            },
            {
                name: "css",
                color: "linear-gradient(90deg, blue, white)"
            },
            {
                name: "javascript",
                color: "linear-gradient(90deg, yellow, orange)"
            },
            {
                name: "react",
                color: "linear-gradient(90deg, cyan, purple)"
            },
            {
                name: "vite",
                color: "linear-gradient(90deg, pink, red)"
            },
            {
                name: "emailjs",
                color: "linear-gradient(90deg, purple, pink)"
            },
            {
                name: "materialui",
                color: "linear-gradient(90deg, lightgreen, cyan)"
            }
        ],
        link: "https://christiancorona.vercel.app",
        repository: "https://github.com/chriscoronab/Portfolio"
    },
    {
        name: "Flow NBA",
        description: "Project developed during the React Js course. An intuitive and efficient NBA t-shirt e-commerce platform with features that allow users to select the size and quantity of each product.",
        image: flownba,
        tech: [
            {
                name: "html",
                color: "linear-gradient(90deg, orange, red)",
            },
            {
                name: "css",
                color: "linear-gradient(90deg, blue, white)"
            },
            {
                name: "javascript",
                color: "linear-gradient(90deg, yellow, orange)"
            },
            {
                name: "react",
                color: "linear-gradient(90deg, cyan, purple)"
            },
            {
                name: "vite",
                color: "linear-gradient(90deg, pink, red)"
            },
            {
                name: "firebase",
                color: "linear-gradient(90deg, yellow, lightgreen)"
            },
            {
                name: "materialui",
                color: "linear-gradient(90deg, lightgreen, cyan)"
            }
        ],
        link: "https://flow-nba.vercel.app",
        repository: "https://github.com/chriscoronab/FlowNBA"
    },
    {
        name: "Hotel Perla Blanca",
        description: "Project developed during the JavaScript course. A hotel booking system that automatically calculates the number of nights based on check-in and check-out dates, and determines the total price of the stay based on the room type and selected nights. Upon confirming the reservation, it updates the DOM with the details.",
        image: hotelperlablanca,
        tech: [
            {
                name: "html",
                color: "linear-gradient(90deg, orange, red)",
            },
            {
                name: "css",
                color: "linear-gradient(90deg, blue, white)"
            },
            {
                name: "javascript",
                color: "linear-gradient(90deg, yellow, orange)"
            },
            {
                name: "bootstrap",
                color: "linear-gradient(90deg, red, purple)"
            }
        ],
        link: "https://chriscoronab.github.io/HotelPerlaBlanca",
        repository: "https://github.com/chriscoronab/HotelPerlaBlanca"
    }
];

export default projects;