const { FiscalType, asset } = require("../models");

async function createNewFiscalType(data) {
  return FiscalType.create(data);
}

async function getAllFiscalType() {
  return FiscalType.findAll({
    include: {
      model: asset,
      attributes: ["supplierAddress"],
    },
  });
}

async function getFiscalTypeBy() {}

async function deleteFiscalType(id) {
  return FiscalType.destroy({
    where: { id: id },
  });
}

async function updateFiscalType(data) {
  return FiscalType.upsert(data);
}

module.exports = {
  createNewFiscalType,
  getAllFiscalType,
  getFiscalTypeBy,
  deleteFiscalType,
  updateFiscalType,
};
