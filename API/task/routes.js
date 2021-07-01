const express = require("express");
const { dataFetch, dataAdd, dataUpdate, dataDelete } = require("./controllers")
const router = express.Router();

/* Read Routes */
router.get("/", dataFetch);

/* Create Routes */
router.post("/", dataAdd);

/* Update Routes */
router.put("/:taskId", dataUpdate);

/* Delete Routes */
router.delete("/:taskId", dataDelete);

module.exports = router;