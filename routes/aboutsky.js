/**
 * Created by Administrator on 2015-08-08.
 */
var router = require('express').Router();

router.get('/', function (req,res,next){
    res.render('todos',{title: 'TODO 列表', todos: 'yunian'});
});

module.exports = router;