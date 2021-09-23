const express = require('express')
const router = express.Router()

const albumController = require("../controllers/albumes.controller");

router.post("/", (req, res) => {
  albumController.createAlbum(req)
  .then(() => {
    res.status(200).send({
      status: 200,
      message: "Data Save Successfully",
    });
  })
  .catch(error => {
    res.status(400).send({
      message: "Unable to insert data",
      errors: error,
      status: 400
    });
  });
});

router.get("/", (req, res) => {
  albumController.listAlbum()
  .then((result) => {
    res.status(200).send({
      status: 200,
      message: "Data find Successfully",
      data: result
    });
  })
  .catch(error => {
    res.status(400).send({
      message: "Unable to find data",
      errors: error,
      status: 400
    });
  });
});

router.put("/:id",(req, res) => {
  albumController.updateAlbum(req)
  .then(() => {
    res.status(200).send({
      status: 200,
      message: "Data Update Successfully",
    });
  })
  .catch(error => {
    res.status(400).send({
      message: "Unable to Update data",
      errors: error,
      status: 400
    });
  });
});

router.delete("/:id", (req, res) => {
  albumController.deleteAlbum(req)
  .then(() => {
    res.status(200).send({
      status: 200,
      message: "Data Delete Successfully",
    });
  })
  .catch(error => {
    res.status(400).send({
      message: "Unable to Delete data",
      errors: error,
      status: 400
    });
  });
});

router.get("/:id", (req, res) => {
  albumController.listAlbumById(req)
  .then((result) => {
    res.status(200).send({
      status: 200,
      message: "Data find Successfully",
      data: result
    });
  })
  .catch(error => {
    res.status(400).send({
      message: "Unable to find data",
      errors: error,
      status: 400
    });
  });
});

module.exports = router;