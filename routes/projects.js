const router = require("express").Router();

const projects = [
    {
        title: "Nordic Motorhome Rental",
        description: "Motorhome car rental system",
        code: ["https://github.com/GabrielNicutari/Nordic-Motorhome-Rental"],
        published: "https://spring-web-server.herokuapp.com",
        image: "../assets/nmh.png",
        technologiesInvoled: []
    },
    {
        title: "Next Level",
        description: "Digital game store",
        code: ["https://github.com/GabrielNicutari/NextLevel_Web-Client","https://github.com/GabrielNicutari/NextLevel_Web-Server"],
        published: "https://next-level-web-client.herokuapp.com/",
        image: "../assets/next-level2.png",
        technologiesInvoled: []
    },
    {
        title: "We Bring | You Cook",
        description: "Ingredient delivery and recipe book system",
        code: ["https://github.com/GabrielNicutari/WBYC_Web-Client","https://github.com/CristianOu/WBYC_Web-Server"],
        published: "https://wbyc-web-client.herokuapp.com",
        image: "../assets/wbyc-page.png",
        technologiesInvoled: []
    },
    {
        title: "A Malicious Story",
        description: "3D platformer game with a narrative-driven story",
        code: [],
        published: "https://www.youtube.com/watch?v=bwvLglQhMXU&t=17s",
        image: "../assets/game2.png",
        technologiesInvoled: []
    }
    
];

router.get("/api/projects", (req, res) => {
    res.send({ projects });
});


module.exports = {
    router
};
