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
            res.json({"success": 0, "message": err + "\n Impossible d'effectuer la restauration"});
        res.json(sauvegardes);
    });
});

router.post('/sauvegarde', function (req, res, next) {
    var sauvegarde = new Sauvergarde(req.body);
    sauvegarde.save(function (err) {
        if(err)
            res.json({"success": 0, "message": err + "\n Sauvegarde Echoué"});
        res.json({"success": 1 , "message": "Sauvegarde Effectué"});
    });
});

module.exports = router;
