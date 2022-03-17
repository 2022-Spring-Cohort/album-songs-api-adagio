export default function albumView(album) {
    return `
    <main class="main-content">
        <section class="album-display">
            <header class="album-header">
                <h2 class="album-header__artist">${album.artist}</h2>
                <h3 class="album-header__title">${album.title}</h3>
            </header>
            <section class="album-song-list">
                ${
                    album.songs.map(song => {
                    return `<h3 class="song-list">${song.title}</h3>`;
                }).join("")
                }
                
            </section>

            <div class="NewSongDiv">
                <input type="text" placeholder="Song Name" class="songNameInput" \>
                <input type="text" placeholder="Song Duration" class="songDurationInput" \>
                <input type="text" placeholder="Song Rating" class="songRatingInput" \>
                  
                <button class="addSongButton">Add Song"</button>
            </div>

            <a class="back-navigation">back to album library</a>
        </section>
    </main>`;
}