export default function albumView(album) {
    console.log(album);
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
                    return `<h3 class="song-list" id ="song${song.id}">${song.title}</h3>`;
                }).join("")
                }
                
            </section>

            <div class="NewSongDiv">
                <input type="text" placeholder="Song Name" class="songTitleInput" \>
                <input type="text" placeholder="Song Duration" class="songDurationInput" \>
                <input type="text" placeholder="Song Rating" class="songRatingInput" \>
                  
                <button class="addSongButton">Add Song</button>
            </div>

            <div class="addAlbumComment">
            <input type="text" placeholder="Album Comments" class="albumCommentInput" \>
            <button class="addAlbumCommentBtn">Add Comment</button>
            </div>

            <a class="back-navigation">Back to Album Library</a>
        </section>
    </main>`;
}