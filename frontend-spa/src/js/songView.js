export default function songView(song) {
  console.log(song);
  return `
    <main class="main-content">
        <section class="song-display">
            <header class="song-header">
                <h3 class="song-title">Song: ${song.title}</h3>
               <a href="${song.songUrl}"><button class="link-to-song-video">Listen on Youtube</button></a>
  
                <h3 class="song-duration">Duration: ${Math.floor(song.duration/60)}:${(song.duration%60<10)?'0'+ song.duration%60:song.duration%60} </h3>
                <h3 class="song-rating">Rating: ${song.averageSongRating.toFixed(3)}</h3>  

            </header>
          <br>
          <form action="#" return false">
            <input type="text" required class="update-song-title" placeholder="New Song Title" />
            <button type="submit" class="update-song-button">Update Song Title</button>
            </form>
            <br>
            <div class="NewSongCommentDiv">
            <form action="#" return false">
            <input type="text" required placeholder="Song Comments" class="songCommentInput" \>
            <input type="text" required placeholder="Song Comment Author" class="songAuthorInput" \>
            <input type="number" min="0" max="10" required placeholder="Song Rating" class="songCommentRatingInput" \>
            <button type="submit" class="addSongComment">Add Comment</button>
            </form>
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
