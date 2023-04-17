const assetMaintenanceController = require("../controllers/assetMaintenanceController");
const express = require("express");
const router = express.Router();

router.post("/", assetMaintenanceController.createNewAssetMaintenance);
router.get("/", assetMaintenanceController.getAllAssetMaintenance);

module.exports = router;
