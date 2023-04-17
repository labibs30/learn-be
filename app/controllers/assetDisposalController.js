const assetdisposalService = require("../services/assetDisposalService");

async function createNewAssetDisposal(req, res) {
  const { body } = req;

  try {
    await assetdisposalService.createNewAssetDisposal(body);
    res.status(201).json({
      message: "CREATE New Asset disposal SUCCESS",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "SERVER Error",
      serverMessage: error,
    });
  }
}

async function getAllAssetDisposal(req, res) {
  try {
    const allAssetDiposal =
      await assetdisposalService.getAllDisposalRepository();
    res.status(200).json({
      message: "GET All Asset Disposal SUCCESS",
      data: allAssetDiposal,
    });
  } catch (error) {
    res.status(500).json({
      message: "SERVER Error",
      serverMessage: error,
    });
  }
}

module.exports = { createNewAssetDisposal, getAllAssetDisposal };
