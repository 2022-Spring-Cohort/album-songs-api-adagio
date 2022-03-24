export default function albumView(album) {

    return `
    <main class="main-content">
        <section class="album-display">
            <header class="album-header">
                <h2 class="album-header__artist">${album.artist}</h2>
                <h3 class="album-header__title">${album.title}</h3>
                <img class="album-img" src=${album.imgUrl}>
                <h3 class="album-header__rating">Rating: ${album.averageAlbumRating.toFixed(3)}</h3>
            </header>
            <section class="album-song-list">
                <h3 class="album-songs-list-header">Songs:</h3>
                ${
                    album.songs.map(song => {
                    return `<h3 class="song-list" id ="song${song.id}">${song.title}</h3>`;
                }).join("")
                }
                
            </section>
            <br>
            <div class="update-album-title-section">
            <input type="text" class="update-album-title" placeholder="New Album Title" />
            <button class="update-button">Update Album Title</button>
           </div>
           <br>
            <div class="NewSongDiv">
                <input type="text" placeholder="Song Name" class="songTitleInput" \>
                <input type="text" placeholder="Song Duration" class="songDurationInput" \>
                <input type="text" placeholder="Song Rating" class="songRatingInput" \>
                  
                <button class="addSongButton">Add Song</button>
            </div>
                <br>
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
            <br>
            <button class="delete-button">Delete Album</button>
            <br>
            <a class="back-navigation">Back to Album Library</a>
        </section>
    </main>`;
}