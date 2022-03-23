export default function albumView(album) {

    return `
    <main class="main-content">
        <section class="album-display">
            <header class="album-header">
                <h2 class="album-header__artist">${album.artist}</h2>
                <h3 class="album-header__title">${album.title}</h3>
                <h3 class="album-header__rating">${album.averageAlbumRating.toFixed(3)}</h3>
            </header>
            <section class="album-song-list">
                ${
                    album.songs.map(song => {
                    return `<h3 class="song-list" id ="song${song.id}">${song.title}</h3>`;
                }).join("")
                }
                
            </section>
            <div class="update-album-title-section">
            <input type="text" class="update-album-title" placeholder="New Album Title" />
            <button class="update-button">Update Album Title</button>
           <button class="delete-button">Delete Album</button>
           </div>
            <div class="NewSongDiv">
                <input type="text" placeholder="Song Name" class="songTitleInput" \>
                <input type="text" placeholder="Song Duration" class="songDurationInput" \>
                <input type="text" placeholder="Song Rating" class="songRatingInput" \>
                  
                <button class="addSongButton">Add Song</button>
            </div>

            <div class="NewCommentDiv">
            <input type="text" placeholder="Album Comments" class="albumCommentInput" \>
            <input type="text" placeholder="Album Comment Author" class="albumAuthorInput" \>
            <input type="text" placeholder="Album Rating" class="albumRatingInput" \>
            <button class="addAlbumComment">Add Comment</button>

            </div>

            <section class ="album-comments">
            ${
                album.comments.map(comment => {
                    return `<h3 class="display-comments-list">${comment.comment}</h3><h3 class="display-album-rating">${comment.rating.toFixed(3)}</h3>`;
                }).join("")
            }
            
            </section>

            <a class="back-navigation">Back to Album Library</a>
        </section>
    </main>`;
}