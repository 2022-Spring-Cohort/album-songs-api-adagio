export default function songView(song) {
  console.log(song);
  return `
    <main class="main-content">
        <section class="song-display">
            <header class="song-header">
                <h3 class="song-title">${song.title}</h3>
            </header>
            <div class="NewSongDiv">
          <button class="delete-song">Delete song</button>
            </div>
            <a class="back-navigation">back to album library</a>
        </section>
    </main>`;
}
