const { asset, FiscalType } = require("../models");

async function createNewAsset(data) {
  return asset.create(data);
}

async function getAllAsset() {
  return asset.findAll({
    include: {
      model: FiscalType,
    },
  });
}

async function deleteAsset(data) {
  return asset.destroy({});
}

async function updateAsset(data) {
  return asset.upsert(data);
}

module.exports = {
  createNewAsset,
  getAllAsset,
  deleteAsset,
  updateAsset,
};
