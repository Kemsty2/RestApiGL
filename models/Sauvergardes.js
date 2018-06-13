var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactSchema = new Schema({
    nom_contact: String,
    numero: String,
    date_creation: Date
});

var messageSchema = new Schema({
    contenu: String,
    est_enregistré: Boolean,
    date_creation: Date
});


var groupeSchema = new Schema({
    nom_groupe: {type: String, required:true},
    date_creation: {type: Date},
    contacts: {type: [contactSchema], default: []},
    messages: {type: [messageSchema], default: []}
});


var SauvergardeSchema = new Schema({
    email: {type: String, required: true},
    groupes: {type: [groupeSchema], default: []},
    date_creation_sauvegarde: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Sauvergardes', SauvergardeSchema);