const express = require("express");

const Cars = require("./cars-model.js");

const router = express.Router();

router.get("/", (req, res) => {
    Cars.find()
        .then(cars => {
            res.status(200).json(cars);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({
                message: "Error finding cars"
            });
        });
});

router.get("/:id", (req, res) => {
    Cars.findById(req.params.id)
        .then(car => {
            if (car) {
                res.status(200).json(car);
            } else {
                res.status(404).send({
                    message: `Car with ID: "${id}" not found`
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({
                message: "Error finding car"
            });
        });
});

router.post("/", (req, res) => {
    if (req.body["VIN"] && req.body.make && req.body.model && req.body.mileage) {
        const newCar = {
            ...req.body
        };
        Cars.add(newCar)
            .then(car => {
                res.status(200).json(car);
            })
            .catch(err => {
                console.log(err);
                res.status(500).send({ message: "Error adding the car" });
            });
    } else {
        res.status(400).send({
            message: "Make sure to include a VIN, make, mileage, and model"
        });
    }
});

module.exports = router;
