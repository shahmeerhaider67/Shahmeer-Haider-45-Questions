function makeAlbum(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Create three album dictionaries
var album1 = makeAlbum("Artist1", "Album1");
var album2 = makeAlbum("Artist2", "Album2", 12); // Including the number of tracks
var album3 = makeAlbum("Artist3", "Album3");
// Print the album information
console.log(album1);
console.log(album2);
console.log(album3);
