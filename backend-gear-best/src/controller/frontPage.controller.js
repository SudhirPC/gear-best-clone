const frontPageSchema = require("../model/frontPage.model.js");
const express = require("express");
const User = require("../model/auth.model.js");
const router = express.Router();

router.post("", async (req, res) => {
  try {
    const frontPage = await frontPageSchema.create(req.body);
    res.send(frontPage);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("", async (req, res) => {
  try {
    const frontPage = await frontPageSchema.find().lean().exec();
    res.send(frontPage);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("checkout/:id/:product", async (req, res) => {
  try {
    await User.findOneAndUpdate(
      { _id: req.params.id },
      { $addToSet: { CheckOut: { $each: [req.params.product] } } },
      {
        new: true,
      }
    );
    res.send({ message: "Success" });
  } catch (err) {
    res.send({ message: "product all ready add" });
  }
});

module.exports = router;
