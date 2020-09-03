var express = require("express");
var router = express.Router();
const Dep = require("../models/department");

/* GET users listing. */
router.get("/", function (req, res, next) {
  Dep.find({}, function (err, rtn) {
    if (err) throw err;
    res.status(200).json({ });
    ("depReg", { depname: rtn });
  });
});

router.post("/", (req, res) => {
  console.log(req.body.name);
  depReg (req, res);
});

function depReg(req,res){
  var dep = new Dep();
    dep.name = req.body.name;
    dep.save(function(err,rtn){
      if (!err) {
        res.redirect("/users");
      } else {
        console.log("Error During Record Insert :" + err);
      }
    });
}

router.get("/update/:id", (req, res) => {
  Dep.findById(req.params.id, (err, rtn) => {
    if (err) throw err;
    res.render("depReg", { depname:rtn });
  });
});

// router.post("/update", (req, res) => {
//   var update = {
//     name: req.body.name,
//   };
//   Dep.findByIdAndUpdate(req.body.id, { $set: update }, (err, rtn) => {
//     if (err) throw err;
//     res.redirect("/users");
//   });
// });

router.get("/delete/:id", (req, res) => {
  Dep.findByIdAndRemove(req.params.id, (err, rtn) => {
    if (err) throw err;
    res.redirect("/users");
  });
});

module.exports = router;
