const router = require("express").Router();

const projects = [
    {
        title: "Nordic Motorhome Rental",
        description: "Created a personal portfolio with Node.js",
        code: ["https://github.com/GabrielNicutari/Nordic-Motorhome-Rental"],
        published: "https://spring-web-server.herokuapp.com",
        image: "../assets/nmh.png",
        technologiesInvoled: ["Node.js", "Html", "CSS"]
    },
    {
        title: "We Bring | You Cook",
        description: "Ingredient delivery & recipe book platform",
        code: ["https://github.com/GabrielNicutari/WBYC_Web-Client","https://github.com/CristianOu/WBYC_Web-Server"],
        published: "https://wbyc-web-client.herokuapp.com",
        image: "../assets/wbyc-page.png",
        technologiesInvoled: ["Node.js", "Html", "CSS"]
    },
    {
        title: "Next Level",
        description: "Game Store",
        code: ["https://github.com/GabrielNicutari/NextLevel_Web-Client","https://github.com/GabrielNicutari/NextLevel_Web-Server"],
        published: "https://next-level-web-client.herokuapp.com/",
        image: "../assets/next-level2.png",
        technologiesInvoled: ["Node.js", "Html", "CSS"]
    },
    {
        title: "A Malicious Story",
        description: "Game",
        code: [],
        published: "https://www.youtube.com/watch?v=bwvLglQhMXU&t=17s",
        image: "",
        technologiesInvoled: ["Node.js", "Html", "CSS"]
    }
    
];

router.get("/api/projects", (req, res) => {
    res.send({ projects });
});


module.exports = {
    router
};
