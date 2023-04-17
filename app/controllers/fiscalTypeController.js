const fiscalTypeService = require("../services/fiscalTypeService");

async function getAllFiscalType(req, res) {
  const allFiscalType = await fiscalTypeService.getAllFiscalType();
  console.log(allFiscalType);
  try {
    return res.status(200).json({
      message: "GET all fiscal type SUCCESS",
      data: allFiscalType,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
}

async function createNewFiscalType(req, res) {
  const { body } = req;

  try {
    await fiscalTypeService.createNewFiscalType(body);
    res.status(201).json({
      message: "CREATE fiscal type success",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
}

async function getFiscalTypeBy(req, res) {}
async function deleteFiscalType(req, res) {
  const fiscalTypeId = req.params.fiscalTypeId;
  try {
    const deleteFiscalType = await fiscalTypeService.deleteFiscalType(
      fiscalTypeId
    );
    res.status(200).json({
      message: "DELETE Fiscal Type SUCCESS",
      data: deleteFiscalType,
    });
  } catch (error) {}
}
async function updateFiscalType(req, res) {
  const fiscalId = req.params.fiscalId;
  const { body } = req;
  try {
    const updateFiscalType = await fiscalTypeService.updateFiscalType({
      id: fiscalId,
      Name: body.Name,
      EstimatedLife: body.EstimatedLife,
      DepreciationMethod: body.DepreciationMethod,
      DepreciationRate: body.DepreciationMethod,
      Description: body.Description,
    });

    res.status(200).json({
      message: "UPDATE Fiscal Type Success",
      data: updateFiscalType,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
}

module.exports = {
  createNewFiscalType,
  getAllFiscalType,
  deleteFiscalType,
  updateFiscalType,
};
