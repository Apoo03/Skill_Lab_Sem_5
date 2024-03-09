const mongoose = require('mongoose');
const Order = require('./models/Order');
const moment = require('moment');

mongoose.connect('mongodb://localhost:27017/your_database_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const collectDailyOrderData = async () => {
  try {
    const today = moment().startOf('day');
    const tomorrow = moment(today).add(1, 'days');

    const dailyOrders = await Order.find({
      createdAt: { $gte: today, $lt: tomorrow }
    }).populate('foodId');

    // Process dailyOrders and store statistics as needed
    // For simplicity, you may update a daily statistics document in MongoDB
    // with details about the most ordered food, total orders, etc.
  } catch (error) {
    console.error('Error collecting daily order data:', error);
  }
};

collectDailyOrderData();
