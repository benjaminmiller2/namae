const router = require("express").Router();
const nameRoutes = require("./names");

router.use("/names", nameRoutes);


module.exports = router;
