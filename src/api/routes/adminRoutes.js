'use strict';

module.exports = function(app) {
    const adminController = require('../controllers/adminControllers');

    app.route('/admin/auteurs')
        .get(adminController.getAuteursAdmin);

    app.route('/admin/dessinateurs')
        .get(adminController.getDessinateursAdmin);

    app.route('/admin/maisonEditions')
        .get(adminController.getMaisonEditionsAdmin);

    app.route('/admin/genres')
        .get(adminController.getGenresAdmin);

    app.route('/admin/scenaristes')
        .get(adminController.getScenaristesAdmin);

    app.route('/admin/series')
        .get(adminController.getSeriesAdmin);

};
