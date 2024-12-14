const mongoose = require("mongoose");

const ConnectSchema = new mongoose.Schema({
  id: String,
  UserFirstName: String,
  UserLastName: String,
  UserEmailId: String,
});

module.exports = mongoose.model("Connect", ConnectSchema);
