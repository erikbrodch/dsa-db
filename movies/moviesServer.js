var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/moviespeople');//connecting mongoose to mongodb 
var Modules = require("./MoviesModules")


var forrest = new Modules.MoviesModel({name: "Forrest Gump"})
var lion = new Modules.MoviesModel({name: "Training day"})
var schindler = new Modules.MoviesModel({name: "Schindler's List"})



var tom = new Modules.PersonModel({name: "Tom", role: "actor"})
var denzel = new Modules.PersonModel({name: "Denzel", role: "actor"})
var david = new Modules.PersonModel({name: "David", role: "director"})

// forrest.save()
// lion.save()
// schindler.save()
// tom.save()
// denzel.save()
// david.save()


// function createPMrelationship(person, movie){
//   var pmr = new Modules.PersonMovieModel({person: person, movie: movie})
//   pmr.save()
// }

// var forrestF = [tom,denzel]
// for(f in forrestF){
//   createPMrelationship(forrestF[f], forrest)
// }

// var lionL = [denzel,david,tom]
// for(l in lionL){
//   createPMrelationship(lionL[l], lion)
// }

// var schindlerS = [david, tom]
// for(s in schindlerS){
//   createPMrelationship(schindlerS[s], schindler)
// }

//find actors from movie
Modules.MoviesModel.findOne({name:"Forrest Gump"}, function(err, Forrest){
    console.log(Forrest, err);
  Modules.PersonMovieModel.find({movie:Forrest._id},'-movie -_id -__v').populate('person', 'name -_id').exec(function(err, rel){
    console.log("got rel", rel)
  })
})

app.listen(4000);
