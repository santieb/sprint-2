const express = require("express");
const router = express.Router();

const televisorController = require("../controllers/tv.controller");

router.post("/", (req, res) => {
  televisorController
    .createTelevisor(req)
    .then(() => {
      res.status(200).send({
        status: 200,
        message: "Data Save Successfully",
      });
    })
    .catch((error) => {
      res.status(400).send({
        message: "Unable to insert data",
        errors: error,
        status: 400,
      });
    });
});

router.get("/", (req, res) => {
  televisorController
    .orderByPrice()
    .then((result) => {
      res.status(200).send({
        status: 200,
        message: "Data find Successfully",
        data: result,
      });
    })
    .catch((error) => {
      res.status(400).send({
        message: "Unable to find data",
        errors: error,
        status: 400,
      });
    });
});

router.put("/:id", (req, res) => {
  televisorController
    .updateTelevisor(req)
    .then(() => {
      res.status(200).send({
        status: 200,
        message: "Data Update Successfully",
      });
    })
    .catch((error) => {
      res.status(400).send({
        message: "Unable to Update data",
        errors: error,
        status: 400,
      });
    });
});

router.delete("/:id", (req, res) => {
  televisorController
    .deleteTelevisor(req)
    .then(() => {
      res.status(200).send({
        status: 200,
        message: "Data Delete Successfully",
      });
    })
    .catch((error) => {
      res.status(400).send({
        message: "Unable to Delete data",
        errors: error,
        status: 400,
      });
    });
});

router.get("/:id", (req, res) => {
  televisorController
    .listTelevisorById(req)
    .then((result) => {
      res.status(200).send({
        status: 200,
        message: "Data find Successfully",
        data: result,
      });
    })
    .catch((error) => {
      res.status(400).send({
        message: "Unable to find data",
        errors: error,
        status: 400,
      });
    });
});

router.get("/marca/:marca", (req, res) => {
  televisorController
    .listTelevisorByIdMarca(req)
    .then((result) => {
      res.status(200).send({
        status: 200,
        message: "Data find Successfully",
        data: result,
      });
    })
    .catch((error) => {
      res.status(400).send({
        message: "Unable to find data",
        errors: error,
        status: 400,
      });
    });
});

router.get("/highestPrice/:price", (req, res) => {
  televisorController
    .listHighestPrice(req)
    .then((result) => {
      res.status(200).send({
        status: 200,
        message: "Data find Successfully",
        data: result,
      });
    })
    .catch((error) => {
      res.status(400).send({
        message: "Unable to find data",
        errors: error,
        status: 400,
      });
    });
});

router.get("/lowestPrice/:price", (req, res) => {
  televisorController
    .listLowestPrice(req)
    .then((result) => {
      res.status(200).send({
        status: 200,
        message: "Data find Successfully",
        data: result,
      });
    })
    .catch((error) => {
      res.status(400).send({
        message: "Unable to find data",
        errors: error,
        status: 400,
      });
    });
});

module.exports = router;
