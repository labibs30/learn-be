const assetRevaluationService = require("../services/assetRevaluationService");

async function createNewAssetRevaluation(req, res) {
  const { body } = req;

  try {
    await assetRevaluationService.createNewAssetRevaluation(body);
    res.status(201).json({
      message: "CREATE New Asset Revaluation SUCCESS",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "SERVER ERROR",
      serverMessage: error,
    });
  }
}

async function getAllAssetRevaluation(req, res) {
  try {
    const allAssetRevaluation =
      assetRevaluationService.getAllAssetRevaluation();
    res.status(200).json({
      message: "GET All Asset Revaluation",
      data: allAssetRevaluation,
    });
  } catch (error) {
    res.status(500).json({
      message: "SERVER ERROR",
      serverMessage: error,
    });
  }
}

module.exports = {
  createNewAssetRevaluation,
  getAllAssetRevaluation,
};
