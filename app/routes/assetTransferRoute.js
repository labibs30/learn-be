const assetTransferController = require("../controllers/assetTransferController");
const express = require("express");
const router = express.Router();

router.get("/", assetTransferController.getAllAssetTransfer);
router.post("/", assetTransferController.createNewAssetTransfer);

module.exports = router;
