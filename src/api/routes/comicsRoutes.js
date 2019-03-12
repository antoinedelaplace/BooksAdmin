'use strict';

module.exports = function(app) {
    const comicsController = require('../controllers/comicsControllers');

    app.route('/comics')
        .get(comicsController.getAllComics);

};
