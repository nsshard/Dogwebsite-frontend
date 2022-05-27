const Dog = require('../model/Dog');

/**
 * Get all dogs so it can be displayed in dog browsers
 * 
 */
const getAllDogs = async (req, res) => {
    const dogs = await Dog.find();
    if (!dogs) return res.status(204).json({ 'message': 'No dogs found.' });
    res.json(dogs);
}

/**
 * Create new dog
 * 
 */
const createNewDog = async (req, res) => {

/**
 * Checks if the fields exist
 * 
 */
    if (!req?.body?.name || !req?.body?.breed || !req?.body?.location || !req?.body?.img) {
 /**
 * If not then output the message that one or more field is lacking
 * 
 */
        return res.status(400).json({ 'message': 'One or more fields are lacking' });
    }

    /**
 * Try to create a dog using the request body's information
 * 
 */
try {
        const result = await Dog.create({
           name: req.body.name,
           breed: req.body.breed,
           location: req.body.location,
           img: req.body.img
        });
/**
 * Sucessful creation is given 201, else it display console error
 * 
 */
        res.status(201).json(result);
    } catch (err) {
        console.error(err);
    }
}

/**
 * Update aka modify a dog
 * 
 */
const updateDog = async (req, res) => {
/**
 * Requires a valid ID
 * 
 */
    if (!req?.body?.id) {
        return res.status(400).json({ 'message': 'ID parameter is required.' });
    }
/**
 * Find a dog by the ID, display error message if a dog does not match the iD
 * 
 */
    const dog = await Dog.findOne({ _id: req.body.id }).exec();
    if (!dog) {
        return res.status(204).json({ "message": `No dog matches ID ${req.body.id}.` });
    }
/**
 * Scans for body information. If there is information on one or more field, then that would update the dog information on these fields
 * 
 */
    if (req.body?.name) dog.name = req.body.name;
    if (req.body?.breed) dog.breed = req.body.breed;
    if (req.body?.location) dog.location = req.body.location;
    if (req.body?.img) dog.img = req.body.img;
/**
 * Save updated dog info to the database
 * 
 */
    const result = await dog.save();
    res.json(result);
}

/**
 * Delete a dog
 * 
 */
const deleteDog = async (req, res) => {
/**
 * See if ID is inputted by the user
 * 
 */
    if (!req?.body?.id) {
        return res.status(400).json({ 'message': 'ID parameter is required.' });
    }
/**
 * Find dog by ID
 * 
 */
    const dog = await Dog.findOne({ _id: req.body.id }).exec();
    if (!dog) {
        return res.status(204).json({ "message": `No dog matches ID ${req.body.id}.` });
    }
    /**
 * If dog matches ID, then delete it
 * 
 */
    const result = await dog.deleteOne(); //{ _id: req.body.id }
    res.json(result);
}

/**
 * Get dog by ID, searching function for the public
 * 
 */
const getDogID = async (req, res) => {
    if (!req?.params?.id) return res.status(400).json({ 'message': 'Dog ID required.' });

    const dog = await Dog.find({ _id: req.params.id }).exec();
    if (!dog) {
        return res.status(204).json({ "message": `No dog matches ID ${req.params.id}.` });
    }
    res.json(dog);
}

/**
 * Get dog by name, searching function for the public
 * 
 */
const getDogName = async (req, res) => {
    if (!req?.params?.name) return res.status(400).json({ 'message': 'Dog Name required.' });

    const dog = await Dog.find({ name: req.params.name }).exec();
    if (!dog) {
        return res.status(204).json({ "message": `No dog matches Name ${req.params.name}.` });
    }
    res.json(dog);
}

/**
 * Get dog by breed, searching function for the public
 * 
 */
const getDogBreed = async (req, res) => {
    if (!req?.params?.breed) return res.status(400).json({ 'message': 'Dog Breed required.' });

    const dog = await Dog.find({ breed: req.params.breed }).exec();
    if (!dog) {
        return res.status(204).json({ "message": `No dog matches breed ${req.params.breed}.` });
    }
    res.json(dog);
}

/**
 * Get dog by location, searching function for the public
 * 
 */
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