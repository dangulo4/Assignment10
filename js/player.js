// HELPER FUNCTION TO RETURN DOM ELEMENTS
const $ = (id) => {
  return document.getElementById(id);
};
// GET DOM ELEMENTS
albumList = $('albumNames');

class Jukebox {
  constructor(albums) {
    this.albums = [];
  }
  addAlbum = function (album) {
    this.albums.push(album);
  };
  favoriteAlbum = function () {
    let max = -1,
      fav;

    for (let i = 0; i < this.albums.length; i++) {
      if (this.albums[i].played > max) {
        max = this.albums[i].played;
        fav = this.albums[i];
      }
    }
    return fav.display();
  };
}

class Album {
  constructor(artist, title) {
    this.artist = artist;
    this.title = title;
    this.played = 0;
  }
  play = function () {
    this.played += 1;
  };
  display = function () {
    return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`;
  };
}

var jbox = new Jukebox();
const album1 = new Album('Operation Ivy', 'Energy');
const album2 = new Album('Blink 182', 'Dude Ranch');
const album3 = new Album('New Found Glory', 'Sticks and Stones');

jbox.addAlbum(album1);
jbox.addAlbum(album2);
jbox.addAlbum(album3);

album1.play();
album2.play();
album2.play();
album2.play();
album2.play();
album2.play();
album3.play();

console.log(`Your favorite album is: ${jbox.favoriteAlbum()}`);

// REBUILD THE OPTION FROM SCRATCH
let option = document.createElement('option');
// LOOP THROUGH ALBUMS OBJECT ON LOAD
window.addEventListener('load', (e) => {
  // let str = '';
  for (const a in jbox.albums) {
    // console.log(this.jbox.albums[a]);
    // str += a.toString() + '\n';
    option.innerHTML +=
      `
     <option>${a}: ${this.jbox.albums[a].artist} ${this.jbox.albums[a].title}
     </option>
    ` + '\n';
  }
  // console.log(str);

  // return str;
});
// BIND OPTION TO THE SELECT
albumList.appendChild(option);
