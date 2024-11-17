const express = require("express"),
    router = express.Router();


// ROOT ROUTE
router.get("/", (req, res) => {
    res.render("partials/index", {
        title: "Welcome!"
    });
});

router.get("/resume", (req, res) => {
    res.render("partials/resume", {
        title: "Resume"
    });
});

router.get("/projects", (req, res) => {
    res.render("partials/projects", {
        title: "Projects"
    });
});

module.exports = router;