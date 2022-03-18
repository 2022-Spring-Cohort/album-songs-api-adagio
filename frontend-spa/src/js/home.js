export default function home(albums) {
    return `
    <main class="main-content">
<section class="campus-list">
${albums.map(album => {
    return `<div class="album">
    <h2 class="album-title" >${album.title}</h2>
    <input type="hidden" class="id_field" value="${album.id}" >
    <h3 class="album-artist">${album.artist}</h3>
    <img class="album-img" src=${album.imgUrl}>
     <input type="text" class="update-album-title" placeholder="New Album Title" />
     <button class="update-button">Update Album Title</button>
    <button class="delete-button">Delete Song</button>
</div>`
}).join("")
}    
</section>
</main>
`
}