// playlist
let Playlist = function (genre){
    this.genre = genre;

    // new title verif si tilte exist ??? sinon create,
    // si genre exist target genre sinon create,
    // si artist exist target art. sinon create

    this.newTitle = function (title, artiste) {
        // check if title exist

        // add title in genre and artist

    }

    this.optionGenre = function (){
        $('#genre').append("<option value=" + this.genre + ">" + this.genre + "</option>")
    }

    this.optionArtist = function (){
        $('#artist').append("<option value=" + this.artist + ">" + this.artist + "</option>")
    }

    this.optionTitle = function (){
        $('#title').append("<option value=" + this.title + ">" + this.title + "</option>")
    }

}