'use strict';
const sql = require('../connexion');

exports.getSeriesAdmin = (req, res) => {
    sql.query('select id_serie AS id, Nom_serie AS name, Comment_serie AS description from SERIE ORDER BY upper(Nom_serie) ASC',
        function (error, results) {
            if (error) throw error;

            res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
        }
    );
};

exports.getScenaristesAdmin = (req, res) => {
    sql.query('select id_scenariste AS id, Nom_scenariste AS name, Comment_scenariste AS description from SCENARISTE ORDER BY upper(Nom_scenariste) ASC',
        function (error, results) {
            if (error) throw error;

            res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
        }
    );
};

exports.getMaisonEditionsAdmin = (req, res) => {
    sql.query('select id_maisonedition AS id, Nom_maisonedition AS name, Comment_maisonedition AS description from MAISONEDITION ORDER BY upper(Nom_maisonedition) ASC',
        function (error, results) {
            if (error) throw error;

            res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
        }
    );
};

exports.getGenresAdmin = (req, res) => {
    sql.query('select id_genre AS id, Nom_genre AS name, Comment_genre AS description from GENRE ORDER BY Nom_genre ASC',
        function (error, results) {
            if (error) throw error;

            res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
        }
    );
};

exports.getDessinateursAdmin = (req, res) => {
    sql.query('select id_dessinateur AS id, Nom_dessinateur AS name, Comment_dessinateur AS description from DESSINATEUR ORDER BY upper(Nom_dessinateur) ASC',
        function (error, results) {
            if (error) throw error;

            res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
        }
    );
};

exports.getAuteursAdmin = (req, res) => {
    sql.query('select id_auteur AS id, Nom_auteur AS name, Comment_auteur AS description from AUTEUR ORDER BY upper(Nom_auteur) ASC',
        function (error, results) {
            if (error) throw error;

            res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
        }
    );
};
