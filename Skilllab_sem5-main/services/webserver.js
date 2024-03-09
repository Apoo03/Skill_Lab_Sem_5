const express = require('express');
const mongoose = require('mongoose');
const chartDataRouter = require('./routes/chartData');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/your_database_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());

// Routes
app.use('/api/chart-data', chartDataRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
