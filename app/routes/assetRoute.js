const assetController = require("../controllers/assetController");
const express = require("express");
const router = express.Router();

router.get("/", assetController.getAllAsset);
router.post("/", assetController.createNewAsset);

module.exports = router;
