const assetdisposalRepository = require("../repositories/assetDisposalRepository");

async function createNewAssetDisposal(data) {
  return assetdisposalRepository.createNewDisposalRepository(data);
}
async function getAllDisposalRepository() {
  return assetdisposalRepository.getAllDisposalRepository();
}

module.exports = {
  createNewAssetDisposal,
  getAllDisposalRepository,
};
