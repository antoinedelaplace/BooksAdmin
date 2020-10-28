'use strict';

module.exports = function(app) {
    const statsController = require('../controllers/statsControllers');

    app.route('/api/stats')
        .get(statsController.getAllStats);

    app.route('/api/stats/auteurs')
        .get(statsController.getAuteursStats);

    app.route('/api/stats/dessinateurs')
        .get(statsController.getDessinateursStats);

    app.route('/api/stats/editionsOriginales')
        .get(statsController.getEditionsOriginalesStats);

    app.route('/api/stats/genres')
        .get(statsController.getGenresStats);

    app.route('/api/stats/maisonEditions')
        .get(statsController.getMaisonEditionsStats);

    app.route('/api/stats/reeditions')
        .get(statsController.getReeditionsStats);

    app.route('/api/stats/scenaristes')
        .get(statsController.getScenaristesStats);

    app.route('/api/stats/series')
        .get(statsController.getSeriesStats);

};
