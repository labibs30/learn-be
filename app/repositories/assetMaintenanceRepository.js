const { assetmaintenance, asset } = require("../models/");

async function createNewAssetMaintenance(data) {
  return assetmaintenance.create(data);
}
async function getAllAssetMaintenance() {
  return assetmaintenance.findAll({
    include: {
      model: asset,
    },
  });
}

async function deleteAssetMaintenance(id) {
  return assetmaintenance.destroy({
    where: {
      id: id,
    },
  });
}
async function updateAssetMaintenance(data) {
  return assetmaintenance.upsert(data);
}

module.exports = {
  createNewAssetMaintenance,
  getAllAssetMaintenance,
  deleteAssetMaintenance,
  updateAssetMaintenance,
};
