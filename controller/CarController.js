const Car = require('../models/car')

// Get all cars
const getAllCars = async (req, res) => {
	try {
		const cars = await Car.find();
		res.json(cars);
	} catch (error) {
		res.status(500).json({ error: 'Internal Server Error' });
	}
};

// Add a new car
const addCar = async (req, res) => {
	const { id, name, brand, price } = req.body;

	try {
		const newCar = new Car({
			id,
			name,
			brand,
			price,
		});

		await newCar.save();
		res.json(newCar);
	} catch (error) {
		res.status(500).json({ error: 'Internal Server Error' });
	}
};

module.exports = {
	getAllCars,
	addCar,
};
