const express = require('express');
const router = express.Router();
const CompanyModel = require('../models/companyModel'); 

router.post("/q6", async (req, res) => {
  try {
    const newCompany = new CompanyModel(
      req.body
    );
    await newCompany.save();  
    res.json(newCompany);  
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.put("/q7", async (req, res) => {
  try {
    const updatedCompany = await CompanyModel.findOneAndUpdate(
      { name: "LG" },  
      { country: "SOUTH KOREA" },  
    );
    res.json(updatedCompany);  
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.delete("/q8", async (req, res) => {
  try {
    const deletedCompany = await CompanyModel.findOneAndDelete({ _id: "5" });  
    res.json(deletedCompany);  
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

module.exports = router;
