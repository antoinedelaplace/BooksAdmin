'use strict';
const sql = require('../connexion');

exports.patchAuteur = (req, res) => {
    if (!req.body.id) {
        res.send(JSON.stringify({"status": 402, "error": "L'id n'est pas valide"}));
    }
    let Auteur = {};
    Auteur.Nom_auteur = req.body.name;
    Auteur.Comment_auteur = req.body.description;
    sql.query("UPDATE AUTEUR SET ? WHERE id_auteur = " + req.body.id, Auteur, function (error, results) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
};

exports.patchDessinateur = (req, res) => {
    if (!req.body.id) {
        res.send(JSON.stringify({"status": 402, "error": "L'id n'est pas valide"}));
    }
    let Dessinateur = {};
    Dessinateur.Nom_dessinateur = req.body.name ? req.body.name : '';
    Dessinateur.Comment_dessinateur = req.body.description ? req.body.description : '';
    sql.query("UPDATE DESSINATEUR set ? WHERE id_dessinateur = " + req.body.id, Dessinateur, function (error, results) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
};

exports.patchMaisonEditions = (req, res) => {
    if (!req.body.id) {
        res.send(JSON.stringify({"status": 402, "error": "L'id n'est pas valide"}));
    }
    let MaisonEditions = {};
    MaisonEditions.Nom_maisonedition = req.body.name ? req.body.name : '';
    MaisonEditions.Comment_maisonedition = req.body.description ? req.body.description : '';
    sql.query("UPDATE MAISONEDITION set ? WHERE id_maisonedition = " + req.body.id, MaisonEditions, function (error, results) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
};

exports.patchGenre = (req, res) => {
    if (!req.body.id) {
        res.send(JSON.stringify({"status": 402, "error": "L'id n'est pas valide"}));
    }
    let Genre = {};
    Genre.Nom_genre = req.body.name ? req.body.name : '';
    Genre.Comment_genre = req.body.description ? req.body.description : '';
    sql.query("UPDATE GENRE set ? WHERE id_genre = " + req.body.id, Genre, function (error, results) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
};

exports.patchScenariste = (req, res) => {
    if (!req.body.id) {
        res.send(JSON.stringify({"status": 402, "error": "L'id n'est pas valide"}));
    }
    let Scenariste = {};
    Scenariste.Nom_scenariste = req.body.name ? req.body.name : '';
    Scenariste.Comment_scenariste = req.body.description ? req.body.description : '';
    sql.query("UPDATE SCENARISTE set ? WHERE id_scenariste = " + req.body.id, Scenariste, function (error, results) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
};

exports.patchSerie = (req, res) => {
    if (!req.body.id) {
        res.send(JSON.stringify({"status": 402, "error": "L'id n'est pas valide"}));
    }
    let Serie = {};
    Serie.Nom_serie = req.body.name ? req.body.name : '';
    Serie.Comment_serie = req.body.description ? req.body.description : '';
    sql.query("UPDATE SERIE set ? WHERE id_serie = " + req.body.id, Serie, function (error, results) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
};
