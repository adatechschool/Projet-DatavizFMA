//Art Institute of Chicago API 
const image = document.getElementById("image")
let pages = "1"; 
let reponse;
let url = "https://api.artic.edu/api/v1/artworks?page=1"


fetch(url)
    .then(response => {
        if(response.ok) {
            console.log("coucou", response.json())
            //console.log(response.data[2].artist_title); 
        }
        else {
            console.log("Erreur")
        }
    })
    .catch(error => alert("Erreur : " + error)); 

    //console.log(response)