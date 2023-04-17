const { assetdisposal, asset } = require("../models/");

async function createNewDisposalRepository(data) {
  return assetdisposal.create(data);
}
async function getAllDisposalRepository() {
  return assetdisposal.findAll({
    include: {
      model: asset,
    },
  });
}

module.exports = {
  createNewDisposalRepository,
  getAllDisposalRepository,
};
