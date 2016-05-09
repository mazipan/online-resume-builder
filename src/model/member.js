/**
 * Created by irfan.maulana on 11/24/2015.
 */

var mongoose = require('../connection/connection');

var Schema = mongoose.Schema;
var Member = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    modified: { type: Date, default: Date.now },
    created: { type: Date}
});
var MemberModel = mongoose.model('Member', Member);

module.exports = MemberModel;