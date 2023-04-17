const assetdisposalController = require("../controllers/assetDisposalController");
const express = require("express");
const router = express.Router();

router.post("/", assetdisposalController.createNewAssetDisposal);
router.get("/", assetdisposalController.getAllAssetDisposal);

module.exports = router;
