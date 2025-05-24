// config/db.js 
/* Ce fichier et dédié à la connexion à la base de donnés */

// déclarer une variable qui récupère le module de mysql
const mysql = require('mysql2');

// créer la connexion à la base de données 
// La méthode createConnection est utilisée pour établir une connexion avec ta base de données MySQL. Cette méthode est utilisée pour créer une instance de connexion. Elle prépare tout ce qu'il faut pour se connecter à la base de données, mais ne se connecte pas encore réellement.
const connection = mysql.createConnection({
    host: 'localhost', //l'adresse du serveur MySQL
    user: 'root', //utilisateur Mysql
    password: '',
    database: 'dreams_pearls' //nom de la base données
});

// Tester la connexion 
// La méthode connect de mysql2 est utilisée pour établir la connexion et s'assurer que tout fonctionne correctement. 
// Elle prend une fonction de rappel (callback) pour gérer les erreurs ou confirmer la réussite de la connexion. la méthode connect permet d'établir la connexion avec le serveur MySql
connection.connect((err)=>{
    if (err) {
        console.error('Erreur de connexion : ' + err.stack);
        return;
    }
    console.log('Connecté à la base de données avec l\'ID' + connection.threadId);
    
});

module.exports = connection;