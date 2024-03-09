const mongoose = require("mongoose");

const hospitalModel = mongoose.Schema(
  {
    hospitalname: { type: String, require: true },
    address: { type: String, require: true },
    city: { type: String, require: true },
    state: { type: String, require: true },
    pincode: { type: Number, require: true },
    registrationdate: { type: String, require: true },
    Ambulance: { type: Number, require: true },
    email: { type: String, require: true, unique: true },
    phoneno: { type: Number, require: true, unique: true },
    registrationno: { type: Number, require: true, unique: true },
    wardno: { type: Number, require: true },
    password: { type: Number, require: true },
  },
  { timestamps: true }
);
var UserDetails = mongoose.model("Hospital", hospitalModel);
module.exports = UserDetails;
