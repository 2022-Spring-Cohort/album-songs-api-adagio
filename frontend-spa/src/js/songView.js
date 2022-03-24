export default function songView(song) {
  console.log(song);
  return `
    <main class="main-content">
        <section class="song-display">
            <header class="song-header">
                <h3 class="song-title">Song: ${song.title}</h3>
                <h3 class="song-duration">Duration: ${song.duration}</h3>
                <h3 class="song-rating">Rating: ${song.averageSongRating.toFixed(3)}</h3>    
            </header>
          <br>
            <input type="text" class="update-song-title" placeholder="New Song Title" />
            <button class="update-song-button">Update Song Title</button>
            <br>
            <div class="NewSongCommentDiv">
            <input type="text" placeholder="Song Comments" class="songCommentInput" \>
            <input type="text" placeholder="Song Comment Author" class="songAuthorInput" \>
            <input type="text" placeholder="Song Rating" class="songCommentRatingInput" \>
            <button class="addSongComment">Add Comment</button>
            </div>
            <div class="NewSongDiv">
            <br>
          <button class="delete-song">Delete song</button>
            </div>
            <br>
            <a class="back-navigation">Back to Album Library</a>
        </section>
        
        <section class ="song-comments">
        ${ 
            song.comments.map(comment => { 
                return `<h3 class="display-comments-list">${comment.comment}</h3> <h3 class="display-comment-rating">${comment.rating.toFixed(3)}</h3>`;
            }).join("")
        }
        
        </section>

    </main>`;
}
