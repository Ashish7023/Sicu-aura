const User = require("../models/hospitalModel");
const genrateToken = require("../config/genrateToken");
const registraHospital = async (req, res) => {
  const {
    hospitalname,
    address,
    city,
    state,
    pincode,
    registrationdate,
    Ambulance,
    email,
    phoneno,
    registrationno,
    wardno,
    password,
  } = req.body;
  if (
    !hospitalname ||
    !address ||
    !city ||
    !state ||
    !pincode ||
    !registrationdate ||
    !Ambulance ||
    !email ||
    !phoneno ||
    !registrationno ||
    !wardno ||
    !password
  ) {
    res.status(400);
    console.log("please fill all the field:)");
    throw new Error("please Enter all the field");
    return;
  }
  const HospitalExists = await User.findOne({ email });
  if (HospitalExists) {
    res.status(400);
    console.log("user already exists:)");
    throw new Error("User Found");
    return;
  }
  const user = await User.create({
    hospitalname,
    address,
    city,
    state,
    pincode,
    registrationdate,
    Ambulance,
    email,
    phoneno,
    registrationno,
    wardno,
    password,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      hospitalname: user.hospitalname,
      address: user.address,
      city: user.city,
      state: user.state,
      pincode: user.pincode,
      registrationdate: user.registrationdate,
      Ambulance: user.Ambulance,
      email: user.email,
      phoneno: user.phoneno,
      registrationno: user.registrationno,
      wardno: user.wardno,
      password: user.password,
      Tokken: genrateToken(user._id),
    });
  } else {
    res.status(400);
    console.log("faild to create user :)");
    throw new Error("User not found");
  }
};
const authHospital = async (req, res) => {
  const { hospitalname, email, password } = req.body;
  if (!hospitalname || !email || !password) {
    res.status(400);
    throw new Error("please Enter all the field");
    return;
  }
  const user = await User.findOne({ email });
  if (user) {
    if (user.password == password) {
      console.log("Ashish");
      res.status(201).json({
        _id: user._id,
        hospitalname: user.hospitalname,
        address: user.address,
        city: user.city,
        state: user.state,
        pincode: user.pincode,
        registrationdate: user.registrationdate,
        Ambulance: user.Ambulance,
        email: user.email,
        phoneno: user.phoneno,
        registrationno: user.registrationno,
        wardno: user.wardno,
        password: user.password,
        Tokken: genrateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("password is incorrect !");
    }
  } else {
    res.status(400);
    throw new Error("Hospital not register yet");
    return;
  }
};

module.exports = { registraHospital, authHospital };
