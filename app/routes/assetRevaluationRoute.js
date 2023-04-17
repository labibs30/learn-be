const assetRevaluationController = require("../controllers/assetRevaluationController");
const express = require("express");
const router = express.Router();

router.post("/", assetRevaluationController.createNewAssetRevaluation);
router.get("/", assetRevaluationController.getAllAssetRevaluation);

module.exports = router;
