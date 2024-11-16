const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox", // Set to "sandbox" for testing or "live" for production
  client_id: "YOUR_SANDBOX_CLIENT_ID", // Replace with a valid sandbox client ID from PayPal
  client_secret: "YOUR_SANDBOX_CLIENT_SECRET", // Replace with a valid sandbox client secret from PayPal
});

module.exports = paypal;
