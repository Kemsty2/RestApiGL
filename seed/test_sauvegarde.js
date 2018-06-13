var Sauvegarde = require('../models/Sauvergardes');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Rest_Api');
mongoose.Promise = global.Promise;

var sauvergade = new Sauvegarde({

    email: 'kemsty2@yahoo.fr',
    groupes: [
        {
            nom_groupe: '4GI',
            contacts: [
                {
                    nom_contact: 'moyo',
                    numero: '698901563',
                    date_creation: Date.now()
                },
                {
                    nom_contact:'simo',
                    numero: '698901563',
                    date_creation: Date.now()
                }
            ],
            messages: [
                {
                    contenu: 'Bonsoir, vous êtes invité à prendre part à la semaine du pipo qui se tient le vendredi 25 mai 2018',
                    est_enregistré: false,
                    date_creation: Date.now()
                },
                {
                    contenu: 'Bonsoir, vous êtes invité à prendre part à la semaine du pipo qui se tient le vendredi 25 mai 2018',
                    est_enregistré: false,
                    date_creation: Date.now()
                },
                {
                    contenu: 'Bonsoir, vous êtes invité à prendre part à la semaine du pipo qui se tient le vendredi 25 mai 2018',
                    est_enregistré: false,
                    date_creation: Date.now()
                },
                {
                    contenu: 'Bonsoir, vous êtes invité à prendre part à la semaine du pipo qui se tient le vendredi 25 mai 2018',
                    est_enregistré: false,
                    date_creation: Date.now()
                }

            ],
            date_creation: Date.now()
        },
        {
            nom_groupe: '3GI',
            contacts: [
                {
                    nom_contact: 'coretta',
                    numero: '698901563',
                    date_creation: Date.now()
                },
                {
                    nom_contact:'veronne',
                    numero: '698901563',
                    date_creation: Date.now()
                }
            ],
            messages: [
                {
                    contenu: 'Bonsoir, vous êtes invité à prendre part à la semaine du pipo qui se tient le vendredi 25 mai 2018',
                    est_enregistré: false,
                    date_creation: Date.now()
                },
                {
                    contenu: 'Bonsoir, vous êtes invité à prendre part à la semaine du pipo qui se tient le vendredi 25 mai 2018',
                    est_enregistré: false,
                    date_creation: Date.now()
                },
                {
                    contenu: 'Bonsoir, vous êtes invité à prendre part à la semaine du pipo qui se tient le vendredi 25 mai 2018',
                    est_enregistré: false,
                    date_creation: Date.now()
                },
                {
                    contenu: 'Bonsoir, vous êtes invité à prendre part à la semaine du pipo qui se tient le vendredi 25 mai 2018',
                    est_enregistré: false,
                    date_creation: Date.now()
                }
            ],
            date_creation: Date.now()
        }
    ]
});

sauvergade.save(function(err){
    if(err)
        throw err
    console.log('La sauvegarde de vos paramètres a été effectué');
    console.log(sauvergade);
    exit()
});

function exit() {
    mongoose.disconnect();
}