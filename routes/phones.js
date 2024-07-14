const express = require('express');
const router = express.Router();
const PhoneModel = require('../models/phoneModel'); 

router.get("/q1", async (req, res) => {
  try {
    const data = await PhoneModel
      .find({})
      .sort({ _id: 1 }) 
      .limit(10); 
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.get("/q2", async (req, res) => {
  try {
    const data = await PhoneModel
      .find({})
      .sort({ price: -1 }) 
      .limit(5); 
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.get("/q3", async (req, res) => {
  try {
    const data = await PhoneModel
      .find({})
      .sort({ rating: -1 }) 
      .skip(3) 
      .limit(3); 
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.get("/q4", async (req, res) => {
  try {
    const data = await PhoneModel
      .findOne({ name: "Mi 10" }); 
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.get("/q5", async (req, res) => {
  try {
    const data = await PhoneModel
      .find({ gpu: /Adreno/i }); 
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.get("/q9", async (req, res) => {
  try {
    const count = await PhoneModel.countDocuments({});
    res.json({ count });
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.get("/q10", async (req, res) => {
  try {
    const count = await PhoneModel.countDocuments({ cpu: /Qualcomm/i });
    res.json({ count });
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.get("/q11", async (req, res) => {
  try {
    const phones = await PhoneModel.find({ price: { $gte: 1300, $lte: 2000 } })
      .sort({ price: 1 })
      .limit(4);
    res.json(phones);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.get("/q12", async (req, res) => {
  try {
    const phones = await PhoneModel.find({ total_score: { $in: [86, 90, 79] } });
    res.json(phones);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.get("/q13", async (req, res) => {
  try {
    const phones = await PhoneModel.find({}, { name: 1, total_score: 1 })
      .sort({ company_id: 1 })
      .limit(10);
    res.json(phones);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.get("/q14", async (req, res) => {
  try {
    const phones = await PhoneModel.find({
      $or: [{ battery_score: 76 }, { company_id: 2 }]
    })
      .sort({ price: -1 });
    res.json(phones);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.get("/q15", async (req, res) => {
  try {
    const phones = await PhoneModel.find({
      battery_score: 76,
      company_id: 4
    });
    res.json(phones);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.get("/q16", async (req, res) => {
  try {
    const data = await PhoneModel.aggregate([
      { $group: { _id: "$company_id", count: { $sum: 1 } } }
    ]);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.get("/q17", async (req, res) => {
  try {
    const data = await PhoneModel.aggregate([
      { $group: { _id: "$company_id", averagePrice: { $avg: "$price" } } }
    ]);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.get("/q18", async (req, res) => {
  try {
    const data = await PhoneModel.aggregate([
      { $group: { _id: "$company_id", minPrice: { $min: "$price" } } }
    ]);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.get("/q19", async (req, res) => {
  try {
    const phones = await PhoneModel.find().populate('company_id', 'name');  // תיקון ל'company_id'
    res.json(phones);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.get("/q20", async (req, res) => {
  try {
    const phones = await PhoneModel.find()
      .sort({ price: -1 })
      .limit(5)
      .populate('company_id', 'country');  // תיקון ל'company_id'
    res.json(phones);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

module.exports = router;
