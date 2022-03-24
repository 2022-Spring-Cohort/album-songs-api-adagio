export default function addAlbumView(album) {

    return `
    <main class="main-content">
        <section class="add-new-album-section">

<div class="add-new-album">
<h2 class="album-title" >Add Album</h2>
<input type="text" class="new-album-title" placeholder="Album Title" />
<input type="text" class="new-album-artist" placeholder="Artist Name" />
<input type="text" class="new-album-url" placeholder="Link to Album Artwork" />  
<button class="add-album-button">Add Album</button>

</div> 
<a class="back-navigation">Back to Album Library</a>
</section>
` } 