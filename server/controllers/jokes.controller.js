const Jokes = require('../models/jokes.model');

// Get all jokes
module.exports.getJokes = (req, res) => {
    Joke.getAllJokes()
        .then(allJokes => res.json({ jokes: allJokes }))
        .catch(err => res.json({ message: "Error...error...error...", error: err }));
};

// Find joke by ID
module.exports.findJoke = (req, res) => {
	Joke.findJokeByID({ _id: req.params.id })
		.then(singleJoke => res.json({ joke: singleJoke }))
		.catch(err => res.json({ message: "Error...error...error...", error: err }));
};

// Create joke
module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({ joke: newJoke }))
        .catch(err => res.json({ message: "Error...error...error...", error: err }));
};

// Update joke
module.exports.updateJoke = (req, res) => {
    Joke.updateJokeByID({ _id: req.params.id }, req.body, { new: true })
        .then(updatedJoke => res.json({ user: updatedJoke }))
        .catch(err => res.json({ message: "Error...error...error...", error: err }));
};

//Delete joke
module.exports.deleteJoke = (req, res) => {
    Joke.deleteJokeById({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Error...error...error...", error: err }));
};