const mongoose = require('mongoose')

var PostMessage = mongoose.model('postessay',
{
    title : {type:String},
    message : {type:String},
},'postessays')

module.exports = { PostMessage}