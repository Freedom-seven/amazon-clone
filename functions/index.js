const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51KKlM0CcdBKrwDd1tZsNLl0b3LRsZ71ppm67tjX95Gn1uCqatSBfUZQPXwEWRzZvfnqTfrynr05wuK1570GTxYne00Urc9tQ9m"
);

// - API

// - App config
const app = express();

// - Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
// eslint-disable-next-line max-len
app.get("/", (request, response) => response.status(200).send("Hello World!"));

app.post("/payments/create", async (request, response) => {
  try {
    const total = request.query.total;
    console.log("Payment request received!!! for this amount >>>", total);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });

    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.log("Payment Error", error);
    response.status(500).send({ error: error.message });
  }
});
//   const total = request.query.total;
//   console.log("Payment request received!!! for this amount >>>", total);

//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: total,
//     currency: "usd",
//     payment_method_types=["card"],
//   });
//   response.status(201).send({
//     clientSecret: paymentIntent.client_secret,
//   });
// });

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-d38e1/us-central1/api
