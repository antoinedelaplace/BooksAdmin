'use strict';
const sql = require('../connexion');

exports.getAllComics = (req, res) => {
    sql.query('select bd.id_titre_bd AS id, bd.titre AS name, genre.Nom_genre AS genre, serie.Nom_serie AS serie, ' +
        'auteur.id_auteur AS id_auteur, scenariste.id_scenariste AS id_scenariste, dessinateur.id_dessinateur AS id_dessinateur ' +
        'from TITRE_BD AS bd ' +
        'LEFT JOIN genre AS genre ON bd.id_genre = genre.id_genre ' +
        'LEFT JOIN serie AS serie ON bd.id_serie = serie.id_serie ' +
        'LEFT JOIN titre_auteur AS auteur ON auteur.id_titre_bd = bd.id_titre_bd  ' +
        'LEFT JOIN titre_scenariste AS scenariste ON scenariste.id_titre_bd = bd.id_titre_bd  ' +
        'LEFT JOIN titre_dessinateur AS dessinateur ON dessinateur.id_titre_bd = bd.id_titre_bd  ' +
        'ORDER BY bd.titre ASC',
        function (error, results) {
            if (error) throw error;

            res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
        }
    );
};

exports.getComics = (req, res) => {
    sql.query('select bd.id_titre_bd AS id, bd.titre AS name, bd.Comment_BD AS comments, bd.id_genre AS genre, bd.id_serie AS serie, ' +
        'auteur.id_auteur AS id_auteur, scenariste.id_scenariste AS id_scenariste, dessinateur.id_dessinateur AS id_dessinateur, ' +
        'edition.id_maisonedition AS maisonEditionOriginale, edition.date_sortie AS dateSortieEditionOriginale, edition.date_impression AS dateImpressionOriginale, edition.no_isbn AS isbnOriginale, edition.dedicace AS dedicaceOriginale, ' +
        'reedition.id_maisonedition AS maisonEditionReedition, reedition.date_sortie AS dateSortieEditionReedition, reedition.date_impression AS dateImpressionReedition, reedition.no_isbn AS isbnReedition, reedition.dedicace AS dedicaceReedition, ' +
        'pret.nom AS nomPret, pret.date_debut AS dateDebutPret, pret.date_fin AS dateFinPret ' +
        'from TITRE_BD AS bd ' +
        'LEFT JOIN titre_auteur AS auteur ON auteur.id_titre_bd = bd.id_titre_bd  ' +
        'LEFT JOIN titre_scenariste AS scenariste ON scenariste.id_titre_bd = bd.id_titre_bd  ' +
        'LEFT JOIN titre_dessinateur AS dessinateur ON dessinateur.id_titre_bd = bd.id_titre_bd  ' +
        'LEFT JOIN titre_edition AS edition ON edition.id_titre_bd = bd.id_titre_bd ' +
        'LEFT JOIN titre_reedition AS reedition ON reedition.id_titre_bd = bd.id_titre_bd ' +
        'LEFT JOIN pret ON pret.id_titre_bd = bd.id_titre_bd ' +
        'WHERE bd.id_titre_bd = ' + req.params.id + ' ' +
        'ORDER BY bd.titre ASC',
        function (error, results) {
            if (error) throw error;

            res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
        }
    );
};

exports.deleteComics = (req, res) => {
    sql.query('DELETE FROM TITRE_BD WHERE id_titre_bd = '+ req.query.id, function (error, results) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
};

exports.addComics = (req, res) => {
    let newComics = {};
    newComics.titre = req.body.name;
    if (req.body.genre && req.body.genre !== '')
        newComics.id_genre = req.body.genre;
    if (req.body.serie && req.body.serie !== '')
        newComics.id_serie = req.body.serie;
    if (req.body.comments && req.body.comments !== '')
        newComics.Comment_BD = req.body.comments;

    sql.query("INSERT INTO TITRE_BD set ?", newComics, function (error, results) {
        if (error) throw error;

        if (req.body.auteur && req.body.auteur !== '') {
            let titre_auteur = {};
            titre_auteur.id_titre_bd = results.insertId;
            titre_auteur.id_auteur = req.body.auteur;

            sql.query("INSERT INTO TITRE_AUTEUR set ?", titre_auteur, function (error, results) {
                if (error) throw error;
            });
        }
        if (req.body.dessinateur && req.body.dessinateur !== '') {
            let titre_dessinateur = {};
            titre_dessinateur.id_titre_bd = results.insertId;
            titre_dessinateur.id_dessinateur = req.body.dessinateur;

            sql.query("INSERT INTO TITRE_DESSINATEUR set ?", titre_dessinateur, function (error, results) {
                if (error) throw error;
            });
        }
        if (req.body.scenariste && req.body.scenariste !== '') {
            let titre_scenariste = {};
            titre_scenariste.id_titre_bd = results.insertId;
            titre_scenariste.id_scenariste = req.body.scenariste;

            sql.query("INSERT INTO TITRE_SCENARISTE set ?", titre_scenariste, function (error, results) {
                if (error) throw error;
            });
        }
        if (req.body.maisonEditionOriginale && req.body.maisonEditionOriginale !== '') {
            let titre_edition = {};
            titre_edition.id_titre_bd = results.insertId;
            titre_edition.id_maisonedition = req.body.maisonEditionOriginale;
            titre_edition.date_sortie = req.body.dateSortieEditionOriginale;
            titre_edition.date_impression = req.body.dateImpressionOriginale;
            titre_edition.no_isbn = req.body.isbnOriginale;
            titre_edition.dedicace = req.body.dedicaceOriginale;

            sql.query("INSERT INTO TITRE_EDITION set ?", titre_edition, function (error, results) {
                if (error) throw error;
            });
        }
        if (req.body.maisonEditionReedition && req.body.maisonEditionReedition !== '') {
            let titre_reedition = {};
            titre_reedition.id_titre_bd = results.insertId;
            titre_reedition.id_maisonedition = req.body.maisonEditionReedition;
            titre_reedition.date_sortie = req.body.dateSortieEditionReedition;
            titre_reedition.date_impression = req.body.dateImpressionReedition;
            titre_reedition.no_isbn = req.body.isbnReedition;
            titre_reedition.dedicace = req.body.dedicaceReedition;

            sql.query("INSERT INTO TITRE_REEDITION set ?", titre_reedition, function (error, results) {
                if (error) throw error;
            });
        }

        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
};

exports.patchComics = (req, res) => {
    let newComics = {};
    newComics.titre = req.body.name;
    if (req.body.genre && req.body.genre !== '')
        newComics.id_genre = req.body.genre;
    if (req.body.serie && req.body.serie !== '')
        newComics.id_serie = req.body.serie;
    if (req.body.comments && req.body.comments !== '')
        newComics.Comment_BD = req.body.comments;

    sql.query("UPDATE TITRE_BD set ? WHERE id_titre_bd=" + req.body.id, newComics, function (error, results) {
        if (error) throw error;

        if (req.body.auteur && req.body.auteur !== '') {
            let titre_auteur = {};
            titre_auteur.id_auteur = req.body.auteur;

            sql.query("SELECT * FROM TITRE_AUTEUR WHERE id_titre_bd=" + req.body.id, function (error, results) {
                if (results && results.length > 0) {
                    sql.query("UPDATE TITRE_AUTEUR set ? WHERE id_titre_bd=" + req.body.id, titre_auteur, function (error, results) {
                       if (error) throw error;
                   });
               } else {
                   titre_auteur.id_titre_bd = req.body.id;
                    sql.query("INSERT INTO TITRE_AUTEUR set ?", titre_auteur, function (error, results) {
                       if (error) throw error;
                   });
               }
            });
        }
        if (req.body.dessinateur && req.body.dessinateur !== '') {
            let titre_dessinateur = {};
            titre_dessinateur.id_dessinateur = req.body.dessinateur;

            sql.query("SELECT * FROM TITRE_DESSINATEUR WHERE id_titre_bd=" + req.body.id, function (error, results) {
                if (results && results.length > 0) {
                    sql.query("UPDATE TITRE_DESSINATEUR set ? WHERE id_titre_bd=" + req.body.id, titre_dessinateur, function (error, results) {
                        if (error) throw error;
                    });
                } else {
                    titre_dessinateur.id_titre_bd = req.body.id;
                    sql.query("INSERT INTO TITRE_DESSINATEUR set ?", titre_dessinateur, function (error, results) {
                        if (error) throw error;
                    });
                }
            });
        }
        if (req.body.scenariste && req.body.scenariste !== '') {
            let titre_scenariste = {};
            titre_scenariste.id_scenariste = req.body.scenariste;

            sql.query("SELECT * FROM TITRE_SCENARISTE WHERE id_titre_bd=" + req.body.id, function (error, results) {
                if (results && results.length > 0) {
                    sql.query("UPDATE TITRE_SCENARISTE set ? WHERE id_titre_bd=" + req.body.id, titre_scenariste, function (error, results) {
                        if (error) throw error;
                    });
                } else {
                    titre_scenariste.id_titre_bd = req.body.id;
                    sql.query("INSERT INTO TITRE_SCENARISTE set ?", titre_scenariste, function (error, results) {
                        if (error) throw error;
                    });
                }
            });
        }
        if (req.body.maisonEditionOriginale && req.body.maisonEditionOriginale !== '') {
            let titre_edition = {};
            titre_edition.id_maisonedition = req.body.maisonEditionOriginale;
            titre_edition.date_sortie = req.body.dateSortieEditionOriginale;
            titre_edition.date_impression = req.body.dateImpressionOriginale;
            titre_edition.no_isbn = req.body.isbnOriginale || '';
            titre_edition.dedicace = req.body.dedicaceOriginale || false;

            sql.query("SELECT * FROM TITRE_EDITION WHERE id_titre_bd=" + req.body.id, function (error, results) {
                if (results && results.length > 0) {
                    sql.query("UPDATE TITRE_EDITION set ? WHERE id_titre_bd=" + req.body.id, titre_edition, function (error, results) {
                        if (error) throw error;
                    });
                } else {
                    titre_edition.id_titre_bd = req.body.id;
                    sql.query("INSERT INTO TITRE_EDITION set ?", titre_edition, function (error, results) {
                        if (error) throw error;
                    });
                }
            });
        }
        if (req.body.maisonEditionReedition && req.body.maisonEditionReedition !== '') {
            let titre_reedition = {};
            titre_reedition.id_maisonedition = req.body.maisonEditionReedition;
            titre_reedition.date_sortie = req.body.dateSortieEditionReedition;
            titre_reedition.date_impression = req.body.dateImpressionReedition;
            titre_reedition.no_isbn = req.body.isbnReedition;
            titre_reedition.dedicace = req.body.dedicaceReedition;

            sql.query("SELECT * FROM TITRE_REEDITION WHERE id_titre_bd=" + req.body.id, function (error, results) {
                if (results && results.length > 0) {
                    sql.query("UPDATE TITRE_REEDITION set ? WHERE id_titre_bd=" + req.body.id, titre_reedition, function (error, results) {
                        if (error) throw error;
                    });
                } else {
                    titre_reedition.id_titre_bd = req.body.id;
                    sql.query("INSERT INTO TITRE_REEDITION set ?", titre_reedition, function (error, results) {
                        if (error) throw error;
                    });
                }
            });
        }

        if (req.body.nomPret && req.body.nomPret !== '') {
            let pret = {};
            pret.nom = req.body.nomPret;
            pret.date_debut = req.body.dateDebutPret;
            pret.date_fin = req.body.dateFinPret;

            sql.query("SELECT * FROM PRET WHERE id_titre_bd=" + req.body.id, function (error, results) {
                if (results && results.length > 0) {
                    sql.query("UPDATE PRET set ? WHERE id_titre_bd=" + req.body.id, pret, function (error, results) {
                        if (error) throw error;
                    });
                } else {
                    pret.id_titre_bd = req.body.id;
                    sql.query("INSERT INTO PRET set ?", pret, function (error, results) {
                        if (error) throw error;
                    });
                }
            });
        }

        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
};
