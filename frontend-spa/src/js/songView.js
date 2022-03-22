export default function songView(song) {
  console.log(song);
  return `
    <main class="main-content">
        <section class="song-display">
            <header class="song-header">
                <h3 class="song-title">${song.title}</h3>
                <h3 class="song-duration">${song.duration}</h3>
                <h3 class="song-rating">${song.rating}</h3>    
            </header>
            <div class="addRating">
            <input type="text" placeholder="Song Rating" class="songRatingInput" \>
            <button class="addRatingBtn">Add Rating</button>
            </div>
            <div class="addSongComment">
            <input type="text" placeholder="Song Comments" class="songCommentInput" \>
            <button class="addSongCommentBtn">Add Comment</button>
            </div>
            <div class="NewSongDiv">
          <button class="delete-song">Delete song</button>
            </div>
            <a class="back-navigation">Back to Album Library</a>
        </section>
    </main>`;
}
