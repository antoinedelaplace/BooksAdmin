'use strict';

module.exports = function(app) {
    const adminGetController = require('../controllers/adminGetControllers');
    const adminDeleteController = require('../controllers/adminDeleteControllers');
    const adminEditController = require('../controllers/adminEditControllers');
    const adminAddController = require('../controllers/adminAddControllers');

    app.route('/admin/auteurs')
        .get(adminGetController.getAuteursAdmin)
        .post(adminAddController.addAuteur)
        .delete(adminDeleteController.deleteAuteur)
        .patch(adminEditController.patchAuteur);

    app.route('/admin/dessinateurs')
        .get(adminGetController.getDessinateursAdmin)
        .post(adminAddController.addDessinateur)
        .delete(adminDeleteController.deleteDessinateur)
        .patch(adminEditController.patchDessinateur);

    app.route('/admin/maisonEditions')
        .get(adminGetController.getMaisonEditionsAdmin)
        .post(adminAddController.addMaisonEditions)
        .delete(adminDeleteController.deleteMaisonEditions)
        .patch(adminEditController.patchMaisonEditions);

    app.route('/admin/genres')
        .get(adminGetController.getGenresAdmin)
        .post(adminAddController.addGenre)
        .delete(adminDeleteController.deleteGenre)
        .patch(adminEditController.patchGenre);

    app.route('/admin/scenaristes')
        .get(adminGetController.getScenaristesAdmin)
        .post(adminAddController.addScenariste)
        .delete(adminDeleteController.deleteScenariste)
        .patch(adminEditController.patchScenariste);

    app.route('/admin/series')
        .get(adminGetController.getSeriesAdmin)
        .post(adminAddController.addSerie)
        .delete(adminDeleteController.deleteSerie)
        .patch(adminEditController.patchSerie);

};
