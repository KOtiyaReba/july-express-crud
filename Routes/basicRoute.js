const express = require("express");
const router = express.Router();
router.use(express.json()); //to recognize json payloads
router.use(express.urlencoded({ extended: true })); //for images and files
// array to mimic db
const dbArray = [
  { name: "Tiya", age: 12 },
  { name: "Maya", age: 42 },
  { name: "Lucas", age: 8 },
];

// get method
router.get("/getData", (req, res) => {
  res.send(dbArray);
});

// Post method
router.post("/addData", (req, res) => {
  console.log(req.body);
  dbArray.push(req.body);
  res.send("data added");
});

// Update method
router.put("/edit", (req, res) => {
  dbArray.splice(1, 1, req.body);
  res.send("Updated Successfully!!");
});

// delete method
router.delete("/remove", (req, res) => {
  dbArray.pop();
  res.send("deleted successfully!!")
});
module.exports = router;
