export default function addAlbumView(album) {

    return `
    <main class="main-content">
        <section class="add-new-album-section">

<div class="add-new-album">
<h2 class="album-title" >Add Album</h2>
<form action="#" return false">
<input type="text" required class="new-album-title" placeholder="Album Title" \>
<input type="text" required class="new-album-artist" placeholder="Artist Name" \>
<input type="text" required class="new-album-url" placeholder="Link to Album Artwork" \>  
<button type="submit" class="add-album-button">Add Album</button>

</div> 
<a class="back-navigation">Back to Album Library</a>
</section>
` } 