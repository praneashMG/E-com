const express = require('express');
const router = express.Router();
const Mobile = require('../models/Mobile');
router.get('/brand/:brandName', async (req, res) => {
  try {
    const mobiles = await Mobile.find({ brand: req.params.brandName });
    res.json({ success: true, mobiles });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});
module.exports = router;
