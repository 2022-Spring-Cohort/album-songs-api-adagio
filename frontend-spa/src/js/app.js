import home from "./home.js";
import header from "./header.js";
import footer from "./footer.js";
import albumView from "./albumView.js";
import songView from "./songView.js";
import addAlbumView from "./addAlbumView.js";


const containerEl = document.querySelector(".container");

function makeHomeView() {
  fetch("http://localhost:8080/albums")
    .then((res) => res.json())
    .then((albums) => {
      makeHomeViewFromJSON(albums);
    });

}

function makeHomeViewFromJSON(albums) {
  console.log(albums);
  containerEl.innerHTML = header();
  containerEl.innerHTML += home(albums);
  containerEl.innerHTML += footer();

  const albumEl = containerEl.querySelectorAll(".album");

  albumEl.forEach((album) => {
    let albumIdEl = album.querySelector(".id_field");
    const albumH2 = album.querySelector(".album-img");
    albumH2.addEventListener("click", () => {
      albums.forEach((albumJson) => {
        if (albumIdEl.value == 1){
            makeAddAlbumView(albumJson);
        }
        else if(albumJson.id == albumIdEl.value) {
          makeAlbumView(albumJson);
        }
      });
    });
  });
}

function makeAddAlbumView(album) {
  containerEl.innerHTML = header();
  containerEl.innerHTML += addAlbumView(album);
  containerEl.innerHTML += footer();

  const backButton = containerEl.querySelector(".back-navigation");
  backButton.addEventListener("click", () => {
    makeHomeView();
  });
  const newAlbumTitleInput = containerEl.querySelector(".new-album-title");
  const newAlbumArtistInput = containerEl.querySelector(".new-album-artist");
  const newAlbumImgInput = containerEl.querySelector(".new-album-url");

  const addNewAlbumBtn = containerEl.querySelector(".add-album-button");
  addNewAlbumBtn.addEventListener("click", () => {
    const newAlbumJson = {
      title: newAlbumTitleInput.value,
      artist: newAlbumArtistInput.value,
      imgUrl: newAlbumImgInput.value,
      comments: []
    };
    fetch(`http://localhost:8080/albums/addAlbum`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAlbumJson),
    })
      .then((res) => res.json())
      .then((album) => {
        makeHomeView();
      });
  });
}

function makeAlbumView(album) {
  // fetch("http://localhost:8080/albums/" + albumId)
  //     .then((res) => res.json())
  //     .then((album) => {
  console.log(album);
  containerEl.innerHTML = header();
  containerEl.innerHTML += albumView(album);
  containerEl.innerHTML += footer();

  const backButton = containerEl.querySelector(".back-navigation");
  backButton.addEventListener("click", () => {
    makeHomeView();
  });

  const homeButton = document.querySelector(".nav-bar-home-btn");
  homeButton.addEventListener("click", () => {
    location.reload();
  })

  album.songs.forEach(song => {
    bindSongView(song, album.id);
  })
  // const albumEl = containerEl.querySelectorAll(".album");
  console.log(containerEl);
  const updateButton = containerEl.querySelector(".update-button");
  updateButton.addEventListener("click", () => {
    let x = update-button.value;
    if (x == "") {
      return false;
    }
    const updateInput = containerEl.querySelector(".update-album-title");
    fetch("http://localhost:8080/albums/" + album.id, {
      method: "PATCH",
      body: updateInput.value,
    })
      .then((res) => res.json())
      .then((newAlbums) => {
        makeHomeViewFromJSON(newAlbums);
      });
  });

  const deleteButton = containerEl.querySelector(".delete-button");
  deleteButton.addEventListener("click", () => {
    fetch("http://localhost:8080/albums/" + album.id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((newAlbums) => {
        makeHomeViewFromJSON(newAlbums);
      });
  });

  const songTitleInput = containerEl.querySelector(".songTitleInput");
  const songDurationInputMinutes = containerEl.querySelector(".songDurationInputMinutes");
  const songDurationInputSeconds = containerEl.querySelector(".songDurationInputSeconds");
  const songVideoLink = containerEl.querySelector(".songVidInput");


  const addSongBtn = containerEl.querySelector(".addSongButton");
  addSongBtn.addEventListener("click", () => {
    let x = songTitleInput.value;
    let y = songDurationInputMinutes.value;
    let z = songDurationInputSeconds.value;
    let v = songVideoLink.value;
  if (x == "" || y == "" || z == "" || v == "") {
    return false;
  }
    const newSongJson = {
      title: songTitleInput.value,
      duration: eval(songDurationInputMinutes.value*60) + eval(songDurationInputSeconds.value),
      comments: [],
      songUrl: songVideoLink.value
    };
    fetch(`http://localhost:8080/albums/${album.id}/addSong`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSongJson),
    })
      .then((res) => res.json())
      .then((album) => {
        makeAlbumView(album);
      });
  });

  const albumCommentInput = containerEl.querySelector(".albumCommentInput");
  const albumAuthorInput = containerEl.querySelector(".albumAuthorInput");
  const albumRatingInput = containerEl.querySelector(".albumRatingInput");
  const addCommentBtn = containerEl.querySelector(".addAlbumComment");
  addCommentBtn.addEventListener("click", () => {
    let x = albumCommentInput.value;
    let y = albumAuthorInput.value;
    let z = albumRatingInput.value;
  if (x == "" || y == "" || z == "") {
    return false;
  }
    const newCommentJson = {
      comment: albumCommentInput.value,
      author: albumAuthorInput.value,
      rating: albumRatingInput.value
    };
    fetch(`http://localhost:8080/albums/${album.id}/addComment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCommentJson),
    })
      .then((res) => res.json())
      .then((album) => {
        console.log(album);
        makeAlbumView(album);
      });
  });


}

function bindSongView(song, albumId) {
//   // fetch("http://localhost:8080/albums/" + albumId)
//   //     .then((res) => res.json())
//   //     .then((album) => {
 console.log(song);
  const viewSong = document.querySelector("#song"+ song.id);
  viewSong.addEventListener("click", () => {
    makeSongView(song, albumId);
    });


}

function makeSongView(song, albumId){
  console.log(song);
  containerEl.innerHTML = header();
  containerEl.innerHTML += songView(song);
  containerEl.innerHTML += footer();

  const backButton = containerEl.querySelector(".back-navigation");
  backButton.addEventListener("click", () => {
    makeHomeView();
  });

  const homeButton = document.querySelector(".nav-bar-home-btn");
  homeButton.addEventListener("click", () => {
    location.reload();
  })
  
  const songTitleInput = containerEl.querySelector(".songTitleInput");
  const songDurationInput = containerEl.querySelector(".songDurationInput"); 
  const songRatingInput = containerEl.querySelector(".songRatingInput");
  const songDiv = containerEl.querySelector(".main-content");


      const deleteSongButton = document.querySelector(".delete-song");
      deleteSongButton.addEventListener("click", () => {

        fetch("http://localhost:8080/songs/" + song.id, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((album) => {
            makeAlbumView(album);
          });
      });

  
      const updateSongButton = songDiv.querySelector(".update-song-button");
      updateSongButton.addEventListener("click", () => {
        let x = update-song-button.value;
        if (x == "") {
          return false;
        }
        const updateInput = songDiv.querySelector(".update-song-title");
        fetch("http://localhost:8080/albums/songs/" + song.id, {
          method: "PATCH",
          body: updateInput.value,
        })
          .then((res) => res.json())
          .then((albums) => {
            console.log(albums)
          albums.forEach(album => {
            if( album.id == albumId) {
              makeAlbumView(album)
            }
          })
          });
      });
      
    const songCommentInput = songDiv.querySelector(".songCommentInput");
    const songAuthorInput = songDiv.querySelector(".songAuthorInput");
    const songCommentRatingInput = songDiv.querySelector(".songCommentRatingInput");
    const addSongCommentBtn = songDiv.querySelector(".addSongComment");
    addSongCommentBtn.addEventListener("click", () => {
      let x = songCommentInput.value;
      let y = songAuthorInput.value;
      let z = songCommentRatingInput.value;
      
      if (x == "" || y == "" || z == "") {
        return false;
      }
      const newCommentJson = {
        comment: songCommentInput.value,
        author: songAuthorInput.value,
        rating: songCommentRatingInput.value
      };
      fetch(`http://localhost:8080/albums/songs/${song.id}/addComment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCommentJson),
      })
        .then((res) => res.json())
        .then((song) => {
          console.log(song);
          makeSongView(song);
        });
    });

  }
  



makeHomeView();
