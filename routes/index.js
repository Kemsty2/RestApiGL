var express = require('express');
var router = express.Router();
var Sauvergarde = require('../models/Sauvergardes');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/restauration', function(req, res, next){
    Sauvergarde.find({}, function(err, sauvegardes){
        if(err)
            res.status(400).send(err);
        res.json(sauvegardes);
    });
});

router.post('/sauvegarde', function (req, res, next) {
    var sauvegarde = new Sauvergarde(req.body);
    sauvegarde.save(function (err) {
        if(err)
            res.status(400).send(err);
        res.status(200).send("Votre Sauvegarde a été effectué avec succès");
    });
});

module.exports = router;
