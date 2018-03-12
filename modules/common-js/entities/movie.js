function Movie(name, genre, length) {
    this.name = name;
    this.genre = genre;
    this.length = length;
}

Movie.prototype.getData = function() {
    return this.name + ", " + this.length + " min, " + genre.getData();
};

module.exports = { Movie }

