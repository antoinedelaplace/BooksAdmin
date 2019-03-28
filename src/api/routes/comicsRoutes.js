'use strict';

module.exports = function(app) {
    const comicsController = require('../controllers/comicsControllers');

    app.route('/comics')
        .get(comicsController.getAllComics)
        .post(comicsController.addComics)
        .delete(comicsController.deleteComics);

    app.route('/comics/:id')
        .get(comicsController.getComics)
        .patch(comicsController.patchComics);
};
