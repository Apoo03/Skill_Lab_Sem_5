const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.get('/daily', async (req, res) => {
  try {
    const today = moment().startOf('day');
    const tomorrow = moment(today).add(1, 'days');

    const dailyOrders = await Order.find({
      createdAt: { $gte: today, $lt: tomorrow }
    }).populate('foodId');

    // Process dailyOrders and send chart data as needed

    res.status(200).json({ chartData: /* Your chart data here */ });
  } catch (error) {
    console.error('Error fetching daily order data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
