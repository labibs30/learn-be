const assetMaintenanceRepository = require("../repositories/assetMaintenanceRepository");

async function createNewAssetMaintenance(data) {
  return assetMaintenanceRepository.createNewAssetMaintenance(data);
}

async function getAllAssetMaintenance() {
  return assetMaintenanceRepository.getAllAssetMaintenance();
}

module.exports = {
  createNewAssetMaintenance,
  getAllAssetMaintenance,
};
