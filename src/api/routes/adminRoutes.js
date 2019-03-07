'use strict';

module.exports = function(app) {
    const adminController = require('../controllers/adminControllers');

    app.route('/admin/auteurs')
        .get(adminController.getAuteursAdmin)
        .post(adminController.addAuteur)
        .delete(adminController.deleteAuteur);

    app.route('/admin/dessinateurs')
        .get(adminController.getDessinateursAdmin)
        .post(adminController.addDessinateur)
        .delete(adminController.deleteDessinateur);

    app.route('/admin/maisonEditions')
        .get(adminController.getMaisonEditionsAdmin)
        .post(adminController.addMaisonEditions)
        .delete(adminController.deleteMaisonEditions);

    app.route('/admin/genres')
        .get(adminController.getGenresAdmin)
        .post(adminController.addGenre)
        .delete(adminController.deleteGenre);

    app.route('/admin/scenaristes')
        .get(adminController.getScenaristesAdmin)
        .post(adminController.addScenariste)
        .delete(adminController.deleteScenariste);

    app.route('/admin/series')
        .get(adminController.getSeriesAdmin)
        .post(adminController.addSerie)
        .delete(adminController.deleteSerie);

};
