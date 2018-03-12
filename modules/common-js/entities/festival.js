function Festival(name) {
    this.name = name;
    this.listOfPrograms = [];
}

Festival.prototype.addProgram = function(program) {
    this.listOfPrograms.push(program);
};

Festival.prototype.numberOfFestivalMovies = function() {
    var totalNumberOfMovies = 0;
    var listOfProgramMovies = "";

    for(var i = 0; i < this.listOfPrograms.length; i++){                 
        totalNumberOfMovies += this.listOfPrograms[i].numberOfMovies();
        listOfProgramMovies += this.listOfPrograms[i].getData();
    }

    return totalNumberOfMovies + " movie titles \n" + listOfProgramMovies;
};


Festival.prototype.getData = function() {               

    return this.name + " festival has " + this.numberOfFestivalMovies() + "\n";
};


module.exports = { Festival }