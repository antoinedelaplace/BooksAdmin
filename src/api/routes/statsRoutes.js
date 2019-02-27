'use strict';

module.exports = function(app) {
    const statsController = require('../controllers/statsControllers');

    app.route('/stats')
        .get(statsController.getAllStats);

    app.route('/stats/auteurs')
        .get(statsController.getAuteursStats);

    app.route('/stats/dessinateurs')
        .get(statsController.getDessinateursStats);

    app.route('/stats/editionsOriginales')
        .get(statsController.getEditionsOriginalesStats);

    app.route('/stats/genres')
        .get(statsController.getGenresStats);

    app.route('/stats/maisonEditions')
        .get(statsController.getMaisonEditionsStats);

    app.route('/stats/reeditions')
        .get(statsController.getReeditionsStats);

    app.route('/stats/scenaristes')
        .get(statsController.getScenaristesStats);

    app.route('/stats/series')
        .get(statsController.getSeriesStats);

};
