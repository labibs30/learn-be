const assetRepository = require("../repositories/assetRepository");

async function createNewAsset(data) {
  return assetRepository.createNewAsset(data);
}

async function getAllAsset() {
  return assetRepository.getAllAsset();
}
async function deleteAsset() {
  return assetRepository.deleteAsset();
}
async function updateAsset() {
  return assetRepository.updateAsset();
}

module.exports = {
  createNewAsset,
  getAllAsset,
  deleteAsset,
  updateAsset,
};
