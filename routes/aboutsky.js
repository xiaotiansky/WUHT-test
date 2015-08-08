/**
 * Created by Administrator on 2015-08-08.
 */
var router = require('express').Router();
var AV = require('leanengine');

router.get('/', function (req,res,next){
    res.render('todos');
});
