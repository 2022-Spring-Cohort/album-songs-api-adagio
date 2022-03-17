import home from "./home.js";
import header from "./header.js";
import footer from "./footer.js";
import albumView from "./albumView.js";

const containerEl = document.querySelector(".container");

function makeHomeView() {
    fetch("http://localhost:8080/albums")
    .then(res => res.json())
    .then(albums => {
        console.log(albums)
        containerEl.innerHTML = header();
        containerEl.innerHTML += home(albums);
        containerEl.innerHTML += footer();

        const albumEl = containerEl.querySelectorAll(".album");

        albumEl.forEach(album => {
            album.addEventListener("click", () => {
                let albumIdEl = album.querySelector(".id_field")
                makeAlbumView(albumIdEl.value);
            })
        })
    })
}

function makeAlbumView(albumId) {
    fetch("http://localhost:8080/albums" + albumId)
    .then(res => res.json())
    .then(album => {
        console.log(album);
        containerEl.innerHTML = header();
        containerEl.innerHTML = albumView(album);
        containerEl.innerHTML = footer();

        const backButton = containerEl.querySelector(".back-navigation");
        backButton.addEventListener("click", () => {
            makeHomeView();
        })

        const songTitleInput = containerEl.querySelector(".songTitleInput");
        const songDurationInput = containerEl.querySelector(".songDurationInput");
        const songRatingInput = containerEl.querySelector(".songRatingInput");

        const addSongBtn = containerEl.querySelector(".addSongButton");
        addSongBtn.addEventListener("click", () => {
            const newSongJson = 
            {
                "title": songTitleInput.value,
                "duration": songDurationInput.value,
                "rating": songRatingInput.value
            }
            fetch("http://localhost.8080/albums/${albumId}/addSong", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newSongJson)
            })
            .then(res => res.json())
            .then(album => {
                makeAlbumView(album.id);
            })
        })
    })
}


makeHomeView();