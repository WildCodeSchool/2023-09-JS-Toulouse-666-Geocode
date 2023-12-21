const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations

const carControllers = require("./controllers/carControllers");

// Route to get a list of items

router.get("/cars", carControllers.browse);

/* ************************************************************************* */
// Import chargingStationControllers module for handling operations
const chargingStationControllers = require("./controllers/chargingStationControllers");

// Route to get a list of charging station
router.get("/charging-station", chargingStationControllers.browse);

// Route to get a specific item by ID
router.get("/charging-station/:id", chargingStationControllers.read);

router.put("/charging-station/:id", chargingStationControllers.edit);

// Route to add a new item
router.post("/charging-station/", chargingStationControllers.add);

router.delete("/charging-station/:id", chargingStationControllers.destroy);
/* ************************************************************************* */

module.exports = router;
