export default function home(albums) {
    return `
<main class="main-content">
<section class="albums-list">
${albums.map(album => {
    return `<div class="album">
    <h2 class="album-artist">${album.artist}</h2>
    <h3 class="album-title" >${album.title}</h3>
    <input type="hidden" class="id_field" value="${album.id}" >
    <img class="album-img" src=${album.imgUrl}>

</div>`
}).join("")
}

</section>

</main>
`}
