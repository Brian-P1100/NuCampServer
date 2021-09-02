const express = require("express");
const partnerRouter = express.Router();


partnerRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the partners to you");
  })
  .post((req, res) => {
    res.end(
      `Will add the campsite: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /campsites");
  })
  .delete((req, res) => {
    res.end("Deleting all campsites");
  });


partnerRouter
  .route("/:partnerId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end(`Will send your campsite with the Id of ${req.params.partnerId}`);
  })
  .post((req, res) => {
    res.end("not supported");
  })
  .put((req, res) => {
    res.statusCode = 200;
    res.end(`We will update the name to ${req.params.partnerId}`);
  })
  .delete((req, res) => {
    res.end(`Deleting ${req.params.partnerId}`);
  });