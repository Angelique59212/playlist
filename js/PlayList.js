let Playlist = function (param){

    this.name = param;

    // new title verif si title exist ??? sinon create,
    // si genre exist target genre sinon create,
    // si artist exist target art. sinon create

    this.newTitle = function (title, artiste) {
        // check if title exist
        // $('option').each(function (){
        //     if($(this).filter('genre').text())
        // })

        // add title in genre and artist
        $('#genre').append("<option value=" + this.genre + ">" + this.genre + "</option>");
        $('#artist').append("<option value=" + this.artist + ">" + this.artist + "</option>");
        $('#title').append("<option value=" + this.title + ">" + this.title + "</option>");
    }

}

let test = $('#genre');

console.log(test.find('option').text());
console.log(test.find('option'));
