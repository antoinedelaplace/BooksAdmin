'use strict';
const sql = require('../connexion');

exports.getAllComics = (req, res) => {
    sql.query('select bd.titre AS name, genre.Nom_genre AS genre, serie.Nom_serie, auteur.id_auteur AS id_auteur, ' +
              'scenariste.id_scenariste AS id_scenariste, dessinateur.id_dessinateur AS id_dessinateur ' +
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
