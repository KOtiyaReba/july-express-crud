const express = require("express");
const router = express.Router();

// array to mimic db
const dbArray = [
  { name: "Sec", age: 12 },
  { name: "Maya", age: 42 },
  { name: "Lucas", age: 8 },
];

// get method
router.get("/getSec", (req, res) => {
  res.send(dbArray);
});





module.exports = router;
