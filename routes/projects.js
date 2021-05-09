const router = require("express").Router();

const projects = [
    {
        title: "Nodefolio",
        description: "Created a personal portfolio with Node.js",
        gitURL: ["https://github.com/anderslatif/Kea_DAT_Node_2021_SPRING.git/1/5._Nodefolio"],
        images: [],
        technologiesInvoled: ["Node.js", "Html", "CSS"]
    },
    {
        title: "We Bring | You Cook",
        description: "Ingredient delivery & recipe book platform",
        gitURL: ["https://github.com/GabrielNicutari/WBYC_Web-Client","https://github.com/CristianOu/WBYC_Web-Server"],
        images: [],
        technologiesInvoled: ["Node.js", "Html", "CSS"]
    },
    {
        title: "Next Level",
        description: "Game Store",
        gitURL: ["https://github.com/GabrielNicutari/WBYC_Web-Client","https://github.com/CristianOu/WBYC_Web-Server"],
        images: [],
        technologiesInvoled: ["Node.js", "Html", "CSS"]
    }
    
];

router.get("/api/projects", (req, res) => {
    res.send({ projects });
});


module.exports = {
    router
};
