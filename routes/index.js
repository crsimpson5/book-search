const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

// Send every other request to the React app
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

module.exports = router;
