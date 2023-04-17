const { asset, assetTransfer } = require("../models");

async function createNewAssetTransfer(data) {
  return assetTransfer.create(data);
}

async function getAllAssetTransfer() {
  return assetTransfer.findAll({
    include: {
      model: asset,
    },
  });
}

async function deleteAssetTransfer(id) {
  return assetTransfer.destroy({
    where: { id: id },
  });
}
async function updateAssetTransfer(data) {
  return assetTransfer.upsert(data);
}
module.exports = {
  createNewAssetTransfer,
  getAllAssetTransfer,
  deleteAssetTransfer,
  updateAssetTransfer,
};
