const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const AnimeInfoSchema = new Schema({
    name: String,
    description:String,
    year: Number,
    genre: String,
    link:String
})


AnimeInfoSchema.statics.getallAnimes=function (callback) {
    //This 'find' function takes two parameters: 1st object to find 2nd a callback function
    this.find({},function(err,data){
        if(err){
            callback(err,null);
        }else{
            callback(null,data);
        }
  })
}
AnimeInfoSchema.statics.getoneAnime=function (animeinfo,callback) {
    //This 'find' function takes two parameters: 1st object to find 2nd a callback function
    this.findOne({name:animeinfo},function(err,data){
        if(err){
            callback(err,null);
        }else{
            callback(null,data);
        }
  })
}

const AnimeInfo = mongoose.model('animeinfo', AnimeInfoSchema);
module.exports= AnimeInfo