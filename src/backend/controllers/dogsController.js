const Dog = require('../model/Dog');

const getAllDogs = async (req, res) => {
    const dogs = await Dog.find();
    if (!dogs) return res.status(204).json({ 'message': 'No dogs found.' });
    res.json(dogs);
}

const createNewDog = async (req, res) => {
    if (!req?.body?.name || !req?.body?.breed || !req?.body?.location || !req?.body?.img) {
        return res.status(400).json({ 'message': 'One or more fields are lacking' });
    }

    try {
        const result = await Dog.create({
           name: req.body.name,
           breed: req.body.breed,
           location: req.body.location,
           img: req.body.img
        });

        res.status(201).json(result);
    } catch (err) {
        console.error(err);
    }
}

const updateDog = async (req, res) => {
    if (!req?.body?.id) {
        return res.status(400).json({ 'message': 'ID parameter is required.' });
    }

    const dog = await Dog.findOne({ _id: req.body.id }).exec();
    if (!dog) {
        return res.status(204).json({ "message": `No dog matches ID ${req.body.id}.` });
    }
    if (req.body?.name) dog.name = req.body.name;
    if (req.body?.breed) dog.breed = req.body.breed;
    if (req.body?.location) dog.location = req.body.location;
    if (req.body?.img) dog.img = req.body.img;
    const result = await dog.save();
    res.json(result);
}

const deleteDog = async (req, res) => {
    if (!req?.body?.id) {
        return res.status(400).json({ 'message': 'ID parameter is required.' });
    }

    const dog = await Dog.findOne({ _id: req.body.id }).exec();
    if (!dog) {
        return res.status(204).json({ "message": `No dog matches ID ${req.body.id}.` });
    }
    const result = await dog.deleteOne(); //{ _id: req.body.id }
    res.json(result);
}

const getDogID = async (req, res) => {
    if (!req?.params?.id) return res.status(400).json({ 'message': 'Dog ID required.' });

    const dog = await Dog.find({ _id: req.params.id }).exec();
    if (!dog) {
        return res.status(204).json({ "message": `No dog matches ID ${req.params.id}.` });
    }
    res.json(dog);
}

const getDogName = async (req, res) => {
    if (!req?.params?.name) return res.status(400).json({ 'message': 'Dog Name required.' });

    const dog = await Dog.find({ name: req.params.name }).exec();
    if (!dog) {
        return res.status(204).json({ "message": `No dog matches Name ${req.params.name}.` });
    }
    res.json(dog);
}


const getDogBreed = async (req, res) => {
    if (!req?.params?.breed) return res.status(400).json({ 'message': 'Dog Breed required.' });

    const dog = await Dog.find({ breed: req.params.breed }).exec();
    if (!dog) {
        return res.status(204).json({ "message": `No dog matches breed ${req.params.breed}.` });
    }
    res.json(dog);
}

const getDogLocation = async (req, res) => {
    if (!req?.params?.location) return res.status(400).json({ 'message': 'Dog location required.' });

    const dog = await Dog.find({ location: req.params.location }).exec();
    if (!dog) {
        return res.status(204).json({ "message": `No dog matches location ${req.params.location}.` });
    }
    res.json(dog);
}



module.exports = {
    getAllDogs,
    createNewDog,
    updateDog,
    deleteDog,
    getDogID,
  getDogName,
  getDogBreed,
  getDogLocation
}