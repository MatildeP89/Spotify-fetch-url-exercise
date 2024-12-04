
let fetchMusic = (query, id) => {

let section=document.getElementById(`${id}`);
let row=document.getElementById(`${id}Section`);


fetch ("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query)
.then ((raw) => raw.json())
.then ((res) => {
let albums = res.data;


section.classList.remove("d-none");

for(let i=0; i<albums.length; i++){
    let eachalbum = albums[i];
        console.log(eachalbum.title)

        let songduration=eachalbum.duration
        let newsongduration=songduration.toString().split('').map((char, index) => {return index===0 ? char + ':' : char;}).join('');
        console.log(newsongduration)

    row.innerHTML += `<div class="card w-100 bg-success m-3">
      <img src="${eachalbum.album.cover_xl}" class="card-img-top w-100" alt="${eachalbum.album.title}">
      <div class="card-body">
              <p class="card-text text-dark"> ${eachalbum.title} <br> ${newsongduration} <i class="bi bi-clock-fill"></i>  </p>
      </div>
    </div>`
            
        let listaModalBody=document.getElementById("ListModalBody")
        listaModalBody.innerHTML += `<ul> <li> ${eachalbum.album.title} </li> </ul>`
        }
})
}

fetchMusic("eminem", "eminem");
fetchMusic("metallica", "metallica");
fetchMusic("queen", "queen");



