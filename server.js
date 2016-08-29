var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/planetvisitor');//connecting mongoose to mongodb 
var Modules = require("./UserPlanetModules")


var mars = new Modules.PlanetModel({name: "Mars"})
var venus = new Modules.PlanetModel({name: "Venus"})

var mars = new Modules.PlanetModel({name: "Mars"})
var venus = new Modules.PlanetModel({name: "Venus"})

var a = new Modules.VisitorModel({name: "Alfred"})
var b = new Modules.VisitorModel({name: "Barry"})
var c = new Modules.VisitorModel({name: "Chris"})
var d = new Modules.VisitorModel({name: "Donald"})
/*
mars.save()
venus.save()
a.save()
b.save()
c.save()
d.save()


function createPVrelationship(planet, visitor){
  var pvr = new Modules.PlanetVisitorModel({planet: planet, visitor: visitor})
  pvr.save()
}

var venusV = [a,c,d]
for(v in venusV){
  createPVrelationship(venus, venusV[v])
}

var marsM = [d,c,b,a]
for(m in marsM){
  createPVrelationship(mars, marsM[m])
}
*/
Modules.VisitorModel.findOne({name:"Alfred"}, function(err, Alfred){
    console.log(Alfred, err);
  Modules.PlanetVisitorModel.find({visitor:Alfred._id}, '-visitor -_id -__v').populate('planet', 'name -_id').exec(function(err, rel){
    console.log("got rel", rel)
  })
})

app.listen(4000);