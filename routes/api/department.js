var express = require('express');
var router = express.Router();
const Dep = require("../../models/department");

// GET 
// router.get('/all/', function(req, res, next) {
//     Dep.find().then( result=>{
//         console.log(result);
//         return res.status(201).json({deps:result});
//     }
//     ).catch(err =>{
//         console.log(err);
//     })
// });

router.get('/dep/:id',(req,res)=>{
    Dep.findById(req.params.id,(err,rtn)=>{
        if(err){
            res.status(500).json({
                message:"Internal Server Error",
                error:err
            })
        }else{
            res.status(200).json({
                message:"Single Department Name",
                data: rtn
            })
        }
    })
});


router.get('/dep', function(req, res, next) {
    Dep.find((err,rtn)=>{
        if(err){
            res.status(500).json({
                message:"Internal Server Error",
                error:err
            })
        }else{
            res.status(200).json({
                deps: rtn
            })
        }
    })
});

router.post('/dep', (req,res)=>{
    var dep = new Dep();
    dep.dep_name = req.body.dep_name;
    dep.save(function(err,rtn){
     if(err){
         res.status(500).json({
             message:"Internal Server Error",
             error:err
         })
     }else{
        res.status(201).json({
            message:"Department Name Created"
        })
     }
    });
});

router.delete('/dep/:id' , (req,res)=>{
    Dep.findByIdAndRemove(req.params.id,(err,rtn)=>{
        if(err){
            res.status(500).json({
                message:"Internal Server Error",
                error:err
            })
        }else{
            res.status(200).json({
                message:"Department Name Deleted"
            })
        }
    })
});

router.put('/dep/:id',(req,res)=>{
    var update ={
        dep_name : req.body.dep_name,
    };
    Dep.findByIdAndUpdate(req.params.id ,{$set:update}, (err, rtn)=>{
        if(err){
            res.status(500).json({
                message:"Internal Server Error",
                error:err
            })
        }else{
            res.status(200).json({
                message:"Department Name Update Success",
                update_data: rtn
            })
        }
    })
})

module.exports = router;
