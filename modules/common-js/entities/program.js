function Program(date) {
    this.date = new Date(date);
    this.movieList = [];            
}

Program.prototype.numberOfMovies = function () {
    return this.movieList.length; 
    };

    Program.prototype.addMovie = function (movie) {
        this.movieList.push(movie);
    };

    Program.prototype.programMoviesLength = function(){
        var sumOfMoviesLength = 0;

        for(var i = 0; i < this.movieList.length; i++){                  
        sumOfMoviesLength += this.movieList[i].length;
        }

    return sumOfMoviesLength;
    };

    Program.prototype.listMovies = function() {
        var list = "";
        for(var i = 0; i < this.movieList.length; i++) {
            list += "\t" + this.movieList[i].name + ", " + this.movieList[i].length + ", " + this.movieList[i].genre.getData() + "\n";
        }

        return list;
    };

    Program.prototype.getProgramDate = function() {
        var year = this.date.getFullYear();
        var month = this.date.getMonth();
        var day = this.date.getDate();

        return day + "." + month + "." + year; 
    };

    Program.prototype.getData = function () {

        return this.getProgramDate() + ", " + this.programMoviesLength() + "\n" + this.listMovies();
    };

    module.exports = { Program }
