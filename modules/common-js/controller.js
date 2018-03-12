const { Genre } = require("./entities/genre")
const { Movie } = require("./entities/movie")
const { Program } = require("./entities/program")
const { Festival } = require("./entities/festival.js")


var action = new Genre("Action");
var adventure = new Genre("Adventure");
var comic = new Genre("Comic");

var avatar = new Movie("Avatar", action, 150);
var lordOfTheRings = new Movie("Lord of the rings", adventure, 400);
var wolverine = new Movie("Wolverine", comic, 120);
var thor = new Movie("Thor", action, 200);

var saturday = new Program('2017 3 24');
var sunday = new Program('2017 3 25');

var weekendFestival = new Festival("Weekend");

saturday.addMovie(avatar);
saturday.addMovie(wolverine);
saturday.addMovie(thor);
sunday.addMovie(lordOfTheRings);

weekendFestival.addProgram(saturday);
weekendFestival.addProgram(sunday);

module.exports = { weekendFestival }