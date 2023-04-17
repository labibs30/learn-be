const { assetrevaluation } = require("../models/");

async function createNewAssetRevaluation(data) {
  return assetrevaluation.create(data);
}
async function getAllAssetRevaluation() {
  return assetrevaluation.findAll();
}
async function deleteAssetRevaluation() {
  return assetrevaluation.destroy();
}
async function updateAssetRevaluation(data) {
  return assetrevaluation.upsert(data);
}

module.exports = {
  createNewAssetRevaluation,
  getAllAssetRevaluation,
  deleteAssetRevaluation,
  updateAssetRevaluation,
};
