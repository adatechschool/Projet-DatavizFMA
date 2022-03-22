//Art Institute of Chicago API 
const image = document.getElementById("image")
let pages = "1"; 
let reponse;
let url = "https://api.artic.edu/api/v1/artworks?page=1"


fetch(url)
    .then(response => response.json())
    .then(data => console.log(data.data[0].artist_title))
    //.catch(error => alert("Erreur : " + error)); 

    //console.log(response)