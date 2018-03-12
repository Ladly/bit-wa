function Genre(name) {
    this.name = name; 
}

Genre.prototype.getData = function() {
    var firstChar = this.name.charAt(0).toUpperCase();
    var secondChar = this.name.charAt(this.name.length - 1).toUpperCase();
    
    return firstChar + secondChar;
};

module.exports = { Genre }