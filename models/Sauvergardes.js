var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactSchema = new Schema({
    nom: String,
    numero: String,
    operateur: String
});

var messageSchema = new Schema({
    texte: String,
    date_heure: String,
    sent : Boolean,
    total: Number,
    success: Number,
    failed: Number
});


var groupeSchema = new Schema({
    nom: {type: String, required:true}
});

var groupemessageSchema = new Schema({
    id_groupe: Number,
    id_message: Number
});

var groupecontactSchema = new Schema({
    id_groupe: Number,
    id_contact: Number
});

var SauvergardeSchema = new Schema({
    contacts: {type: [contactSchema], default: []},
    groupes: {type: [groupeSchema], default: []},
    messages: {type: [messageSchema], default: []},
    groupesmessage : {type: [groupemessageSchema], default: []},
    groupecontact: {type: [groupecontactSchema], default: []},
});

module.exports = mongoose.model('Sauvergardes', SauvergardeSchema);