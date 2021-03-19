const express = require("express");
const router = express.Router();

router.get("/test", async (req, res) => {
  try {
    console.log("success");
    res.send("success");
  } catch (err) {
    console.log("error:", err);
  }
});

module.exports = router;
