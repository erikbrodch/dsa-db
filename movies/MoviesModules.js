var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var moviesSchema = new Schema({ 
  name: String
});
var MoviesModel = mongoose.model("MoviesModel", moviesSchema);

var personSchema = new Schema({ 
    name: String,
    role: String
});

var PersonModel = mongoose.model("PersonModel", personSchema);

var personMovieSchema = new Schema({
    movie: {type: Schema.Types.ObjectId, ref: 'MoviesModel'},
    person: {type: Schema.Types.ObjectId, ref: 'PersonModel'}
})

var PersonMovieModel = mongoose.model("PersonMovieModel", personMovieSchema);

var Modules = {MoviesModel: MoviesModel, PersonModel: PersonModel, PersonMovieModel: PersonMovieModel};

module.exports = Modules;

