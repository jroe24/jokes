const jokesController = require('../controllers/jokes.controller');

module.exports = (app) => {
    app.get("/api/jokes", jokesController.getJokes);
    app.get("/api/jokes/:_id", jokesController.findJoke);
    app.post("/api/jokes", jokesController.createJoke);
    app.put("/api/jokes/:_id", jokesController.updateJoke);
    app.delete("/api/jokes/:_id", jokesController.deleteJoke);
}