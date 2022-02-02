const express = require('express');
const router = express.Router();
const Car = require("./models/car");

//We add the CRUD operations to our initialized router from now on.
// Fetch all cars
router.get("/Cars", async (req, res) => 
{
    try 
    {
		const cars = await Car.find();
		res.send(cars);
    } 
    catch (error) 
    {
		return res.status(500).json({ message: err.message });
    }
});
router.post("/cars", async (req, res) =>
{
	const car = new Car
	({
			brand : req.body.brand,
			model : req.body.model,
            color : req.body.color,
			year : req.body.year,
	});

	try 
	{
		const newCar = await car.save();
		res.status(201).json({ newCar });
	} 
	catch (error) 
	{
		return res.status(500).json({ message: error.message });
	}

});
//Exports for other modules to use the routing.
module.exports = router;