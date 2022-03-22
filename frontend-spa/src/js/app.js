import home from "./home.js";
import header from "./header.js";
import footer from "./footer.js";
import albumView from "./albumView.js";
import songView from "./songView.js";

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
        if (albumJson.id == albumIdEl.value) {
          makeAlbumView(albumJson);
        }
      });
    });

    const deleteButton = album.querySelector(".delete-button");
    deleteButton.addEventListener("click", () => {
      fetch("http://localhost:8080/albums/" + albumIdEl.value, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((newAlbums) => {
          makeHomeViewFromJSON(newAlbums);
        });
    });

    const updateButton = album.querySelector(".update-button");
    updateButton.addEventListener("click", () => {
      const updateInput = album.querySelector(".update-album-title");
      fetch("http://localhost:8080/albums/" + albumIdEl.value, {
        method: "PATCH",
        body: updateInput.value,
      })
        .then((res) => res.json())
        .then((newAlbums) => {
          makeHomeViewFromJSON(newAlbums);
        });
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

  album.songs.forEach(song => {
    bindSongView(song);
  })

  const songTitleInput = containerEl.querySelector(".songTitleInput");
  const songDurationInput = containerEl.querySelector(".songDurationInput");
  const songRatingInput = containerEl.querySelector(".songRatingInput");

  const addSongBtn = containerEl.querySelector(".addSongButton");
  addSongBtn.addEventListener("click", () => {
    const newSongJson = {
      title: songTitleInput.value,
      duration: songDurationInput.value,
      rating: songRatingInput.value,
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

  const albumCommentInput = containerEl.querySelector(".albumAuthorInput");
  const albumAuthorInput = containerEl.querySelector(".albumCommentInput");
  const addCommentBtn = containerEl.querySelector(".addAlbumComment");
  addCommentBtn.addEventListener("click", () => {
    const newCommentJson = {
      comment: albumCommentInput.value,
      author: albumAuthorInput.value
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

function bindSongView(song) {
//   // fetch("http://localhost:8080/albums/" + albumId)
//   //     .then((res) => res.json())
//   //     .then((album) => {
 console.log(song);
  const viewSong = document.querySelector("#song"+ song.id);
  viewSong.addEventListener("click", () => {
    makeSongView(song);
    });


}

function makeSongView(song){
  containerEl.innerHTML = header();
  containerEl.innerHTML += songView(song);
  containerEl.innerHTML += footer();

  const backButton = containerEl.querySelector(".back-navigation");
  backButton.addEventListener("click", () => {
    makeHomeView();
  });

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

    const songCommentInput = songDiv.querySelector(".songAuthorInput");
    const songAuthorInput = songDiv.querySelector(".songCommentInput");
    const addSongCommentBtn = songDiv.querySelector(".addSongComment");
    addSongCommentBtn.addEventListener("click", () => {
      const newCommentJson = {
        comment: songCommentInput.value,
        author: songAuthorInput.value
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
