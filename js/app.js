// create objectArray

// playlist
let Playlist = function (genre, artist, title){
    this.genre = genre;
    this.artist = artist;
    this.title = title;

    // new title verif si tilte exist ??? sinon create,
    // si genre exist target genre sinon create,
    // si artist exist target art. sinon create
    //

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

let pop = new Playlist("Pop", "Amel Bent", "Un deux trois");
pop.optionGenre();
pop.optionArtist();
pop.optionTitle();
