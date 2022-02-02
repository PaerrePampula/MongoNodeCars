var mongoose =  require('mongoose');

var Schema = mongoose.Schema;

var CarSchema = new Schema
({
    brand: { type: String, required: true, maxlength: 100},
    model: { type: String, required: true, maxlength: 150},
    year: { type: Number, required: true},
    color: { type: String, required: false}
});

module.exports = mongoose.model('Car', CarSchema)