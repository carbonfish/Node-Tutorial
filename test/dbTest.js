var conf = require('../test/config.js')
var mongoose = require('mongoose');
console.log(conf.db_url);
mongoose.connect(conf.db_url);

/*var db = mongoose.connection;
  db.on('error',function(stream){

  console.error('error connection');


  })

  var movieSchema = mongoose.Schema({
name: String
})
var aMovie = mongoose.model('Movie',movieSchema);
var aTestMovie = new aMovie({name: 'test '});
aTestMovie.save(function(err,movie){
if(err){
console.error(err);
}
console.log('save');
mongoose.disconnect();
})
aMovie.find(function(err,movies){
if(err){
return console.error(err);
}
console.log(movies);


})
 */
var Movie = require('../models/movie');
var MovieSchema = require ('../schemas/movieSchema');
describe("DB connection",function(){
  var db = mongoose.connection;
  db.on('error',function(stream){
    console.error("connection error");
   });
 it('db connection test',function(done){ 
  var testMovie = new Movie({
    title:'hello world}'});
  testMovie.save(function(err,movie){
    if(err){
      return console.error(err);
    }
      mongoose.disconnect();
      done();
    })
    Movie.find(function(err,movies){
    if(err){
      return console.error(err);
    }
    })
  })
})
