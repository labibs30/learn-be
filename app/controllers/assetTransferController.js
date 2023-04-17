const assetTransferService = require("../services/assetTransferService");

async function createNewAssetTransfer(req, res) {
  const { body } = req;

  try {
    await assetTransferService.createNewAssetTransfer(body);
    res.status(200).json({
      message: "CREATE New Asset Transfer SUCCESS",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
}

async function getAllAssetTransfer(req, res) {
  const allAssetTransfer = await assetTransferService.getAllAssetTransfer();

  try {
    res.status(201).json({
      message: "GET All Asset Transfer SUCCESS",
      data: allAssetTransfer,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
}

async function updateAssetTransfer(req, res) {
  const assetTransferId = req.params.assetTransferId;
  try {
    const update = await assetTransferService.updateAssetTransfer({
      id: assetTransferId,
    });
    res.status(200).json({
      message: "UPDATE Aset Transfer SUCCESS",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
}

module.exports = {
  createNewAssetTransfer,
  getAllAssetTransfer,
  updateAssetTransfer,
};
