'use strict';
const sql = require('../connexion');

exports.addAuteur = (req, res) => {
    let newAuteur = {};
    newAuteur.Nom_auteur = req.body.name ? req.body.name : '';
    newAuteur.Comment_auteur = req.body.description ? req.body.description : '';
    sql.query("INSERT INTO AUTEUR set ?", newAuteur, function (error, results) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
};

exports.addDessinateur = (req, res) => {
    let newDessinateur = {};
    newDessinateur.Nom_dessinateur = req.body.name ? req.body.name : '';
    newDessinateur.Comment_dessinateur = req.body.description ? req.body.description : '';
    sql.query("INSERT INTO DESSINATEUR set ?", newDessinateur, function (error, results) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
};

exports.addMaisonEditions = (req, res) => {
    let newMaisonEditions = {};
    newMaisonEditions.Nom_maisonedition = req.body.name ? req.body.name : '';
    newMaisonEditions.Comment_maisonedition = req.body.description ? req.body.description : '';
    sql.query("INSERT INTO MAISONEDITION set ?", newMaisonEditions, function (error, results) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
};

exports.addGenre = (req, res) => {
    let newGenre = {};
    newGenre.Nom_genre = req.body.name ? req.body.name : '';
    newGenre.Comment_genre = req.body.description ? req.body.description : '';
    sql.query("INSERT INTO GENRE set ?", newGenre, function (error, results) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
};

exports.addScenariste = (req, res) => {
    let newScenariste = {};
    newScenariste.Nom_scenariste = req.body.name ? req.body.name : '';
    newScenariste.Comment_scenariste = req.body.description ? req.body.description : '';
    sql.query("INSERT INTO SCENARISTE set ?", newScenariste, function (error, results) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
};

exports.addSerie = (req, res) => {
    let newSerie = {};
    newSerie.Nom_serie = req.body.name ? req.body.name : '';
    newSerie.Comment_serie = req.body.description ? req.body.description : '';
    sql.query("INSERT INTO SERIE set ?", newSerie, function (error, results) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
};
