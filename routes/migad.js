var express = require('express');
var router = express.Router();
 
/* GET helo page. */
router.get('/', function(req, res, next) {
    var p1 = req.query["p1"];
    var p2 = req.query.p2;
    var msg = p1 == undefined ? "" : p1 + "," + p2;
    res.render('migad', 
        {
            title: 'migration adviser prototype',
            msg: msg,
            input: '',
            data: ''
        }
    );
});
 
/* POST helo page. */
router.post('/', function(req, res, next) {
var app = req.body['application'];
var vmOrPhysical = req.body['vm or physical'];
var serverVender = req.body['server vender'];
var serverModel = req.body['server model'];
var nCPUCore = req.body['#CPUCore'];
var solutiondic = {
                0:['10','EC2','ELB'],
                1:['5','Lambda','APIGateway'],
                2:['1','ECS'],
                3:['1','EB'],
                4:['1','EMR'],
                5:['1','Redshift'],
                6:['1','Aurora']
}
    var nAnswers = Math.round( Math.random()*7 );
    var answers = {};
    for (i =0;i<nAnswers;i++){
        soldic_no=Math.round( Math.random()*7);
/*        answers={soldic_no:solutiondic[soldic_no]};*/
        answers[soldic_no]=solutiondic[soldic_no];
    }
    console.log("======")
    console.log(nAnswers)
    console.log(answers)
    console.log("======")

    res.render('migad', 
        {
            title: 'migration adviser prototype',
            msg:  Object.keys(answers).length + " solutions found" ,
            input: "default",
            data: answers

        }
    );
});
 
module.exports = router;