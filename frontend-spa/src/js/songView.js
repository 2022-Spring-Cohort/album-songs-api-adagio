export default function songView(song) {
  console.log(song);
  return `
    <main class="main-content">
        <section class="song-display">
            <header class="song-header">
                // <h2 class="album-header__artist">${album.artist}</h2>
                <h3 class="song-title">${song.title}</h3>
            </header>
            <section class="song-list">
                ${album.songs
                  .map((song) => {
                    return `<h3 class="song-list">${song.title}</h3><button class="delete-song">Delete song</button>`;
                  })
                  .join("")}
                
            </section>
            <div class="NewSongDiv">
                <input type="text" placeholder="Song Name" class="songTitleInput" \>
                <input type="text" placeholder="Song Duration" class="songDurationInput" \>
                <input type="text" placeholder="Song Rating" class="songRatingInput" \>
                  
                <button class="addSongButton">Add Song</button>
                    <button class="delete-song">Delete song</button>
            </div>
            <a class="back-navigation">back to album library</a>
        </section>
    </main>`;
}
