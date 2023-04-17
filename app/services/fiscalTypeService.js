const fiscalTypeRepository = require("../repositories/fiscalTypeRepository");

async function createNewFiscalType(data) {
  return fiscalTypeRepository.createNewFiscalType(data);
}

async function getAllFiscalType() {
  return fiscalTypeRepository.getAllFiscalType();
}

async function getFiscalTypeBy() {}

async function deleteFiscalType(data) {
  return fiscalTypeRepository.deleteFiscalType();
}

async function updateFiscalType(data) {
  return fiscalTypeRepository.updateFiscalType(data);
}

module.exports = {
  createNewFiscalType,
  getAllFiscalType,
  getFiscalTypeBy,
  deleteFiscalType,
  updateFiscalType,
};
