const router = require("express").Router();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const CLIENT_ID = '843391995196-8gfj66lfsnbp2i37gb59grbvft810uho.apps.googleusercontent.com';
const CLIENT_SECRET = 'rA2j40C4D0Qg25pO3tzMrkn5';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04iHT379tNkk6CgYIARAAGAQSNgF-L9IrkTJeTKcRHyEyuNhvDC5sscbVn6ipKYEx45l5IsoKptzkk84fj-irIV0u4OHJ2Y-SbA';

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

oAuth2Client.setCredentials({
    refresh_token: REFRESH_TOKEN
});

async function sendMail(req) {
    try {
        const accessToken = await oAuth2Client.getAccessToken();
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'gabriel.nicutari@gmail.com', 
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
              }
        });

        const output = `
            <p>You have received a new message.</p>
            <h3>Sender Details</h3>
            <ul>
                <li>Name: ${req.body.name}</li>
                <li>Email: ${req.body.email}</li>
                <li>Subject: ${req.body.subject}</li>
                <li>Message: ${req.body.message}</li>
            </ul>
        `;

        const mailOptions = { 
            from: `"Nodemailer Contact" <` + req.body.email + `>`,
            to: 'gabriel.nicutari@gmail.com',
            subject: req.body.subject,
            text: req.body.message,
            html: output
        };

        const result = await transport.sendMail(mailOptions);
        return result;

    } catch (error) {
        return error;
    }
}

router.post("/api/contact", (req, res) => {

    sendMail(req)
        .then((result) => {
            console.log("The email has been sent.", result);
            res.redirect("/");
        })
        .catch(error => console.log(error.message));
});

module.exports = {
    router
};