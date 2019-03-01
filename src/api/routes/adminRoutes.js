'use strict';

module.exports = function(app) {
    const adminController = require('../controllers/adminControllers');

    app.route('/admin/auteurs')
        .get(adminController.getAuteursAdmin)
        .post(adminController.addAuteur);

    app.route('/admin/dessinateurs')
        .get(adminController.getDessinateursAdmin)
        .post(adminController.addDessinateur);

    app.route('/admin/maisonEditions')
        .get(adminController.getMaisonEditionsAdmin)
        .post(adminController.addMaisonEditions);

    app.route('/admin/genres')
        .get(adminController.getGenresAdmin)
        .post(adminController.addGenre);

    app.route('/admin/scenaristes')
        .get(adminController.getScenaristesAdmin)
        .post(adminController.addScenariste);

    app.route('/admin/series')
        .get(adminController.getSeriesAdmin)
        .post(adminController.addSerie);

};
