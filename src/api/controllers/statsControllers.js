'use strict';
const sql = require('../connexion');


exports.getAllStats = (req, res) => {
    const stats = {};
    sql.query('select count(*) as nombreBD from( select id_titre_edition from titre_edition a union all select id_titre_reedition from titre_reedition b) c ',
        function (error, results) {
            if (error) throw error;
            stats.nbBandesDessinees = results[0].nombreBD;

            sql.query('select count(*) AS nombreBD from TITRE_BD',
                function (error, results) {
                    if (error) throw error;
                    stats.nbTitres = results[0].nombreBD;
                    sql.query('select count(distinct id_genre) AS nombreBD from TITRE_BD',
                        function (error, results) {
                            if (error) throw error;
                            stats.nbGenres = results[0].nombreBD;
                            sql.query('select count(distinct id_serie) AS nombreBD from TITRE_BD',
                                function (error, results) {
                                    if (error) throw error;
                                    stats.nbSeries = results[0].nombreBD;
                                    sql.query('select count(distinct a.id_auteur) AS nombreBD from TITRE_AUTEUR a, auteur b where a.id_auteur=b.id_auteur',
                                        function (error, results) {
                                            if (error) throw error;
                                            stats.nbCreateurs = results[0].nombreBD;
                                            sql.query('select count(distinct a.id_scenariste) AS nombreBD from TITRE_SCENARISTE a, scenariste b where a.id_scenariste=b.id_scenariste',
                                                function (error, results) {
                                                    if (error) throw error;
                                                    stats.nbScenaristes = results[0].nombreBD;
                                                    sql.query('select count(distinct a.id_dessinateur) AS nombreBD from TITRE_DESSINATEUR a, dessinateur b where a.id_dessinateur=b.id_dessinateur',
                                                        function (error, results) {
                                                            if (error) throw error;
                                                            stats.nbDessinateurs = results[0].nombreBD;
                                                            sql.query('select count(distinct a.id_maisonedition) AS nombreBD from ( select distinct d.id_maisonedition from TITRE_EDITION d, maisonedition e where d.id_maisonedition=e.id_maisonedition UNION select distinct f.id_maisonedition from TITRE_REEDITION f, maisonedition g where f.id_maisonedition=g.id_maisonedition) a ',
                                                                function (error, results) {
                                                                    if (error) throw error;
                                                                    stats.nbMaisonsEditions = results[0].nombreBD;
                                                                    sql.query('select count(distinct d.id_titre_edition) AS nombreBD from TITRE_EDITION d, maisonedition e where d.id_maisonedition=e.id_maisonedition',
                                                                        function (error, results) {
                                                                            if (error) throw error;
                                                                            stats.nbPremieresEditions = results[0].nombreBD;
                                                                            sql.query('select count(distinct d.id_titre_reedition) AS nombreBD from TITRE_REEDITION d, maisonedition e where d.id_maisonedition=e.id_maisonedition ',
                                                                                function (error, results) {
                                                                                    if (error) throw error;
                                                                                    stats.nbReditions = results[0].nombreBD;
                                                                                    res.send(JSON.stringify({"status": 200, "error": null, "response": stats}));
                                                                                });
                                                                        });
                                                                });
                                                        });
                                                });
                                        });
                                });
                        });
                });
        });

};

exports.getSeriesStats = (req, res) => {
    sql.query('select count(*) AS nombre, Nom_serie AS nom from TITRE_BD a, serie b where a.id_serie=b.id_serie  group by Nom_serie',
        function (error, results) {
            if (error) throw error;

            res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
        }
    );
};

exports.getScenaristesStats = (req, res) => {
    sql.query('select count(*) AS nombre, Nom_scenariste AS nom from TITRE_SCENARISTE a, scenariste b where a.id_scenariste=b.id_scenariste  group by Nom_scenariste',
        function (error, results) {
            if (error) throw error;

            res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
        }
    );
};

exports.getReeditionsStats = (req, res) => {
    sql.query('select count(*) AS nombre, b.Nom_maisonedition AS nom from TITRE_REEDITION a , maisonedition b where a.id_maisonedition=b.id_maisonedition group by b.Nom_maisonedition',
        function (error, results) {
            if (error) throw error;

            res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
        }
    );
};

exports.getMaisonEditionsStats = (req, res) => {
    sql.query('select count(a.id_maisonedition) AS nombre, b.Nom_maisonedition AS nom from ( select  id_maisonedition from TITRE_EDITION UNION ALL select  id_maisonedition from TITRE_REEDITION) a , maisonedition b where a.id_maisonedition=b.id_maisonedition group by b.Nom_maisonedition',
        function (error, results) {
            if (error) throw error;

            res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
        }
    );
};

exports.getGenresStats = (req, res) => {
    sql.query('select count(*) AS nombre, Nom_genre AS nom from TITRE_BD a, genre b where a.id_genre=b.id_genre  group by Nom_genre',
        function (error, results) {
            if (error) throw error;

            res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
        }
    );
};

exports.getEditionsOriginalesStats = (req, res) => {
    sql.query('select count(*) AS nombre, b.Nom_maisonedition AS nom from TITRE_EDITION a , maisonedition b where a.id_maisonedition=b.id_maisonedition group by b.Nom_maisonedition',
        function (error, results) {
            if (error) throw error;

            res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
        }
    );
};

exports.getDessinateursStats = (req, res) => {
    sql.query('select count(*) AS nombre, Nom_dessinateur AS nom from TITRE_DESSINATEUR a, dessinateur b where a.id_dessinateur=b.id_dessinateur  group by Nom_dessinateur',
        function (error, results) {
            if (error) throw error;

            res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
        }
    );
};

exports.getAuteursStats = (req, res) => {
    sql.query('select count(*) AS nombre, Nom_auteur AS nom from TITRE_AUTEUR a, auteur b where a.id_auteur=b.id_auteur  group by Nom_auteur',
        function (error, results) {
            if (error) throw error;

            res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
        }
    );
};
