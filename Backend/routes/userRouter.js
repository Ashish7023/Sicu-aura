const express = require("express");
const router = express.Router();
const { registraHospital,authHospital} = require("../controllers/hospitalControllers");
router.route("/").post(registraHospital);
router.route("/login").post(authHospital);
module.exports = router;
