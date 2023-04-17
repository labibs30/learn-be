const fiscalTypeController = require("../controllers/fiscalTypeController");
const express = require("express");
const router = express.Router();

router.get("/", fiscalTypeController.getAllFiscalType);
router.post("/", fiscalTypeController.createNewFiscalType);

module.exports = router;
