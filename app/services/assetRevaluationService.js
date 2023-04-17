const assetRevaluationRepository = require("../repositories/assetRevaluationRepository");

async function createNewAssetRevaluation(data) {
  return assetRevaluationRepository.createNewAssetRevaluation(data);
}

async function getAllAssetRevaluation() {
  return assetRevaluationRepository.getAllAssetRevaluation();
}

module.exports = {
  createNewAssetRevaluation,
  getAllAssetRevaluation,
};
