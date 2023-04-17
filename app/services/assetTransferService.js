const assetTransferService = require("../repositories/assetTranferRepository");

async function createNewAssetTransfer(data) {
  return assetTransferService.createNewAssetTransfer(data);
}

async function getAllAssetTransfer() {
  return assetTransferService.getAllAssetTransfer();
}

async function deleteAssetTransfer() {
  return assetTransferService.deleteAssetTransfer();
}

async function updateAssetTransfer() {
  return assetTransferService.updateAssetTransfer();
}

module.exports = {
  createNewAssetTransfer,
  getAllAssetTransfer,
  deleteAssetTransfer,
  updateAssetTransfer,
};
