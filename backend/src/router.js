const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import auth services for security operations
const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./services/auth");

// Import itemControllers module for handling item-related operations

const chargingStationControllers = require("./controllers/chargingStationControllers");
const carControllers = require("./controllers/carControllers");
const reservationControllers = require("./controllers/reservationControllers");
const contactControllers = require("./controllers/contactControllers");

// Import Middlewares
const validateCar = require("./middlewares/validateCar");
const validateUser = require("./middlewares/validateUser");
const validateReservation = require("./middlewares/validateReservation");
const validateChargingStation = require("./middlewares/validateChargingStation");

// Route to get a list of charging station
router.get("/charging-stations", chargingStationControllers.browse);
router.get("/charging-stations/:id", chargingStationControllers.read);
router.put(
  "/charging-stations/:id",
  validateChargingStation,
  chargingStationControllers.edit
);
router.post(
  "/charging-stations/",
  validateChargingStation,
  chargingStationControllers.add
);
router.delete("/charging-stations/:id", chargingStationControllers.destroy);
/* ************************************************************************* */

// Import chargingStationControllers module for handling operations
const userControllers = require("./controllers/userControllers");

// Route to get a list of charging station
router.get("/users", verifyToken, userControllers.browse);
router.get("/users/:id", verifyToken, userControllers.read);
router.post("/users/", validateUser, hashPassword, userControllers.add);
router.post(
  "/users/login",
  userControllers.readByEmailAndPassToNext,
  verifyPassword
);
router.put(
  "/users/:id",
  verifyToken,
  validateUser,
  hashPassword,
  userControllers.edit
);
router.delete("/users/:id", verifyToken, userControllers.destroy);

// Route to get a list of cars
router.get("/cars", carControllers.browse);
router.get("/cars/:id", carControllers.read);
router.put("/cars/:id", validateCar, carControllers.edit);
router.post("/cars/", validateCar, carControllers.add);
router.delete("/cars/:id", carControllers.destroy);

// Route to get a list of reservations
router.get("/reservations", reservationControllers.browse);
router.get("/reservations/:id", reservationControllers.read);
router.put(
  "/reservations/:id",
  validateReservation,
  reservationControllers.edit
);
router.post("/reservations/", validateReservation, reservationControllers.add);
router.delete("/reservations/:id", reservationControllers.destroy);

// Route to get a list of cars
router.get("/contacts", contactControllers.browse);
router.get("/contacts/:id", contactControllers.read);
router.put("/contacts/:id", contactControllers.edit);
router.post("/contacts", contactControllers.add);
router.delete("/contacts/:id", contactControllers.destroy);

module.exports = router;
