const assetMaintenanceService = require("../services/assetMaintenanceService");

async function createNewAssetMaintenance(req, res) {
  const { body } = req;

  try {
    await assetMaintenanceService.createNewAssetMaintenance(body);
    res.status(201).json({
      message: "CREATE New Asset Maintenance SUCCESS",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
}

async function getAllAssetMaintenance(req, res) {
  const allAssetMaintenance =
    await assetMaintenanceService.getAllAssetMaintenance();
  try {
    res.status(200).json({
      message: "GET All Asset Maintenance SUCCESS",
      data: allAssetMaintenance,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
}

module.exports = {
  createNewAssetMaintenance,
  getAllAssetMaintenance,
};
