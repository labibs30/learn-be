const express = require("express");
const app = express();
const PORT = 4500;
const fiscalTypeRoutes = require("../app/routes/fiscalTypeRoute");
const assetRoutes = require("../app/routes/assetRoute");
const assetTransferRoutes = require("../app/routes/assetTransferRoute");
const assetMaintenanceRoutes = require("../app/routes/assetMaintenanceRoute");
const assetDisposalRoutes = require("../app/routes/assetDisposalRoute");
const assetRevaluationRoutes = require("../app/routes/assetRevaluationRoute");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/fiscaltype", fiscalTypeRoutes);
app.use("/asset", assetRoutes);
app.use("/assettransfer", assetTransferRoutes);
app.use("/assetmaintenance", assetMaintenanceRoutes);
app.use("/assetdisposal", assetDisposalRoutes);
app.use("/assetrevaluation", assetRevaluationRoutes);
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
