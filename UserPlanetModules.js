var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var planetSchema = new Schema({ 
  name: String
});
var PlanetModel = mongoose.model("PlanetModel", planetSchema);

var visitorSchema = new Schema({ 
    name: String
});

var VisitorModel = mongoose.model("VisitorModel", visitorSchema);

var planetVisitorSchema = new Schema({
    planet: {type: Schema.Types.ObjectId, ref: 'PlanetModel'},
    visitor: {type: Schema.Types.ObjectId, ref: 'VisitorModel'}
})

var PlanetVisitorModel = mongoose.model("PlanetVisitorModel", planetVisitorSchema);

var Modules = {PlanetModel: PlanetModel, VisitorModel: VisitorModel, PlanetVisitorModel: PlanetVisitorModel};

module.exports = Modules;
