const axios = require('axios');
const moment = require('moment');

const sendWebhookNotification = async () => {
  try {
    const today = moment().startOf('day');
    const tomorrow = moment(today).add(1, 'days');

    const response = await axios.post('your_webhook_url', {
      text: `Daily order summary for ${today.format('MMMM D, YYYY')}`,
      attachments: [
        {
          title: 'Most Ordered Food',
          text: 'Your most ordered food details here'
        },
        // Add other attachment details as needed
      ]
    });

    console.log('Webhook notification sent:', response.data);
  } catch (error) {
    console.error('Error sending webhook notification:', error);
  }
};

sendWebhookNotification();
