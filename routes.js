const express = require('express');
const router = express.Router();
const Car = require("./models/car");

//We add the CRUD operations to our initialized router from now on.
// Fetch all cars
router.get("/cars", async (req, res) => 
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
router.delete("/cars", async (req, res) =>
{
	await Car.deleteOne({_id : req.body.id }, (err, result) =>
	{
		catchErrors(err, result);
	});
});
router.put("/cars", async (req, res) =>
{
	await Car.findOneAndUpdate({ _id : req.params.id}, req.body, { new:true}, (err, result) =>
	{
		catchErrors(err, result);
	});
});
const catchErrors = (err, result) =>
{
	if (err)
	{
		return res.status(500).json({ message: err.message });
	}
	else
	{
		res.status(200).json(result);
	}
}
//Exports for other modules to use the routing.
module.exports = router;