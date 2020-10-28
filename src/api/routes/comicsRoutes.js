'use strict';

module.exports = function(app) {
    const comicsController = require('../controllers/comicsControllers');

    app.route('/api/comics')
        .get(comicsController.getAllComics)
        .post(comicsController.addComics)
        .delete(comicsController.deleteComics);

    app.route('/api/comics/:id')
        .get(comicsController.getComics)
        .patch(comicsController.patchComics);
};
