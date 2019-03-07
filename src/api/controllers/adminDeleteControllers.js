'use strict';
const sql = require('../connexion');

exports.deleteAuteur = (req, res) => {
    let auteur = {};
    auteur.id_auteur = req.query.id;
    sql.query('select count(*) AS nbTitres from TITRE_AUTEUR where id_auteur = ' + auteur.id_auteur,
        function (error, results) {
            if (error) throw error;
            if (results[0].nbTitres && results[0].nbTitres > 0) {
                res.send(JSON.stringify({"status": 402, "error": "L'auteur est encore lié à des Bandes Dessinées. Vous ne pouvez pas le supprimer!"}));
            }
            else {
                sql.query('DELETE FROM AUTEUR WHERE id_auteur = ' + auteur.id_auteur, function (error, results) {
                    if (error) throw error;
                    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
                });
            }
        }
    );
};

exports.deleteDessinateur = (req, res) => {
    let dessinateur = {};
    dessinateur.id_dessinateur = req.query.id;
    sql.query('select count(*) AS nbTitres from TITRE_DESSINATEUR where id_dessinateur = ' + dessinateur.id_dessinateur,
        function (error, results) {
            if (error) throw error;
            if (results[0].nbTitres && results[0].nbTitres > 0) {
                res.send(JSON.stringify({"status": 402, "error": "Le dessinateur est encore lié à des Bandes Dessinées. Vous ne pouvez pas le supprimer!"}));
            }
            else {
                sql.query('DELETE FROM DESSINATEUR WHERE id_dessinateur = ' + dessinateur.id_dessinateur, function (error, results) {
                    if (error) throw error;
                    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
                });
            }
        }
    );
};

exports.deleteMaisonEditions = (req, res) => {
    let edition = {};
    edition.id_maisonedition = req.query.id;
    sql.query('select count(a.id_maisonedition) AS nbTitres from ' +
        '( select id_maisonedition from TITRE_EDITION where id_maisonedition = ' + edition.id_maisonedition +
        ' UNION select id_maisonedition from TITRE_REEDITION where id_maisonedition = ' + edition.id_maisonedition + ') a',
        function (error, results) {
            if (error) throw error;
            if (results[0].nbTitres && results[0].nbTitres > 0) {
                res.send(JSON.stringify({"status": 402, "error": "La maison d'édition est encore liée à des Bandes Dessinées. Vous ne pouvez pas le supprimer!"}));
            }
            else {
                sql.query("DELETE FROM MAISONEDITION WHERE id_maisonedition = " + edition.id_maisonedition, function (error, results) {
                    if (error) throw error;
                    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
                });
            }
        }
    );
};

exports.deleteGenre = (req, res) => {
    let genre = {};
    genre.id_genre = req.query.id;
    sql.query('select count(*) as nbTitres from TITRE_BD where id_genre= ' + genre.id_genre,
        function (error, results) {
            if (error) throw error;
            if (results[0].nbTitres && results[0].nbTitres > 0) {
                res.send(JSON.stringify({"status": 402, "error": "Le genre est encore lié à des Bandes Dessinées. Vous ne pouvez pas le supprimer!"}));
            }
            else {
                sql.query("DELETE FROM GENRE WHERE id_genre = " + genre.id_genre, function (error, results) {
                    if (error) throw error;
                    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
                });
            }
        }
    );
};

exports.deleteScenariste = (req, res) => {
    let scenariste = {};
    scenariste.id_scenariste = req.query.id;
    sql.query('select count(*) as nbTitres from TITRE_SCENARISTE where id_scenariste= ' + scenariste.id_scenariste,
        function (error, results) {
            if (error) throw error;
            if (results[0].nbTitres && results[0].nbTitres > 0) {
                res.send(JSON.stringify({"status": 402, "error": "Le scenariste est encore lié à des Bandes Dessinées. Vous ne pouvez pas le supprimer!"}));
            }
            else {
                sql.query("DELETE FROM SCENARISTE WHERE id_scenariste = " + scenariste.id_scenariste, function (error, results) {
                    if (error) throw error;
                    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
                });
            }
        }
    );
};

exports.deleteSerie = (req, res) => {
    let serie = {};
    serie.id_serie = req.query.id;
    sql.query('select count(*) AS nbTitres from TITRE_BD where id_serie = ' + serie.id_serie,
        function (error, results) {
            if (error) throw error;
            if (results[0].nbTitres && results[0].nbTitres > 0) {
                res.send(JSON.stringify({"status": 402, "error": "La série est encore liée à des Bandes Dessinées. Vous ne pouvez pas le supprimer!"}));
            }
            else {
                sql.query("DELETE FROM SERIE WHERE id_serie = " + serie.id_serie, function (error, results) {
                    if (error) throw error;
                    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
                });
            }
        }
    );
};
