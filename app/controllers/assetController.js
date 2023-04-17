const assetService = require("../services/assetService");

async function createNewAsset(req, res) {
  const { body } = req;
  try {
    await assetService.createNewAsset(body);
    res.status(201).json({
      message: "CREATE New Asset SUCCESS",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
}

async function getAllAsset(req, res) {
  const allAsset = await assetService.getAllAsset();
  try {
    res.status(200).json({
      message: "GET All Asset SUCCESS",
      data: allAsset,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
}

async function deleteAsset(req, res) {
  const assetId = req.params.assetId;
  try {
    const deleteAsset = await assetService.deleteAsset(assetId);
    res.status(200).json({
      message: "DELETE Asset SUCCESS",
      data: deleteAsset,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
}
async function updateAsset(req, res) {
  const assetId = req.params.assetId;
  const { body } = req;
  try {
    const updateAsset = await assetService.updateAsset({
      id: assetId,
      category: body.category,
      fiscalType: body.fiscalType,
      supplierName: body.supplierName,
      supplierAddress: body.supplierAddress,
      assetType: body.assetType,
      department: body.department,
      estimatedLife: body.estimatedLife,
      price: body.price,
      residualValue: body.residualValue,
      description: body.description,
    });
    res.status(200).json({
      message: "UPDATE Asset SUCCESS",
      data: updateAsset,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
}
module.exports = {
  createNewAsset,
  getAllAsset,
  deleteAsset,
  updateAsset,
};
