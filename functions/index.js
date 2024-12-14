const functions = require("firebase-functions");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Initialize Express app
const app = express();

// Middleware
app.use(cors()); // Handle Cross-Origin Resource Sharing
app.use(express.json()); // Parse JSON request bodies

// Retrieve MongoDB URI from Firebase environment variables
const mongoURI = functions.config().mongodb?.uri || process.env.MONGODB_URI;

// Handle missing MongoDB URI
if (!mongoURI) {
  console.error("Error: MongoDB URI is not defined in Firebase config or environment variables.");
  process.exit(1); // Exit the process with failure
}

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  });

// Define a sample route
app.get("/", (req, res) => {
  res.status(200).send("Hello from Firebase Cloud Functions!");
});

// Example API routes (replace with your routes)
app.use("/api/connections", require("./routes/connectRoutes"));
app.use("/api/properties", require("./routes/propertyRoutes"));

exports.api = functions.https.onRequest(app);